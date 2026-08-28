import React, { useState, useEffect } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionData {
  contributions: ContributionDay[];
}

// Build the grid data: pad leading empty cells so Sun aligns to row 0
function buildGrid(days: ContributionDay[]) {
  const first = new Date(days[0].date + 'T00:00:00');
  const firstDow = first.getDay(); // 0 = Sunday

  const cells: (ContributionDay | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  days.forEach((d) => cells.push(d));
  return cells;
}

// Extract month labels per column
function buildMonths(cells: (ContributionDay | null)[], totalCols: number) {
  const labels: string[] = [];
  let lastMonth = -1;
  for (let c = 0; c < totalCols; c++) {
    const colDays = cells.slice(c * 7, c * 7 + 7).filter(Boolean) as ContributionDay[];
    let label = '';
    if (colDays[0]) {
      const dt = new Date(colDays[0].date + 'T00:00:00');
      if (dt.getMonth() !== lastMonth) {
        label = dt.toLocaleString('en-US', { month: 'short' });
        lastMonth = dt.getMonth();
      }
    }
    labels.push(label);
  }
  return labels;
}

const SectionShell: React.FC<{ username: string; children: React.ReactNode }> = ({ username, children }) => (
  <section className="gh-activity band band-b" id="github-activity">
    <div className="wrap">
      <div className="eyebrow">
        <span className="num">05</span> / GitHub Activity
      </div>
      <div className="sec-head">
        <h2 className="sec-title">GitHub Activity</h2>
        <a className="gh-link" href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          @{username} ↗
        </a>
      </div>
      {children}
    </div>
  </section>
);

export const GithubActivity: React.FC = () => {
  const username = 'Vishal795-knightrider';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalContributions, setTotalContributions] = useState(0);
  const [cells, setCells] = useState<(ContributionDay | null)[]>([]);
  const [monthLabels, setMonthLabels] = useState<string[]>([]);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!res.ok) throw new Error('bad response');
        const data: ContributionData = await res.json();
        const days = Array.isArray(data.contributions) ? data.contributions : [];
        if (!days.length) throw new Error('empty');

        const total = days.reduce((s, d) => s + (d.count || 0), 0);
        setTotalContributions(total);

        const processedCells = buildGrid(days);
        setCells(processedCells);

        const totalCols = Math.ceil(processedCells.length / 7);
        setMonthLabels(buildMonths(processedCells, totalCols));
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    fetchActivity();
  }, [username]);

  if (loading) {
    return (
      <SectionShell username={username}>
        <div className="gh-box">
          <div className="gh-loading">
            <span className="gh-spinner"></span> Loading live contribution data from GitHub…
          </div>
        </div>
      </SectionShell>
    );
  }

  if (error || !cells.length) {
    return (
      <SectionShell username={username}>
        <div className="gh-box">
          <div className="gh-fallback">
            Couldn't load live data right now — check the real graph on{' '}
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
              github.com/{username} ↗
            </a>
            .
          </div>
        </div>
      </SectionShell>
    );
  }

  const totalCols = Math.ceil(cells.length / 7);

  // Build cell elements column-first (matches CSS grid-auto-flow: column)
  const gridCells: React.ReactNode[] = [];
  for (let c = 0; c < totalCols; c++) {
    for (let r = 0; r < 7; r++) {
      const idx = c * 7 + r;
      const cell = cells[idx];
      if (!cell) {
        gridCells.push(<div key={`e-${idx}`} className="gh-cell" />);
      } else {
        const level = Math.max(0, Math.min(4, cell.level || 0));
        const label = `${cell.count} contribution${cell.count === 1 ? '' : 's'} on ${cell.date}`;
        gridCells.push(<div key={cell.date} className={`gh-cell l${level}`} title={label} />);
      }
    }
  }

  return (
    <SectionShell username={username}>
      <div className="gh-container">
        {/* Calendar wrapper — scrollable only on tiny screens, not desktop */}
        <div className="gh-scroll-wrap">
          <div className="gh-calendar">
            {/* Weekday labels col */}
            <div className="gh-weekdays">
              <span></span>
              <span>Mon</span>
              <span></span>
              <span>Wed</span>
              <span></span>
              <span>Fri</span>
              <span></span>
            </div>

            {/* Month labels + cell grid */}
            <div className="gh-cal-body">
              <div className="gh-months" style={{ gridTemplateColumns: `repeat(${totalCols}, 1fr)` }}>
                {monthLabels.map((label, i) => (
                  <div key={i} className="gh-month-label">{label}</div>
                ))}
              </div>
              <div className="gh-grid" style={{ gridTemplateColumns: `repeat(${totalCols}, 1fr)` }}>
                {gridCells}
              </div>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="gh-footer">
          <div className="gh-total">
            <span className="gh-total-num">{totalContributions.toLocaleString()}</span>
            <span className="gh-total-label"> contributions in the last year</span>
          </div>
          <div className="gh-legend-row">
            <span className="gh-legend-text">Less</span>
            <span className="gh-cell" />
            <span className="gh-cell l1" />
            <span className="gh-cell l2" />
            <span className="gh-cell l3" />
            <span className="gh-cell l4" />
            <span className="gh-legend-text">More</span>
          </div>
        </div>

        <div className="gh-view-link">
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
            View on GitHub ↗
          </a>
        </div>
      </div>
    </SectionShell>
  );
};

export default GithubActivity;
