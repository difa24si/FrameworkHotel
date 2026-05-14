import { useState } from 'react';
import { customers } from '../data/customers';
import PageHeader from '../components/PageHeader';

export default function Guests() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  const filtered = customers.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.room.includes(search);
    const matchFilter = filter === 'all' || c.status === filter;
    return matchSearch && matchFilter;
  });

  const statusConfig = {
    'checked-in': { label: 'Checked In', cls: 'badge-success' },
    'reserved': { label: 'Reserved', cls: 'badge-warning' },
    'checked-out': { label: 'Checked Out', cls: 'badge-gray' },
  };

  return (
    <div>
      <PageHeader title="Guest Management" subtitle={`${customers.length} total guests registered`}>
        <button className="btn btn-secondary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Export
        </button>
        <button className="btn btn-primary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add Guest
        </button>
      </PageHeader>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { label: 'Checked In', count: customers.filter(c=>c.status==='checked-in').length, color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
          { label: 'Reserved', count: customers.filter(c=>c.status==='reserved').length, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
          { label: 'Checked Out', count: customers.filter(c=>c.status==='checked-out').length, color: '#6b7280', bg: 'rgba(107,114,128,0.1)' },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 800, color: s.color }}>{s.count}</span>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>{s.count}</div>
              <div style={{ fontSize: '12.5px', color: '#9ca3af' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: '20px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="search-bar" style={{ flex: 1 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="Search by name, email, or room..."
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        {['all', 'checked-in', 'reserved', 'checked-out'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-secondary'}`}>
            {f === 'all' ? 'All' : statusConfig[f]?.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Guest</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Status</th>
                <th>Total Spent</th>
                <th>VIP</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="avatar-placeholder" style={{ background: c.color, width: '36px', height: '36px', fontSize: '12px' }}>
                        {c.initials}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '13.5px' }}>{c.name}</div>
                        <div style={{ fontSize: '12px', color: '#9ca3af' }}>{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 600 }}>Room {c.room}</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{c.roomType}</div>
                  </td>
                  <td style={{ color: '#6b7280', fontSize: '13px' }}>{c.checkIn}</td>
                  <td style={{ color: '#6b7280', fontSize: '13px' }}>{c.checkOut}</td>
                  <td><span className={`badge ${statusConfig[c.status]?.cls}`}>{statusConfig[c.status]?.label}</span></td>
                  <td style={{ fontWeight: 700 }}>${c.totalSpent.toLocaleString()}</td>
                  <td>
                    {c.vip && (
                      <span className="badge badge-accent">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#c9a84c"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/></svg>
                        VIP
                      </span>
                    )}
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button className="btn btn-secondary btn-sm">View</button>
                      <button className="btn btn-sm" style={{ background: 'rgba(16,185,129,0.1)', color: '#059669' }}>Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', color: '#9ca3af' }}>Showing {filtered.length} of {customers.length} guests</span>
          <div className="pagination">
            {[1, 2, 3].map(p => (
              <button key={p} className={`page-btn ${page === p ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
