export default function RoomStats({
  totalRooms,
  totalOccupied,
  totalAvail,
  occupancyRate,
}) {
  const stats = [
    {
      label: 'Total Rooms',
      val: totalRooms,
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.1)',
    },
    {
      label: 'Occupied',
      val: totalOccupied,
      color: '#ef4444',
      bg: 'rgba(239,68,68,0.1)',
    },
    {
      label: 'Available',
      val: totalAvail,
      color: '#10b981',
      bg: 'rgba(16,185,129,0.1)',
    },
    {
      label: 'Occupancy Rate',
      val: `${occupancyRate}%`,
      color: '#c9a84c',
      bg: 'rgba(201,168,76,0.1)',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {stats.map((k) => (
        <div
          key={k.label}
          className="card"
          style={{
            padding: '20px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: k.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: 800,
                color: k.color,
              }}
            >
              {k.val}
            </span>
          </div>

          <div>
            <div
              style={{
                fontSize: '22px',
                fontWeight: 800,
                color: '#111827',
              }}
            >
              {k.val}
            </div>

            <div
              style={{
                fontSize: '12px',
                color: '#9ca3af',
              }}
            >
              {k.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}