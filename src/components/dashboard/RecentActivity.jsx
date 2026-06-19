import { recentActivity } from '../data/dashboard';

export default function RecentActivity({
  checkedIn,
  reserved,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          Recent Activity
        </div>

        <span
          style={{
            fontSize: '11px',
            color: '#9ca3af',
            background: '#f3f4f6',
            padding: '3px 10px',
            borderRadius: '99px',
          }}
        >
          Live
        </span>
      </div>

      <div
        className="card-body"
        style={{
          padding: '12px 24px 20px',
        }}
      >
        {recentActivity.map((act, i) => (
          <div
            key={i}
            className="activity-item"
          >
            <div
              className="activity-dot"
              style={{
                background: act.color,
              }}
            />

            <div className="activity-content">
              <p>{act.text}</p>
              <span>{act.time}</span>
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: '16px',
            padding: '14px',
            borderRadius: '12px',
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.04))',
            border:
              '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#c9a84c',
              marginBottom: '10px',
            }}
          >
            Today's Summary
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                '1fr 1fr 1fr',
              gap: '12px',
            }}
          >
            {[
              {
                label: 'Check-ins',
                value: checkedIn,
              },
              {
                label: 'Reserved',
                value: reserved,
              },
              {
                label: 'Requests',
                value: 7,
              },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#111827',
                  }}
                >
                  {s.value}
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    color: '#9ca3af',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}