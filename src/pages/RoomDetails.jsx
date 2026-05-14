import PageHeader from '../components/PageHeader';

const roomTypes = [
  { type: 'Standard Room', count: 20, price: '$120/night', size: '28 m²', beds: '1 Queen', amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'], color: '#6366f1', bg: 'rgba(99,102,241,0.08)', occupied: 12, available: 8 },
  { type: 'Deluxe Room', count: 16, price: '$180/night', size: '36 m²', beds: '1 King', amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Sea View'], color: '#10b981', bg: 'rgba(16,185,129,0.08)', occupied: 10, available: 6 },
  { type: 'Deluxe Suite', count: 14, price: '$280/night', size: '52 m²', beds: '1 King + Sofa', amenities: ['WiFi', 'AC', 'Smart TV', 'Bar', 'Lounge', 'Bathtub'], color: '#c9a84c', bg: 'rgba(201,168,76,0.08)', occupied: 9, available: 5 },
  { type: 'Executive Room', count: 10, price: '$350/night', size: '45 m²', beds: '1 King', amenities: ['WiFi', 'AC', 'Smart TV', 'Bar', 'Work Desk', 'City View'], color: '#3b82f6', bg: 'rgba(59,130,246,0.08)', occupied: 7, available: 3 },
  { type: 'Business Suite', count: 8, price: '$480/night', size: '68 m²', beds: '1 King + Sofa', amenities: ['WiFi', 'AC', 'Smart TV', 'Full Bar', 'Meeting Room', 'Ocean View'], color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', occupied: 5, available: 3 },
  { type: 'Presidential Suite', count: 3, price: '$1,200/night', size: '120 m²', beds: '1 King + 2 Queens', amenities: ['WiFi', 'AC', '4K TV', 'Full Bar', 'Private Dining', 'Butler', 'Ocean View'], color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', occupied: 2, available: 1 },
  { type: 'Royal Suite', count: 1, price: '$2,500/night', size: '250 m²', beds: '2 Kings + 2 Queens', amenities: ['WiFi', 'AC', '4K TV', 'Full Bar', 'Private Pool', 'Chef', 'Panoramic View', 'Helipad'], color: '#ef4444', bg: 'rgba(239,68,68,0.08)', occupied: 1, available: 0 },
];

const floorData = [
  { floor: 'Floor 1', rooms: 12, occupied: 8, available: 3, cleaning: 1 },
  { floor: 'Floor 2', rooms: 12, occupied: 7, available: 4, cleaning: 1 },
  { floor: 'Floor 3', rooms: 14, occupied: 10, available: 3, cleaning: 1 },
  { floor: 'Floor 4', rooms: 12, occupied: 9, available: 2, cleaning: 1 },
  { floor: 'Floor 5', rooms: 8,  occupied: 6, available: 1, cleaning: 1 },
  { floor: 'Floor 6', rooms: 6,  occupied: 5, available: 1, cleaning: 0 },
];

export default function RoomDetails() {
  const totalRooms = roomTypes.reduce((s, r) => s + r.count, 0);
  const totalOccupied = roomTypes.reduce((s, r) => s + r.occupied, 0);
  const totalAvail = roomTypes.reduce((s, r) => s + r.available, 0);
  const occupancyRate = ((totalOccupied / totalRooms) * 100).toFixed(1);

  return (
    <div>
      <PageHeader title="Room Details" subtitle="Complete overview of all hotel rooms and floor plans">
        <button className="btn btn-secondary btn-sm">Floor Plan</button>
        <button className="btn btn-primary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add Room
        </button>
      </PageHeader>

      {/* KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { label: 'Total Rooms', val: totalRooms, color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
          { label: 'Occupied', val: totalOccupied, color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
          { label: 'Available', val: totalAvail, color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
          { label: 'Occupancy Rate', val: `${occupancyRate}%`, color: '#c9a84c', bg: 'rgba(201,168,76,0.1)' },
        ].map(k => (
          <div key={k.label} className="card" style={{ padding: '20px 22px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: k.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 800, color: k.color }}>{typeof k.val === 'number' && k.val > 99 ? k.val : k.val}</span>
            </div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#111827' }}>{k.val}</div>
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>{k.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Room Types */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <div className="card-title">Room Types & Pricing</div>
          <span style={{ fontSize: '12px', color: '#9ca3af' }}>{roomTypes.length} room types</span>
        </div>
        <div className="card-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {roomTypes.map(rt => (
              <div key={rt.type} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px', borderRadius: '12px', background: rt.bg,
                border: `1px solid ${rt.color}20`,
                transition: 'all 0.2s',
              }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: `${rt.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={rt.color} strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827' }}>{rt.type}</div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>{rt.size} · {rt.beds}</div>
                </div>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', flex: 2 }}>
                  {rt.amenities.slice(0, 4).map(am => (
                    <span key={am} style={{ fontSize: '10.5px', padding: '3px 8px', borderRadius: '5px', background: 'rgba(255,255,255,0.7)', color: '#6b7280', fontWeight: 500 }}>{am}</span>
                  ))}
                  {rt.amenities.length > 4 && (
                    <span style={{ fontSize: '10.5px', padding: '3px 8px', borderRadius: '5px', background: 'rgba(255,255,255,0.7)', color: rt.color, fontWeight: 600 }}>+{rt.amenities.length - 4}</span>
                  )}
                </div>

                <div style={{ textAlign: 'center', minWidth: '60px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#ef4444' }}>{rt.occupied}</div>
                  <div style={{ fontSize: '10px', color: '#9ca3af' }}>Occupied</div>
                </div>

                <div style={{ textAlign: 'center', minWidth: '60px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#10b981' }}>{rt.available}</div>
                  <div style={{ fontSize: '10px', color: '#9ca3af' }}>Available</div>
                </div>

                <div style={{ textAlign: 'center', minWidth: '60px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{rt.count}</div>
                  <div style={{ fontSize: '10px', color: '#9ca3af' }}>Total</div>
                </div>

                <div style={{ minWidth: '110px', textAlign: 'right' }}>
                  <div style={{ fontWeight: 800, fontSize: '14px', color: rt.color }}>{rt.price}</div>
                  <div style={{ marginTop: '6px' }}>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar-fill" style={{
                        width: `${(rt.occupied / rt.count) * 100}%`,
                        background: rt.color,
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floor Overview */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Floor Overview</div>
        </div>
        <div className="table-wrapper" style={{ padding: '0 0 8px' }}>
          <table>
            <thead>
              <tr>
                <th>Floor</th><th>Total Rooms</th><th>Occupied</th><th>Available</th><th>Cleaning</th><th>Occupancy Rate</th>
              </tr>
            </thead>
            <tbody>
              {floorData.map(f => {
                const rate = ((f.occupied / f.rooms) * 100).toFixed(0);
                return (
                  <tr key={f.floor}>
                    <td style={{ fontWeight: 700 }}>{f.floor}</td>
                    <td>{f.rooms}</td>
                    <td>
                      <span style={{ color: '#ef4444', fontWeight: 700 }}>{f.occupied}</span>
                    </td>
                    <td>
                      <span style={{ color: '#10b981', fontWeight: 700 }}>{f.available}</span>
                    </td>
                    <td>
                      <span style={{ color: '#4f46e5', fontWeight: 700 }}>{f.cleaning}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ flex: 1, height: '8px', borderRadius: '99px', background: '#f3f4f6', overflow: 'hidden' }}>
                          <div style={{
                            height: '100%',
                            width: `${rate}%`,
                            background: rate > 80 ? '#ef4444' : rate > 60 ? '#c9a84c' : '#10b981',
                            borderRadius: '99px',
                          }} />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '13px', minWidth: '38px', color: rate > 80 ? '#ef4444' : rate > 60 ? '#c9a84c' : '#10b981' }}>{rate}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
