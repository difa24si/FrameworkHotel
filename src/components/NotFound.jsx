import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div style={{
        width: '80px', height: '80px',
        background: 'rgba(201,168,76,0.1)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '8px',
      }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <h2>404</h2>
      <h3>Page Not Found</h3>
      <p>The page you're looking for doesn't exist or has been moved to another location.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '8px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        Back to Dashboard
      </Link>
    </div>
  );
}
