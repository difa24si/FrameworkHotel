import { roomStatusData } from '../data/dashboard';

export default function RoomStatus() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">
            Room Status
          </div>

          <div
            style={{
              fontSize: '12px',
              color: '#9ca3af',
              marginTop: '2px',
            }}
          >
            Live occupancy grid
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {[
            {
              label: 'Occupied',
              color: '#dc2626',
            },
            {
              label: 'Available',
              color: '#059669',
            },
            {
              label: 'Reserved',
              color: '#d97706',
            },
            {
              label: 'Cleaning',
              color: '#4f46e5',
            },
          ].map((l) => (
            <div
              key={l.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '10px',
                color: '#6b7280',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '2px',
                  background: l.color,
                }}
              />

              {l.label}
            </div>
          ))}
        </div>
      </div>

      <div className="card-body">
        <div className="room-grid">
          {roomStatusData.map((room) => (
            <div
              key={room.id}
              className={`room-cell ${room.status}`}
            >
              <span>{room.id}</span>

              <span>
                {room.status.slice(0, 3)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}