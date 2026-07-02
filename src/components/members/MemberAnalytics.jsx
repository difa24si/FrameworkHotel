export default function MemberAnalytics({ members }) {
  const admins = members.filter(
    (m) => m.role === "admin"
  ).length;

  const managers = members.filter(
    (m) => m.role === "manager"
  ).length;

  const receptionists = members.filter(
    (m) => m.role === "receptionist"
  ).length;

  const housekeepings = members.filter(
    (m) => m.role === "housekeeping"
  ).length;

 const latestUser =
  members.length > 0
    ? members[members.length - 1]
    : null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      {/* Latest User */}
      <div className="card" style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "15px" }}>
          👤 Latest User
        </h3>

        {latestUser ? (
          <>
            <div
              style={{
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {latestUser.name}
            </div>

            <div
              style={{
                color: "#6b7280",
              }}
            >
              {latestUser.email}
            </div>

            <div
              style={{
                marginTop: "10px",
              }}
            >
              Role: <strong>{latestUser.role}</strong>
            </div>
          </>
        ) : (
          <p>No users found</p>
        )}
      </div>

      {/* Role Distribution */}
      <div className="card" style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "15px" }}>
          User Roles
        </h3>

        <div>👑 Admin : {admins}</div>
        <div>📋 Manager : {managers}</div>
        <div>🛎 Receptionist : {receptionists}</div>
        <div>🧹 Housekeeping : {housekeepings}</div>
      </div>

      {/* Statistics */}
      <div className="card" style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "15px" }}>
          Statistics
        </h3>

        <div>Total Users : {members.length}</div>

        <div>
          Registered Accounts : {members.length}
        </div>

        <div>
          Active Roles :
          {" "}
          {
            [
              admins,
              managers,
              receptionists,
              housekeepings,
            ].filter((x) => x > 0).length
          }
        </div>
      </div>
    </div>
  );
}