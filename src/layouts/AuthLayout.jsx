export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      {/* Left Panel - Branding */}
      <div className="auth-left">
        <div className="auth-brand">
          <div className="auth-brand-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="#0d1117"/>
              <polyline points="9,22 9,12 15,12 15,22" fill="#0d1117" opacity="0.6"/>
            </svg>
          </div>
          <h1>Grand Luxe Hotel</h1>
          <p>Premium hotel management system designed for world-class hospitality excellence.</p>
        </div>

        <div className="auth-features">
          <div className="auth-feature-item">
            <div className="auth-feature-icon" style={{ background: 'rgba(201,168,76,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <div className="auth-feature-text">
              <h4>Real-time Dashboard</h4>
              <p>Live KPIs and occupancy data</p>
            </div>
          </div>
          <div className="auth-feature-item">
            <div className="auth-feature-icon" style={{ background: 'rgba(16,185,129,0.12)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <div className="auth-feature-text">
              <h4>Guest Management</h4>
              <p>Track all guests & preferences</p>
            </div>
          </div>
          <div className="auth-feature-item">
            <div className="auth-feature-icon" style={{ background: 'rgba(99,102,241,0.12)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div className="auth-feature-text">
              <h4>Smart Booking System</h4>
              <p>Manage reservations effortlessly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="auth-right">
        {children}
      </div>
    </div>
  );
}
