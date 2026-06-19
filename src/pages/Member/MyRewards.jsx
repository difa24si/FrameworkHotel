export default function MyRewards() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>My Rewards</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '20px',
        }}
      >
        <div className="card">
          <h2>3450</h2>
          <p>Total Points</p>
        </div>

        <div className="card">
          <h2>Gold</h2>
          <p>Membership Level</p>
        </div>

        <div className="card">
          <h2>15%</h2>
          <p>Room Discount</p>
        </div>
      </div>

      <div
        className="card"
        style={{
          marginTop: '20px',
          padding: '20px',
        }}
      >
        <h2>Available Rewards</h2>

        <ul>
          <li>Free Breakfast - 500 Points</li>
          <li>Airport Transfer - 1000 Points</li>
          <li>Room Upgrade - 1500 Points</li>
          <li>Free Night Stay - 3000 Points</li>
        </ul>
      </div>
    </div>
  );
}