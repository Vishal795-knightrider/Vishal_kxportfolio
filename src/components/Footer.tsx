import React, { useState, useEffect, useRef } from 'react';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Avoid double-fetching during React 18 Strict Mode mount/unmount in dev
    if (hasFetched.current) return;
    hasFetched.current = true;

    let isMounted = true;

    async function fetchVisitorCount() {
      try {
        const response = await fetch('/api/visitor', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        if (isMounted && typeof data?.count === 'number') {
          setVisitorCount(data.count);
          setHasError(false);
        } else if (isMounted) {
          setHasError(true);
        }
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      }
    }

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleBoxClick = () => {
    setHasInteracted(true);
    setTimeout(() => setHasInteracted(false), 2000);
  };

  const displayCount = visitorCount !== null ? visitorCount : hasError ? '—' : '...';

  return (
    <footer className="site-footer">
      <div className="section-container footer-container-clean">
        {/* Row 1: Centered Visitor Counter (Clean text, no box) */}
        <div className="footer-visitor-row">
          <button
            type="button"
            className="footer-visitor-clean-btn"
            onClick={handleBoxClick}
            title="Click to celebrate!"
            aria-label={visitorCount !== null ? `Visitor number ${visitorCount}` : 'Visitor counter'}
          >
            <span className="footer-visitor-clean-label">You're visitor</span>
            <span className="footer-visitor-clean-num">#{displayCount}</span>
            {hasInteracted && <span className="visitor-toast">👋 Hello!</span>}
          </button>
        </div>

        {/* Row 2: Status & Credits with no wide gap between them */}
        <div className="footer-text-row">
          <div className="footer-status-group">
            <span className="footer-live-dot"></span>
            <span className="footer-live-text">Open to internships &amp; opportunities</span>
            <span className="footer-sep-dash">•</span>
            <span className="footer-year">© {new Date().getFullYear()}</span>
          </div>

          <span className="footer-mid-sep">•</span>

          <div className="footer-credits-group">
            <span>Designed &amp; built by </span>
            <a href="#hero" className="footer-author-link">
              Vishal Kashyap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
