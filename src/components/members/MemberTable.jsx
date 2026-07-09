export default function MemberTable({
  users,
  editUser,
  deleteUser,
}) {

  function roleBadge(role) {
    const styles = {
      admin: {
        bg: "#fee2e2",
        color: "#dc2626",
        text: "👑 Admin",
      },
      manager: {
        bg: "#ede9fe",
        color: "#7c3aed",
        text: "💼 Manager",
      },
      receptionist: {
        bg: "#ffedd5",
        color: "#ea580c",
        text: "🏨 Receptionist",
      },
      member: {
        bg: "#dcfce7",
        color: "#16a34a",
        text: "⭐ Member",
      },
    };

    const item = styles[role] || styles.member;

    return (
      <span
        style={{
          background: item.bg,
          color: item.color,
          padding: "7px 14px",
          borderRadius: "20px",
          fontWeight: 600,
          fontSize: "13px",
        }}
      >
        {item.text}
      </span>
    );
  }

  return (
    <div className="table-card">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 className="card-title">
          📋 Daftar User
        </h2>

        <span
          style={{
            background: "#2563eb",
            color: "white",
            padding: "8px 18px",
            borderRadius: "20px",
            fontWeight: 600,
          }}
        >
          Total : {users.length}
        </span>
      </div>

      <table className="member-table">

        <thead>
          <tr>
            <th>No</th>
            <th>User</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Dibuat</th>
            <th style={{ textAlign: "center" }}>
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>

          {users.length === 0 ? (

            <tr>
              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  padding: "40px",
                  color: "#6b7280",
                }}
              >
                🚫 Belum ada data user.
              </td>
            </tr>

          ) : (

            users.map((user, index) => (

              <tr key={user.id}>

                <td>{index + 1}</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >

                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        background: "#2563eb",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    <div>

                      <div
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        {user.name}
                      </div>

                      <small
                        style={{
                          color: "#6b7280",
                        }}
                      >
                        ID :
                        {" "}
                        {user.id.slice(0,8)}
                      </small>

                    </div>

                  </div>
                </td>

                <td>{user.email}</td>

                <td>
                  {"•".repeat(8)}
                </td>

                <td>
                  {roleBadge(user.role)}
                </td>

                <td>
                  {user.created_at
                    ? new Date(
                        user.created_at
                      ).toLocaleDateString("id-ID")
                    : "-"
                  }
                </td>

                <td>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >

                    <button
                      onClick={() => editUser(user)}
                      style={{
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 16px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => deleteUser(user.id)}
                      style={{
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 16px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      🗑 Hapus
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}