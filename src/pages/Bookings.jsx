import { useState } from 'react';
import { orders } from '../data/orders';
import PageHeader from '../components/PageHeader';

const paymentCfg = {
  paid:    { cls: 'badge-success', label: 'Paid' },
  pending: { cls: 'badge-warning', label: 'Pending' },
  partial: { cls: 'badge-info',    label: 'Partial' },
};
const bookingCfg = {
  confirmed: { cls: 'badge-success', label: 'Confirmed' },
  pending:   { cls: 'badge-warning', label: 'Pending' },
  completed: { cls: 'badge-gray',    label: 'Completed' },
  cancelled: { cls: 'badge-danger',  label: 'Cancelled' },
};

export default function Bookings() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  const totalRevenue = orders.filter(o=>o.paymentStatus==='paid').reduce((s,o)=>s+o.amount,0);
  const pending = orders.filter(o=>o.bookingStatus==='pending').length;
  const confirmed = orders.filter(o=>o.bookingStatus==='confirmed').length;

  const filtered = orders.filter(o => {
    const matchS = o.guestName.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.room.includes(search);
    const matchF = filter === 'all' || o.bookingStatus === filter;
    return matchS && matchF;
  });

  return (
    <div>
      <PageHeader title="Booking Management" subtitle={`${orders.length} total bookings`}>
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
          New Booking
        </button>
      </PageHeader>

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { label: 'Total Revenue', val: `$${totalRevenue.toLocaleString()}`, color: '#c9a84c', bg: 'rgba(201,168,76,0.1)' },
          { label: 'Confirmed', val: confirmed, color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
          { label: 'Pending', val: pending, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
          { label: 'Total Bookings', val: orders.length, color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: '22px', fontWeight: 800, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: '12.5px', color: '#9ca3af', marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: '20px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="search-bar" style={{ flex: 1 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="Search by guest, booking ID, or room..."
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        {['all', 'confirmed', 'pending', 'completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-secondary'}`}
            style={{ textTransform: 'capitalize' }}>
            {f === 'all' ? 'All' : f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Guest</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Nights</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Source</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(o => (
                <tr key={o.id}>
                  <td style={{ fontFamily: 'monospace', fontSize: '12px', color: '#6366f1', fontWeight: 600 }}>{o.id}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <div className="avatar-placeholder" style={{ background: o.color, width: '32px', height: '32px', fontSize: '11px' }}>{o.initials}</div>
                      <span style={{ fontWeight: 600, fontSize: '13px' }}>{o.guestName}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: '13px' }}>{o.room}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{o.roomType}</div>
                  </td>
                  <td style={{ fontSize: '12.5px', color: '#6b7280' }}>{o.checkIn}</td>
                  <td style={{ fontSize: '12.5px', color: '#6b7280' }}>{o.checkOut}</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>{o.nights}</td>
                  <td style={{ fontWeight: 700, color: '#111827' }}>${o.amount.toLocaleString()}</td>
                  <td><span className={`badge ${paymentCfg[o.paymentStatus]?.cls}`}>{paymentCfg[o.paymentStatus]?.label}</span></td>
                  <td><span className={`badge ${bookingCfg[o.bookingStatus]?.cls}`}>{bookingCfg[o.bookingStatus]?.label}</span></td>
                  <td style={{ fontSize: '12px', color: '#9ca3af' }}>{o.source}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button className="btn btn-secondary btn-sm">View</button>
                      <button className="btn btn-danger btn-sm">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3,6 5,6 21,6"/><path d="M19,6v14a2,2,0,01-2,2H7a2,2,0,01-2-2V6m3,0V4a1,1,0,011-1h4a1,1,0,011,1v2"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ padding: '16px 20px', borderTop: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', color: '#9ca3af' }}>Showing {filtered.length} of {orders.length} bookings</span>
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
