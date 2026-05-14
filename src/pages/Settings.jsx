import PageHeader from '../components/PageHeader';

export default function Settings() {
  return (
    <div>
      <PageHeader title="System Settings" subtitle="Configure hotel management preferences" />
      <div className="card">
        <div className="not-found" style={{ minHeight: '400px' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(99,102,241,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93a10 10 0 0 0 14.14 14.14"/>
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2"/>
            </svg>
          </div>
          <h3 style={{ marginTop: '16px', fontSize: '18px', fontWeight: 600 }}>Settings Module</h3>
          <p style={{ color: '#9ca3af', maxWidth: '300px', fontSize: '13.5px' }}>
            System configuration, user management, and integrations will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
