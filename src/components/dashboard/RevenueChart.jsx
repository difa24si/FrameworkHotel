export default function RevenueChart({
  revenueByMonth,
}) {
  const maxRev = Math.max(
    ...revenueByMonth.map(
      (item) => item.revenue
    )
  );

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">
            Revenue Overview
          </div>

          <div
            style={{
              fontSize: '12px',
              color: '#9ca3af',
              marginTop: '2px',
            }}
          >
            Monthly performance
          </div>
        </div>

        <select className="filter-select">
          <option>2026</option>
          <option>2025</option>
        </select>
      </div>

      <div className="card-body">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '10px',
            height: '140px',
            padding: '0 4px',
          }}
        >
          {revenueByMonth.map((item) => (
            <div
              key={item.month}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                height: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  color: '#9ca3af',
                  fontWeight: 600,
                }}
              >
                $
                {(item.revenue / 1000).toFixed(0)}
                k
              </span>

              <div
                style={{
                  width: '100%',
                  height: `${
                    (item.revenue / maxRev) *
                    100
                  }%`,
                  background:
                    item.month === 'May'
                      ? 'linear-gradient(180deg, #c9a84c, #e8c77a)'
                      : 'linear-gradient(180deg, #e5e7eb, #f3f4f6)',
                  borderRadius:
                    '6px 6px 0 0',
                  minHeight: '4px',
                  transition:
                    'height 0.6s ease',
                  position: 'relative',
                }}
              />

              <span
                style={{
                  fontSize: '10px',
                  color: '#9ca3af',
                  fontWeight: 500,
                }}
              >
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}