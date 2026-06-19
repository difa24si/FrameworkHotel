import { kpiData } from '../data/dashboard';

export default function KpiCards() {
  return (
    <div className="kpi-grid">
      {kpiData.map((kpi) => (
        <div key={kpi.label} className="kpi-card">
          <div className="kpi-card-top">
            <div
              className="kpi-icon"
              style={{ background: kpi.bg }}
            >
              {kpi.icon}
            </div>

            <div
              className={`kpi-trend ${
                kpi.up ? 'up' : 'down'
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                {kpi.up ? (
                  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                ) : (
                  <polyline points="23,18 13.5,8.5 8.5,13.5 1,6" />
                )}
              </svg>

              {kpi.trend}
            </div>
          </div>

          <div>
            <div className="kpi-value">
              {kpi.value}
            </div>

            <div
              className="kpi-label"
              style={{ marginTop: '4px' }}
            >
              {kpi.label}
            </div>

            <div
              style={{
                fontSize: '11px',
                color: '#9ca3af',
                marginTop: '2px',
              }}
            >
              {kpi.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}