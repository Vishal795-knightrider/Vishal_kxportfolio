import React, { useState, useEffect } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionData {
  contributions: ContributionDay[];
}

export const GithubActivity: React.FC = () => {
  const username = 'Vishal795-knightrider';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalContributions, setTotalContributions] = useState(0);
  const [cells, setCells] = useState<(ContributionDay | null)[]>([]);
  const [months, setMonths] = useState<{ label: string; width: number }[]>([]);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!res.ok) throw new Error('API returned non-OK response');
        
        const data: ContributionData = await res.json();
        const days = Array.isArray(data.contributions) ? data.contributions : [];
        if (!days.length) throw new Error('Empty contributions data');

        // Sum contributions
        const total = days.reduce((sum, d) => sum + (d.count || 0), 0);
        setTotalContributions(total);

        // Grid cells processing
        const first = new Date(days[0].date + 'T00:00:00');
        const firstDow = first.getDay(); // 0 = Sunday

        const processedCells: (ContributionDay | null)[] = [];
        for (let i = 0; i < firstDow; i++) {
          processedCells.push(null);
        }
        days.forEach((d) => processedCells.push(d));
        setCells(processedCells);

        // Month labels processing
        const totalCols = Math.ceil(processedCells.length / 7);
        const monthLabels: string[] = [];
        let lastMonth = -1;

        for (let c = 0; c < totalCols; c++) {
          const colDays = processedCells.slice(c * 7, c * 7 + 7).filter(Boolean);
          const d = colDays[0];
          let label = '';
          if (d) {
            const dt = new Date(d.date + 'T00:00:00');
            if (dt.getMonth() !== lastMonth) {
              label = dt.toLocaleString('en-US', { month: 'short' });
              lastMonth = dt.getMonth();
            }
          }
          monthLabels.push(label);
        }
        
        // Save calendar labels
        setMonths(monthLabels.map(label => ({ label, width: 1 })));
        setLoading(false);
      } catch (err) {
        console.error('Failed to load GitHub activity:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchActivity();
  }, [username]);

  if (loading) {
    return (
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
          <div id="ghActivity" className="gh-box">
            <div className="gh-loading">
              <span className="gh-spinner"></span> Loading live contribution data from GitHub…
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !cells.length) {
    return (
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
          <div id="ghActivity" className="gh-box">
            <div className="gh-fallback">
              Couldn't load live activity data just now — see the real, up-to-date graph directly on{' '}
              <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                github.com/{username} ↗
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    );
  }

  const totalCols = Math.ceil(cells.length / 7);

  // Render cells matrix in column-first layout as HTML grid did
  const gridCells: JSX.Element[] = [];
  for (let c = 0; c < totalCols; c++) {
    for (let r = 0; r < 7; r++) {
      const cellData = cells[c * 7 + r];
      const cellIndex = c * 7 + r;
      
      if (!cellData) {
        gridCells.push(<div key={`empty-${cellIndex}`} className="gh-cell"></div>);
      } else {
        const level = Math.max(0, Math.min(4, cellData.level || 0));
        const label = `${cellData.count} contribution${cellData.count === 1 ? '' : 's'} on ${cellData.date}`;
        gridCells.push(
          <div
            key={cellData.date}
            className={`gh-cell l${level}`}
            title={label}
          ></div>
        );
      }
    }
  }

  return (
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
        
        <div id="ghActivity" className="gh-box">
          <div className="gh-calendar-wrap">
            <div className="gh-weekday-labels">
              <span></span>
              <span>Mon</span>
              <span></span>
              <span>Wed</span>
              <span></span>
              <span>Fri</span>
              <span></span>
            </div>
            <div className="gh-cal-main">
              <div className="gh-months">
                {months.map((item, idx) => (
                  <div key={idx} className="gh-month-label">
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="gh-grid">{gridCells}</div>
            </div>
          </div>
          <div className="gh-summary">
            <span>
              {totalContributions.toLocaleString()} contributions in the last year —{' '}
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)' }}
              >
                view on GitHub ↗
              </a>
            </span>
            <span className="gh-legend">
              Less
              <span className="gh-cell"></span>
              <span className="gh-cell l1"></span>
              <span className="gh-cell l2"></span>
              <span className="gh-cell l3"></span>
              <span className="gh-cell l4"></span>
              More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
