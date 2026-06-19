export default function MyBookings() {
  const bookings = [
    {
      id: 'BK001',
      room: 'Deluxe Suite',
      checkIn: '2026-06-25',
      checkOut: '2026-06-28',
      status: 'Confirmed',
    },
    {
      id: 'BK002',
      room: 'Executive Room',
      checkIn: '2026-05-14',
      checkOut: '2026-05-18',
      status: 'Completed',
    },
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h1>My Bookings</h1>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Room</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.room}</td>
                <td>{b.checkIn}</td>
                <td>{b.checkOut}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}