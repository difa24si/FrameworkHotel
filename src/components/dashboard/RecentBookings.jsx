import { orders } from '../data/orders';

export default function RecentBookings() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          Recent Bookings
        </div>

        <a
          href="/orders"
          style={{
            fontSize: '12.5px',
            color: '#c9a84c',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          View all →
        </a>
      </div>

      <div
        className="card-body"
        style={{
          padding: '12px 24px 20px',
        }}
      >
        {orders.slice(0, 5).map((order) => (
          <div
            key={order.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 0',
              borderBottom:
                '1px solid #f3f4f6',
            }}
          >
            <div
              className="avatar-placeholder"
              style={{
                background: order.color,
              }}
            >
              {order.initials}
            </div>

            <div
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: '#111827',
                }}
              >
                {order.guestName}
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                }}
              >
                Room {order.room} · {order.nights}N
              </div>
            </div>

            <div
              style={{
                textAlign: 'right',
              }}
            >
              <div
                style={{
                  fontSize: '13.5px',
                  fontWeight: 700,
                  color: '#111827',
                }}
              >
                $
                {order.amount.toLocaleString()}
              </div>

              <span
                className={`badge badge-${
                  order.paymentStatus === 'paid'
                    ? 'success'
                    : order.paymentStatus ===
                      'pending'
                    ? 'warning'
                    : 'info'
                }`}
                style={{
                  fontSize: '10px',
                  padding: '2px 8px',
                }}
              >
                {order.paymentStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}