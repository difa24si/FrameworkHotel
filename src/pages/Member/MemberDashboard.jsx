export default function MemberDashboard() {
  return (
    <div
      style={{
        background: '#f8fafc',
        minHeight: '100vh',
        padding: '30px',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          marginBottom: '30px',
        }}
      >
        <h1
          style={{
            margin: 0,
            color: '#111827',
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            color: '#6b7280',
          }}
        >
          Manage your stays, rewards and profile.
        </p>
      </div>

      {/* MEMBERSHIP CARD */}
      <div
        style={{
          background:
            'linear-gradient(135deg,#6366f1,#8b5cf6)',
          borderRadius: '20px',
          padding: '30px',
          color: 'white',
          marginBottom: '25px',
        }}
      >
        <h2>John Smith</h2>

        <p>Gold Member</p>

        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <small>Member ID</small>
            <h3>MEM001</h3>
          </div>

          <div>
            <small>Points</small>
            <h3>3,450</h3>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(3,1fr)',
          gap: '20px',
          marginBottom: '25px',
        }}
      >
        <div className="card">
          <h3>Total Bookings</h3>
          <h1>12</h1>
        </div>

        <div className="card">
          <h3>Total Spent</h3>
          <h1>$8,200</h1>
        </div>

        <div className="card">
          <h3>Reward Points</h3>
          <h1>3,450</h1>
        </div>
      </div>

      {/* UPCOMING STAY */}
      <div
        className="card"
        style={{
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <h2>Upcoming Stay</h2>

        <p>
          Deluxe Ocean View Suite
        </p>

        <p>
          Check In : 25 June 2026
        </p>

        <p>
          Check Out : 28 June 2026
        </p>

        <span
          style={{
            background:
              'rgba(16,185,129,0.1)',
            color: '#10b981',
            padding: '6px 12px',
            borderRadius: '20px',
          }}
        >
          Confirmed
        </span>
      </div>

      {/* RECENT BOOKINGS */}
      <div
        className="card"
        style={{
          padding: '20px',
        }}
      >
        <h2>Booking History</h2>

        <table
          style={{
            width: '100%',
            marginTop: '15px',
          }}
        >
          <thead>
            <tr>
              <th>Room</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Deluxe Suite</td>
              <td>14 May 2026</td>
              <td>18 May 2026</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Executive Room</td>
              <td>10 Apr 2026</td>
              <td>13 Apr 2026</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Presidential Suite</td>
              <td>02 Mar 2026</td>
              <td>05 Mar 2026</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}