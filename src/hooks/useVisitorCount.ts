import { useState, useEffect } from 'react';

/**
 * Returns ordinal suffix for a number (e.g. 1 -> "st", 2 -> "nd", 3 -> "rd", 107 -> "th")
 */
export function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

export function formatVisitorOrdinal(n: number): string {
  return `${n}${getOrdinalSuffix(n)}`;
}

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const cached = sessionStorage.getItem('vk_visitor_count');
      if (cached) {
        const parsed = parseInt(cached, 10);
        if (!isNaN(parsed) && parsed > 0) return parsed;
      }
    }
    // Realistic fallback baseline matching the user's reference
    return 107;
  });

  const [hasError, setHasError] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchCount() {
      try {
        const res = await fetch('/api/visitor', {
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (isMounted && typeof data?.count === 'number') {
          setVisitorCount(data.count);
          sessionStorage.setItem('vk_visitor_count', String(data.count));
          setHasError(false);
          setIsFetched(true);
        }
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      }
    }

    fetchCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    visitorCount,
    ordinalText: formatVisitorOrdinal(visitorCount),
    hasError,
    isFetched,
  };
}
