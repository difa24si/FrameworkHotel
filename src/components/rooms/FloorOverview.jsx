import {
  roomTypes,
  floorData,
} from "../../data/rooms";

export default function FloorOverview({
  floorData,
}) {
  return (
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
  );
}