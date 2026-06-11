export default function ServiceSummary({
  services,
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(3,1fr)',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      <div
        className="card"
        style={{ padding: '18px 22px' }}
      >
        <div
          style={{
            fontSize: '26px',
            fontWeight: 800,
          }}
        >
          {services.length}
        </div>

        <div
          style={{
            fontSize: '12px',
            color: '#9ca3af',
          }}
        >
          Total Services
        </div>
      </div>

      <div
        className="card"
        style={{ padding: '18px 22px' }}
      >
        <div
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#10b981',
          }}
        >
          {
            services.filter(
              (s) => s.status === 'active'
            ).length
          }
        </div>

        <div
          style={{
            fontSize: '12px',
            color: '#9ca3af',
          }}
        >
          Active Services
        </div>
      </div>

      <div
        className="card"
        style={{ padding: '18px 22px' }}
      >
        <div
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#c9a84c',
          }}
        >
          {services
            .reduce(
              (sum, s) =>
                sum + s.orders,
              0
            )
            .toLocaleString()}
        </div>

        <div
          style={{
            fontSize: '12px',
            color: '#9ca3af',
          }}
        >
          Total Orders
        </div>
      </div>
    </div>
  );
}