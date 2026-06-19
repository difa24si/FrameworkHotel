export default function MemberSummary({
  members,
}) {
  const activeMembers =
    members.filter(
      (m) => m.status === 'active'
    ).length;

  const platinumMembers =
    members.filter(
      (m) => m.level === 'Platinum'
    ).length;

  const totalRevenue =
    members.reduce(
      (sum, m) => sum + m.totalSpent,
      0
    );

  const totalPoints =
    members.reduce(
      (sum, m) => sum + m.points,
      0
    );

  const cards = [
    {
      label: 'Total Members',
      value: members.length,
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.1)',
    },
    {
      label: 'Active Members',
      value: activeMembers,
      color: '#10b981',
      bg: 'rgba(16,185,129,0.1)',
    },
    {
      label: 'Platinum Members',
      value: platinumMembers,
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.1)',
    },
    {
      label: 'Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      color: '#ef4444',
      bg: 'rgba(239,68,68,0.1)',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(4,1fr)',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {cards.map((card) => (
        <div
          key={card.label}
          className="card"
          style={{
            padding: '20px',
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: card.bg,
              marginBottom: '12px',
            }}
          />

          <div
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: card.color,
            }}
          >
            {card.value}
          </div>

          <div
            style={{
              fontSize: '13px',
              color: '#9ca3af',
            }}
          >
            {card.label}
          </div>
        </div>
      ))}
    </div>
  );
}