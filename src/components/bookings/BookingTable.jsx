import {
  paymentCfg,
  bookingCfg,
} from './BookingBadges';

export default function BookingTable({
  orders,
}) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Guest</th>
            <th>Room</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Nights</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Source</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td
                style={{
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  color: '#6366f1',
                  fontWeight: 600,
                }}
              >
                {o.id}
              </td>

              <td>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                  }}
                >
                  <div
                    className="avatar-placeholder"
                    style={{
                      background: o.color,
                      width: '32px',
                      height: '32px',
                      fontSize: '11px',
                    }}
                  >
                    {o.initials}
                  </div>

                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: '13px',
                    }}
                  >
                    {o.guestName}
                  </span>
                </div>
              </td>

              <td>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  {o.room}
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    color: '#9ca3af',
                  }}
                >
                  {o.roomType}
                </div>
              </td>

              <td>{o.checkIn}</td>
              <td>{o.checkOut}</td>
              <td>{o.nights}</td>

              <td>
                ${o.amount.toLocaleString()}
              </td>

              <td>
                <span
                  className={`badge ${
                    paymentCfg[o.paymentStatus]?.cls
                  }`}
                >
                  {
                    paymentCfg[o.paymentStatus]
                      ?.label
                  }
                </span>
              </td>

              <td>
                <span
                  className={`badge ${
                    bookingCfg[o.bookingStatus]?.cls
                  }`}
                >
                  {
                    bookingCfg[o.bookingStatus]
                      ?.label
                  }
                </span>
              </td>

              <td>{o.source}</td>

              <td>
                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                  }}
                >
                  <button className="btn btn-secondary btn-sm">
                    View
                  </button>

                  <button className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}