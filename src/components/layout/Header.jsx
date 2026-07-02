import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': { title: 'Dashboard Overview', sub: 'Welcome back' },
  '/guests': { title: 'User Management (Supabase CRUD)', sub: 'Manage live users database' },
};

export default function Header() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [userName, setUserName] = useState('Difa Mardiani'); // Default fallback
  const [userRole, setUserRole] = useState('Super Admin');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.name) setUserName(parsed.name);
        if (parsed.role) setUserRole(parsed.role);
      } catch (e) {
        console.error(e);
      }
    }
  }, [location]);

  const page = pageTitles[location.pathname] || { title: 'Hotel Management', sub: '' };
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header-left">
        <h1>{page.title}</h1>
        <span className="header-breadcrumb">{today} &nbsp;·&nbsp; {page.sub} {location.pathname === '/' && userName}</span>
      </div>

      <div className="header-right">
        {/* Search */}
        <div className="search-bar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#9ca3af', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '28px', background: '#e5e7eb' }} />

        {/* Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="header-avatar" style={{ background: '#00c853', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            {userName.charAt(0).toUpperCase()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>{userName}</span>
            <span style={{ fontSize: '11px', color: '#6b7280', textTransform: 'capitalize' }}>{userRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
}