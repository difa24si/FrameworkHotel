export default function MyProfile() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>My Profile</h1>

      <div
        className="card"
        style={{
          padding: '25px',
        }}
      >
        <h3>John Smith</h3>

        <p>Email : john@email.com</p>

        <p>Phone : +1 555 123 456</p>

        <p>City : New York</p>

        <p>Member ID : MEM001</p>

        <p>Membership : Gold</p>

        <button className="btn btn-primary">
          Edit Profile
        </button>
      </div>
    </div>
  );
}