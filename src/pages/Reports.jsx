import PageHeader from '../components/common/PageHeader';

export default function Reports() {
  return (
    <div>
      <PageHeader title="Reports & Analytics" subtitle="Business insights and performance metrics" />
      <div className="card">
        <div className="not-found" style={{ minHeight: '400px' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(201,168,76,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          </div>
          <h3 style={{ marginTop: '16px', fontSize: '18px', fontWeight: 600 }}>Reports Module</h3>
          <p style={{ color: '#9ca3af', maxWidth: '300px', fontSize: '13.5px' }}>
            Detailed financial and operational reports will be displayed here in the upcoming update.
          </p>
        </div>
      </div>
    </div>
  );
}
