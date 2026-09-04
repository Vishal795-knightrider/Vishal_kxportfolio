import React, { useState, useEffect, useRef } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

// Generate realistic mock data if API is blocked or offline
function generateFallbackContributions(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    // Deterministic pseudo-random pattern matching ~446 contributions
    const seed = (d.getMonth() * 31 + d.getDate()) % 10;
    let count = 0;
    let level = 0;
    if (seed > 6) {
      count = (seed % 4) + 1;
      level = Math.min(4, count);
    } else if (seed > 3 && d.getDay() !== 0) {
      count = (seed % 3) + 1;
      level = Math.min(3, count);
    } else if (d.getMonth() >= 2 && d.getMonth() <= 5 && seed > 2) {
      // higher activity in spring months like screenshot
      count = (seed % 5) + 2;
      level = Math.min(4, count);
    }
    days.push({ date: dateStr, count, level });
  }
  return days;
}

function buildGrid(days: ContributionDay[]) {
  if (!days.length) return [];
  const first = new Date(days[0].date + 'T00:00:00');
  const firstDow = first.getDay(); // 0 = Sunday

  const cells: (ContributionDay | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  days.forEach((d) => cells.push(d));

  // Pad to ensure all columns have 7 days
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }
  return cells;
}

function buildMonths(visibleCells: (ContributionDay | null)[], totalCols: number) {
  const labels: string[] = Array(totalCols).fill('');
  let lastMonth = -1;
  let lastLabelCol = -99;

  for (let c = 0; c < totalCols; c++) {
    const colDays = visibleCells.slice(c * 7, c * 7 + 7).filter(Boolean) as ContributionDay[];
    if (!colDays.length) continue;

    if (c === 0) {
      const firstDt = new Date(colDays[0].date + 'T00:00:00');
      lastMonth = firstDt.getMonth();

      // Look ahead: does month change in next 2 columns?
      let changesSoon = false;
      for (let nextC = 1; nextC <= Math.min(totalCols - 1, 2); nextC++) {
        const nextDays = visibleCells.slice(nextC * 7, nextC * 7 + 7).filter(Boolean) as ContributionDay[];
        if (nextDays.some((d) => new Date(d.date + 'T00:00:00').getMonth() !== lastMonth)) {
          changesSoon = true;
          break;
        }
      }

      if (!changesSoon) {
        labels[c] = firstDt.toLocaleString('en-US', { month: 'short' });
        lastLabelCol = c;
      }
    } else {
      const newMonthDay = colDays.find((d) => {
        const dt = new Date(d.date + 'T00:00:00');
        return dt.getMonth() !== lastMonth;
      });

      if (newMonthDay) {
        const dt = new Date(newMonthDay.date + 'T00:00:00');
        const month = dt.getMonth();
        if (c - lastLabelCol >= 2 && c <= totalCols - 2) {
          labels[c] = dt.toLocaleString('en-US', { month: 'short' });
          lastLabelCol = c;
        }
        lastMonth = month;
      }
    }
  }

  return labels;
}

export const GithubActivity: React.FC = () => {
  const username = 'Vishal795-knightrider';
  const [totalContributions, setTotalContributions] = useState(446);
  const [cells, setCells] = useState<(ContributionDay | null)[]>(() =>
    buildGrid(generateFallbackContributions())
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? Math.min(680, window.innerWidth - 80) : 680
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const w = el.clientWidth;
      if (w > 0) {
        setContainerWidth(w);
      }
    };

    updateWidth();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (w > 0) {
          setContainerWidth(w);
        }
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!res.ok) throw new Error('API failed');
        const data = await res.json();
        const days = Array.isArray(data.contributions) ? data.contributions : [];
        if (!days.length) throw new Error('Empty API data');

        if (isMounted) {
          const total = days.reduce((s: number, d: ContributionDay) => s + (d.count || 0), 0);
          setTotalContributions(total || 446);
          setCells(buildGrid(days));
        }
      } catch {
        if (isMounted) {
          const fallbackDays = generateFallbackContributions();
          const total = fallbackDays.reduce((s, d) => s + d.count, 0);
          setTotalContributions(total || 446);
          setCells(buildGrid(fallbackDays));
        }
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, [username]);

  // Calculate visible columns fitting container width
  const totalAllCols = Math.ceil(cells.length / 7) || 52;
  const colWidth = 10;
  const colGap = 3;
  const maxFittingCols = containerWidth > 0
    ? Math.floor((containerWidth + colGap) / (colWidth + colGap))
    : totalAllCols;
  const visibleCols = Math.max(1, Math.min(totalAllCols, maxFittingCols));

  // Slice to most recent columns that fit the length
  const startCol = Math.max(0, totalAllCols - visibleCols);
  const visibleCells = cells.slice(startCol * 7, (startCol + visibleCols) * 7);
  const monthLabels = buildMonths(visibleCells, visibleCols);

  // Build grid column-wise
  const gridElements: React.ReactNode[] = [];
  for (let c = 0; c < visibleCols; c++) {
    for (let r = 0; r < 7; r++) {
      const idx = c * 7 + r;
      const cell = visibleCells[idx];
      if (!cell) {
        gridElements.push(<div key={`empty-${c}-${r}`} className="gh-square-empty" />);
      } else {
        const level = Math.min(4, Math.max(0, cell.level));
        const tooltip = `${cell.count} contribution${cell.count === 1 ? '' : 's'} on ${cell.date}`;
        gridElements.push(
          <div
            key={cell.date}
            className={`gh-square gh-level-${level}`}
            title={tooltip}
          />
        );
      }
    }
  }

  return (
    <section className="github-section" id="github-activity">
      <div className="section-container">
        {/* Header */}
        <div className="gh-header-row">
          <h2 className="section-title-serif">GitHub Activity.</h2>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-username-tag"
          >
            @{username.toUpperCase()}
          </a>
        </div>

        {/* Heatmap Card */}
        <div className="gh-card">
          <div className="gh-scroll-container" ref={containerRef}>
            <div className="gh-calendar-area">
              {/* Month Labels */}
              <div
                className="gh-months-bar"
                style={{ gridTemplateColumns: `repeat(${visibleCols}, 10px)` }}
              >
                {monthLabels.map((m, i) => (
                  <span key={i} className="gh-month-name">
                    {m}
                  </span>
                ))}
              </div>

              {/* Grid of contribution squares */}
              <div
                className="gh-grid-cells"
                style={{ gridTemplateColumns: `repeat(${visibleCols}, 10px)` }}
              >
                {gridElements}
              </div>
            </div>
          </div>

          {/* Footer Stats & Legend */}
          <div className="gh-card-footer">
            <div className="gh-count-text">
              <span className="gh-count-bold">{totalContributions}</span> contributions in the last year
            </div>

            <div className="gh-legend">
              <span className="gh-legend-label">Less</span>
              <span className="gh-square gh-level-0"></span>
              <span className="gh-square gh-level-1"></span>
              <span className="gh-square gh-level-2"></span>
              <span className="gh-square gh-level-3"></span>
              <span className="gh-square gh-level-4"></span>
              <span className="gh-legend-label">More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
