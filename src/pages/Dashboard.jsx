import { useState } from 'react';
import { orders, revenueByMonth } from '../data/orders';
import { customers } from '../data/customers';
import PageHeader from '../components/PageHeader';

const kpiData = [
  {
    label: 'Total Revenue',
    value: '$74,280',
    trend: '+12.5%',
    up: true,
    sub: 'This month',
    color: '#c9a84c',
    bg: 'rgba(201,168,76,0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    label: 'Occupied Rooms',
    value: '48 / 72',
    trend: '+4.2%',
    up: true,
    sub: '66.7% occupancy',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
  {
    label: 'Active Guests',
    value: '124',
    trend: '+8.1%',
    up: true,
    sub: 'Currently checked-in',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    label: 'New Bookings',
    value: '18',
    trend: '-2.3%',
    up: false,
    sub: 'Past 7 days',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
];

const roomStatusData = [
  { id: '101', status: 'occupied' }, { id: '102', status: 'available' }, { id: '103', status: 'cleaning' },
  { id: '104', status: 'occupied' }, { id: '105', status: 'reserved' }, { id: '106', status: 'available' },
  { id: '201', status: 'available' }, { id: '202', status: 'occupied' }, { id: '203', status: 'occupied' },
  { id: '204', status: 'available' }, { id: '205', status: 'reserved' }, { id: '206', status: 'cleaning' },
  { id: '301', status: 'occupied' }, { id: '302', status: 'available' }, { id: '303', status: 'occupied' },
  { id: '304', status: 'reserved' }, { id: '305', status: 'available' }, { id: '306', status: 'occupied' },
  { id: '401', status: 'available' }, { id: '402', status: 'reserved' }, { id: '403', status: 'occupied' },
  { id: '404', status: 'cleaning' }, { id: '405', status: 'occupied' }, { id: '406', status: 'available' },
];

const recentActivity = [
  { text: 'James Hartwell checked into Room 301', time: '10 min ago', color: '#10b981' },
  { text: 'New booking from Sophia Laurent for May 15', time: '28 min ago', color: '#6366f1' },
  { text: 'Room 118 checkout completed — Akira Tanaka', time: '1 hr ago', color: '#c9a84c' },
  { text: 'Housekeeping request for Room 204', time: '2 hrs ago', color: '#f59e0b' },
  { text: 'Payment received — BK-2024-004 ($1,960)', time: '3 hrs ago', color: '#10b981' },
];

export default function Dashboard() {
  const checkedIn = customers.filter(c => c.status === 'checked-in').length;
  const reserved = customers.filter(c => c.status === 'reserved').length;
  const maxRev = Math.max(...revenueByMonth.map(r => r.revenue));

  return (
    <div>
      <PageHeader title="Dashboard Overview" subtitle="Here's what's happening at Grand Luxe Hotel today.">
        <button className="btn btn-secondary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          May 2026
        </button>
        <button className="btn btn-primary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          New Booking
        </button>
      </PageHeader>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpiData.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <div className="kpi-card-top">
              <div className="kpi-icon" style={{ background: kpi.bg }}>{kpi.icon}</div>
              <div className={`kpi-trend ${kpi.up ? 'up' : 'down'}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {kpi.up
                    ? <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                    : <polyline points="23,18 13.5,8.5 8.5,13.5 1,6"/>}
                </svg>
                {kpi.trend}
              </div>
            </div>
            <div>
              <div className="kpi-value">{kpi.value}</div>
              <div className="kpi-label" style={{ marginTop: '4px' }}>{kpi.label}</div>
              <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>{kpi.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid-2" style={{ marginBottom: '20px' }}>
        {/* Revenue Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Revenue Overview</div>
              <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Monthly performance</div>
            </div>
            <select className="filter-select">
              <option>2026</option>
              <option>2025</option>
            </select>
          </div>
          <div className="card-body">
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '140px', padding: '0 4px' }}>
              {revenueByMonth.map((item) => (
                <div key={item.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 600 }}>
                    ${(item.revenue / 1000).toFixed(0)}k
                  </span>
                  <div style={{
                    width: '100%',
                    height: `${(item.revenue / maxRev) * 100}%`,
                    background: item.month === 'May'
                      ? 'linear-gradient(180deg, #c9a84c, #e8c77a)'
                      : 'linear-gradient(180deg, #e5e7eb, #f3f4f6)',
                    borderRadius: '6px 6px 0 0',
                    minHeight: '4px',
                    transition: 'height 0.6s ease',
                    position: 'relative',
                  }} />
                  <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 500 }}>{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Room Status */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Room Status</div>
              <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Live occupancy grid</div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {[
                { label: 'Occupied', color: '#dc2626' },
                { label: 'Available', color: '#059669' },
                { label: 'Reserved', color: '#d97706' },
                { label: 'Cleaning', color: '#4f46e5' },
              ].map(l => (
                <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#6b7280' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: l.color }} />
                  {l.label}
                </div>
              ))}
            </div>
          </div>
          <div className="card-body">
            <div className="room-grid">
              {roomStatusData.map(room => (
                <div key={room.id} className={`room-cell ${room.status}`}>
                  <span>{room.id}</span>
                  <span>{room.status.slice(0, 3)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid-2">
        {/* Recent Bookings */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Recent Bookings</div>
            <a href="/orders" style={{ fontSize: '12.5px', color: '#c9a84c', fontWeight: 600, textDecoration: 'none' }}>View all →</a>
          </div>
          <div className="card-body" style={{ padding: '12px 24px 20px' }}>
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '10px 0', borderBottom: '1px solid #f3f4f6',
              }}>
                <div className="avatar-placeholder" style={{ background: order.color }}>
                  {order.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#111827' }}>{order.guestName}</div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>Room {order.room} · {order.nights}N</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#111827' }}>${order.amount.toLocaleString()}</div>
                  <span className={`badge badge-${
                    order.paymentStatus === 'paid' ? 'success' :
                    order.paymentStatus === 'pending' ? 'warning' : 'info'
                  }`} style={{ fontSize: '10px', padding: '2px 8px' }}>
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Recent Activity</div>
            <span style={{ fontSize: '11px', color: '#9ca3af', background: '#f3f4f6', padding: '3px 10px', borderRadius: '99px' }}>Live</span>
          </div>
          <div className="card-body" style={{ padding: '12px 24px 20px' }}>
            {recentActivity.map((act, i) => (
              <div key={i} className="activity-item">
                <div className="activity-dot" style={{ background: act.color }} />
                <div className="activity-content">
                  <p>{act.text}</p>
                  <span>{act.time}</span>
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div style={{
              marginTop: '16px', padding: '14px', borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.04))',
              border: '1px solid rgba(201,168,76,0.15)',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#c9a84c', marginBottom: '10px' }}>Today's Summary</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                {[
                  { label: 'Check-ins', value: checkedIn },
                  { label: 'Reserved', value: reserved },
                  { label: 'Requests', value: 7 },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#111827' }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
