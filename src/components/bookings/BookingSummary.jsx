export default function BookingSummary({
  totalRevenue,
  confirmed,
  pending,
  totalBookings,
}) {
  const cards = [
    {
      label: 'Total Revenue',
      val: `$${totalRevenue.toLocaleString()}`,
      color: '#c9a84c',
    },
    {
      label: 'Confirmed',
      val: confirmed,
      color: '#10b981',
    },
    {
      label: 'Pending',
      val: pending,
      color: '#f59e0b',
    },
    {
      label: 'Total Bookings',
      val: totalBookings,
      color: '#6366f1',
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
      {cards.map((s) => (
        <div
          key={s.label}
          className="card"
          style={{ padding: '18px 20px' }}
        >
          <div
            style={{
              fontSize: '22px',
              fontWeight: 800,
              color: s.color,
            }}
          >
            {s.val}
          </div>

          <div
            style={{
              fontSize: '12.5px',
              color: '#9ca3af',
              marginTop: '4px',
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}