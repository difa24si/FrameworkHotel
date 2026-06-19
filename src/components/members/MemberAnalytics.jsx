export default function MemberAnalytics({ members }) {
  const topMember = [...members].sort(
    (a, b) => b.totalSpent - a.totalSpent
  )[0];

  const bronze = members.filter(
    (m) => m.level === 'Bronze'
  ).length;

  const silver = members.filter(
    (m) => m.level === 'Silver'
  ).length;

  const gold = members.filter(
    (m) => m.level === 'Gold'
  ).length;

  const platinum = members.filter(
    (m) => m.level === 'Platinum'
  ).length;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px',
        marginBottom: '20px',
      }}
    >
      {/* Top Member */}
      <div className="card" style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '15px' }}>
          🏆 Top Member
        </h3>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            className="avatar-placeholder"
            style={{
              background: topMember.color,
              width: '50px',
              height: '50px',
            }}
          >
            {topMember.initials}
          </div>

          <div>
            <div
              style={{
                fontWeight: 700,
              }}
            >
              {topMember.name}
            </div>

            <div
              style={{
                color: '#9ca3af',
                fontSize: '12px',
              }}
            >
              {topMember.level} Member
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: '15px',
            fontSize: '14px',
          }}
        >
          Total Spend:
          <strong>
            {' '}
            $
            {topMember.totalSpent.toLocaleString()}
          </strong>
        </div>

        <div
          style={{
            fontSize: '14px',
          }}
        >
          Bookings:
          <strong>
            {' '}
            {topMember.totalBookings}
          </strong>
        </div>
      </div>

      {/* Membership Distribution */}
      <div className="card" style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '15px' }}>
          Membership Levels
        </h3>

        <div>🥉 Bronze : {bronze}</div>
        <div>🥈 Silver : {silver}</div>
        <div>🥇 Gold : {gold}</div>
        <div>💎 Platinum : {platinum}</div>
      </div>

      {/* Marketing */}
      <div className="card" style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '15px' }}>
          User Sources
        </h3>

        {[
          ...new Set(
            members.map((m) => m.source)
          ),
        ].map((source) => (
          <div key={source}>
            {source} :
            {' '}
            {
              members.filter(
                (m) =>
                  m.source === source
              ).length
            }
          </div>
        ))}
      </div>
    </div>
  );
}