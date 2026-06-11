export default function RoomTypes({
  roomTypes,
}) {
  return (
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
  );
}