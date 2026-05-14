import PageHeader from '../components/PageHeader';

const services = [
  {
    id: 'SVC001', name: 'Fine Dining Restaurant', category: 'F&B',
    description: 'Award-winning cuisine with panoramic ocean views. Open for breakfast, lunch, and dinner.',
    price: 'From $45/person', status: 'active', rating: 4.9, orders: 234,
    color: '#c9a84c', bg: 'rgba(201,168,76,0.1)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
    hours: '06:00 – 23:00',
  },
  {
    id: 'SVC002', name: 'Luxury Spa & Wellness', category: 'Wellness',
    description: 'Full-service spa with massage, facial, sauna, and hydrotherapy treatments.',
    price: 'From $80/session', status: 'active', rating: 4.8, orders: 189,
    color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    hours: '08:00 – 21:00',
  },
  {
    id: 'SVC003', name: 'Airport Transfer', category: 'Transport',
    description: 'Private luxury vehicle transfer to and from all major airports. 24/7 availability.',
    price: 'From $60/trip', status: 'active', rating: 4.7, orders: 312,
    color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-1 14a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z"/><path d="M13 17h2m4-4H7a4 4 0 01-4-4V8h18v5a4 4 0 01-4 4z"/></svg>,
    hours: '24 hours',
  },
  {
    id: 'SVC004', name: 'Infinity Pool & Beach', category: 'Recreation',
    description: 'Olympic-size infinity pool with beachfront access, sun loungers, and bar service.',
    price: 'Complimentary', status: 'active', rating: 4.9, orders: 445,
    color: '#06b6d4', bg: 'rgba(6,182,212,0.1)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2"><path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M2 18c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/></svg>,
    hours: '07:00 – 20:00',
  },
  {
    id: 'SVC005', name: 'Conference & Events', category: 'Business',
    description: 'State-of-the-art meeting rooms and event halls for up to 500 guests.',
    price: 'From $200/day', status: 'active', rating: 4.6, orders: 67,
    color: '#10b981', bg: 'rgba(16,185,129,0.1)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
    hours: '08:00 – 22:00',
  },
  {
    id: 'SVC006', name: 'Room Service', category: 'F&B',
    description: '24-hour in-room dining from our full restaurant menu. Available for all guests.',
    price: 'Menu pricing', status: 'active', rating: 4.5, orders: 678,
    color: '#ef4444', bg: 'rgba(239,68,68,0.1)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    hours: '24 hours',
  },
];

const categoryColors = { 'F&B': '#c9a84c', 'Wellness': '#8b5cf6', 'Transport': '#3b82f6', 'Recreation': '#06b6d4', 'Business': '#10b981' };

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      {[1,2,3,4,5].map(s => (
        <svg key={s} width="11" height="11" viewBox="0 0 24 24"
          fill={s <= Math.floor(rating) ? '#c9a84c' : '#e5e7eb'}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
        </svg>
      ))}
      <span style={{ fontSize: '11px', color: '#6b7280', marginLeft: '3px' }}>{rating}</span>
    </div>
  );
}

export default function Services() {
  const [view, setView] = useState('grid');
  const [category, setCategory] = useState('all');

  const categories = ['all', ...new Set(services.map(s => s.category))];
  const filtered = category === 'all' ? services : services.filter(s => s.category === category);

  return (
    <div>
      <PageHeader title="Hotel Services" subtitle="Manage all hotel amenities and services">
        <button className="btn btn-primary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add Service
        </button>
      </PageHeader>

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '24px' }}>
        <div className="card" style={{ padding: '18px 22px' }}>
          <div style={{ fontSize: '26px', fontWeight: 800, color: '#111827' }}>{services.length}</div>
          <div style={{ fontSize: '12.5px', color: '#9ca3af', marginTop: '4px' }}>Total Services</div>
        </div>
        <div className="card" style={{ padding: '18px 22px' }}>
          <div style={{ fontSize: '26px', fontWeight: 800, color: '#10b981' }}>{services.filter(s=>s.status==='active').length}</div>
          <div style={{ fontSize: '12.5px', color: '#9ca3af', marginTop: '4px' }}>Active Services</div>
        </div>
        <div className="card" style={{ padding: '18px 22px' }}>
          <div style={{ fontSize: '26px', fontWeight: 800, color: '#c9a84c' }}>{services.reduce((s,sv)=>s+sv.orders,0).toLocaleString()}</div>
          <div style={{ fontSize: '12.5px', color: '#9ca3af', marginTop: '4px' }}>Total Orders</div>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setCategory(cat)}
              className={`btn btn-sm ${category === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ textTransform: cat === 'all' ? 'none' : 'capitalize' }}>
              {cat === 'all' ? 'All Services' : cat}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {[{ v: 'grid', icon: '▦' }, { v: 'list', icon: '☰' }].map(b => (
            <button key={b.v} onClick={() => setView(b.v)}
              className={`btn btn-sm ${view === b.v ? 'btn-primary' : 'btn-secondary'}`}>
              {b.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Grid View */}
      {view === 'grid' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {filtered.map(svc => (
            <div key={svc.id} className="card" style={{ overflow: 'hidden', transition: 'all 0.2s' }}>
              <div style={{ padding: '22px 22px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: svc.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {svc.icon}
                  </div>
                  <span style={{ background: svc.bg, color: categoryColors[svc.category], fontSize: '10.5px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                    {svc.category}
                  </span>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>{svc.name}</h3>
                <p style={{ fontSize: '12.5px', color: '#9ca3af', lineHeight: 1.5, marginBottom: '14px' }}>{svc.description}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <StarRating rating={svc.rating} />
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>{svc.orders} orders</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid #f3f4f6' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{svc.price}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>⏰ {svc.hours}</div>
                  </div>
                  <span className="badge badge-success" style={{ fontSize: '10.5px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block', marginRight: '4px' }} />
                    Active
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', borderTop: '1px solid #f3f4f6' }}>
                <button className="btn" style={{ flex: 1, borderRadius: 0, justifyContent: 'center', padding: '12px', fontSize: '12.5px', color: '#6b7280' }}>Manage</button>
                <div style={{ width: '1px', background: '#f3f4f6' }} />
                <button className="btn" style={{ flex: 1, borderRadius: 0, justifyContent: 'center', padding: '12px', fontSize: '12.5px', color: '#c9a84c', fontWeight: 600 }}>View Orders</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="card">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Service</th><th>Category</th><th>Price</th><th>Hours</th><th>Rating</th><th>Orders</th><th>Status</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(svc => (
                  <tr key={svc.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: svc.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {svc.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600 }}>{svc.name}</div>
                          <div style={{ fontSize: '11.5px', color: '#9ca3af' }}>{svc.id}</div>
                        </div>
                      </div>
                    </td>
                    <td><span style={{ background: svc.bg, color: categoryColors[svc.category], fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '5px' }}>{svc.category}</span></td>
                    <td style={{ fontWeight: 600, fontSize: '13px' }}>{svc.price}</td>
                    <td style={{ fontSize: '12.5px', color: '#6b7280' }}>{svc.hours}</td>
                    <td><StarRating rating={svc.rating} /></td>
                    <td style={{ fontWeight: 600 }}>{svc.orders}</td>
                    <td><span className="badge badge-success">Active</span></td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button className="btn btn-secondary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">Pause</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
