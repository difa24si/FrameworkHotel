export default function GuestTable({
  filtered,
  statusConfig,
}) {
  return (
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
    </div>
  );
}