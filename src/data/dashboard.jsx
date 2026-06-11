export const kpiData = [
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

export const recentActivity = [
  { text: 'James Hartwell checked into Room 301', time: '10 min ago', color: '#10b981' },
  { text: 'New booking from Sophia Laurent for May 15', time: '28 min ago', color: '#6366f1' },
  { text: 'Room 118 checkout completed — Akira Tanaka', time: '1 hr ago', color: '#c9a84c' },
  { text: 'Housekeeping request for Room 204', time: '2 hrs ago', color: '#f59e0b' },
  { text: 'Payment received — BK-2024-004 ($1,960)', time: '3 hrs ago', color: '#10b981' },
];

export const roomStatusData = [
  { id: '101', status: 'occupied' }, { id: '102', status: 'available' }, { id: '103', status: 'cleaning' },
  { id: '104', status: 'occupied' }, { id: '105', status: 'reserved' }, { id: '106', status: 'available' },
  { id: '201', status: 'available' }, { id: '202', status: 'occupied' }, { id: '203', status: 'occupied' },
  { id: '204', status: 'available' }, { id: '205', status: 'reserved' }, { id: '206', status: 'cleaning' },
  { id: '301', status: 'occupied' }, { id: '302', status: 'available' }, { id: '303', status: 'occupied' },
  { id: '304', status: 'reserved' }, { id: '305', status: 'available' }, { id: '306', status: 'occupied' },
  { id: '401', status: 'available' }, { id: '402', status: 'reserved' }, { id: '403', status: 'occupied' },
  { id: '404', status: 'cleaning' }, { id: '405', status: 'occupied' }, { id: '406', status: 'available' },
];