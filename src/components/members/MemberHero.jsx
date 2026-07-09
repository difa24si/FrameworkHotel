export default function MemberHero({ user }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg,#111827,#d4af37)",
        borderRadius: "20px",
        padding: "30px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
        boxShadow: "0 10px 25px rgba(0,0,0,.15)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#fff",
            color: "#111827",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 style={{ margin: 0 }}>
            Welcome Back, {user?.name}
          </h2>

          <p style={{ marginTop: "8px", opacity: .9 }}>
            {user?.role}
          </p>

          <small>{user?.email}</small>
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <p style={{ marginBottom: 5 }}>Membership</p>

        <h2 style={{ margin: 0 }}>⭐ Gold Member</h2>

        <p style={{ marginTop: 15 }}>Reward Point</p>

        <h1 style={{ margin: 0 }}>3,450</h1>
      </div>
    </div>
  );
}