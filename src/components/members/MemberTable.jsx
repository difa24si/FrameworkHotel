export default function MemberTable({
  users,
  editUser,
  deleteUser,
}) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="6" align="center">
              Tidak ada data
            </td>
          </tr>
        ) : (
          users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>

              <td>
                <button
                  onClick={() => editUser(user)}
                  style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteUser(user.id)}
                  style={{
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}