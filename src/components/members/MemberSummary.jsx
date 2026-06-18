export default function MemberSummary({
  members,
}) {
  const activeMembers =
    members.filter(
      (m) => m.status === 'active'
    ).length;

  const premiumMembers =
    members.filter(
      (m) =>
        m.level === 'Gold' ||
        m.level === 'Platinum'
    ).length;

  const totalRevenue =
    members.reduce(
      (sum, m) =>
        sum + m.totalSpent,
      0
    );

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
      {[
        {
          label: 'Total Members',
          value: members.length,
        },
        {
          label: 'Active Members',
          value: activeMembers,
        },
        {
          label: 'Gold & Platinum',
          value: premiumMembers,
        },
        {
          label: 'Revenue',
          value: `$${totalRevenue.toLocaleString()}`,
        },
      ].map((item) => (
        <div
          key={item.label}
          className="card"
          style={{
            padding: '20px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 800,
            }}
          >
            {item.value}
          </div>

          <div
            style={{
              color: '#9ca3af',
              fontSize: '12px',
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}