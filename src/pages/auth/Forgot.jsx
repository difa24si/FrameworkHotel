import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <AuthLayout>
      <div className="auth-form-container">
        {!sent ? (
          <>
            <div style={{
              width: '56px', height: '56px', borderRadius: '14px',
              background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <h2>Forgot Password?</h2>
            <p>No worries! Enter your email address and we'll send you a reset link.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div style={{ position: 'relative' }}>
                  <input type="email" className="form-input" placeholder="admin@grandluxe.com"
                    value={email} onChange={e => setEmail(e.target.value)}
                    style={{ paddingLeft: '42px' }} required />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"
                    style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
            </div>
            <h2 style={{ marginBottom: '8px' }}>Check Your Email</h2>
            <p>We sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the instructions.</p>
            <button className="btn btn-primary" onClick={() => setSent(false)} style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
              Resend Email
            </button>
          </div>
        )}

        <div className="auth-footer-text" style={{ marginTop: '20px' }}>
          <Link to="/login" className="auth-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/>
            </svg>
            Back to Sign In
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
