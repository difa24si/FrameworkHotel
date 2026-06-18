import { useRef, useEffect } from 'react';

export default function GuestFilters({
  search,
  setSearch,
  filter,
  setFilter,
  statusConfig,
}) {

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="card">
      <div
        className="card"
        style={{
          marginBottom: '20px',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          className="search-bar"
          style={{ flex: 1 }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
            />
          </svg>

          <input
            ref={searchRef}
            type="text"
            placeholder="Search by name, email, or room..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {[
          'all',
          'checked-in',
          'reserved',
          'checked-out',
        ].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn btn-sm ${
              filter === f
                ? 'btn-primary'
                : 'btn-secondary'
            }`}
          >
            {f === 'all'
              ? 'All'
              : statusConfig[f]?.label}
          </button>
        ))}
      </div>
    </div>
  );
}