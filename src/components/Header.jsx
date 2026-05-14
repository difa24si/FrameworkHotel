import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': { title: 'Dashboard Overview', sub: 'Welcome back, Admin Manager' },
  '/guests': { title: 'Guest Management', sub: 'Manage all hotel guests' },
  '/bookings': { title: 'Booking Management', sub: 'Track all reservations & bookings' },
  '/services': { title: 'Hotel Services', sub: 'Manage hotel amenities & services' },
  '/room-details': { title: 'Room Details', sub: 'Overview of all hotel rooms' },
  '/reports': { title: 'Reports & Analytics', sub: 'Business insights & performance' },
  '/settings': { title: 'Settings', sub: 'System configuration' },
};

export default function Header() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const page = pageTitles[location.pathname] || { title: 'Hotel Management', sub: '' };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header-left">
        <h1>{page.title}</h1>
        <span className="header-breadcrumb">{today} &nbsp;·&nbsp; {page.sub}</span>
      </div>

      <div className="header-right">
        {/* Search */}
        <div className="search-bar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#9ca3af', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search guests, rooms..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Notifications */}
        <button className="icon-btn" aria-label="Notifications">
          <div className="icon-btn-badge">5</div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
        </button>

        {/* Calendar */}
        <button className="icon-btn" aria-label="Calendar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '28px', background: '#e5e7eb' }} />

        {/* Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <div className="header-avatar">A</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>Admin Manager</span>
            <span style={{ fontSize: '11px', color: '#6b7280' }}>Super Admin</span>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </div>
      </div>
    </header>
  );
}
