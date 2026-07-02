export default function MemberForm({
  form,
  setForm,
  addUser,
  editingId,
  cancelEdit,
}) {
  return (
    <form
      onSubmit={addUser}
      style={{
        display: "grid",
        gap: "10px",
        width: "400px",
        marginBottom: "30px",
      }}
    >
      <input
        required
        type="text"
        placeholder="Nama"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        required
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <select
        value={form.role}
        onChange={(e) =>
          setForm({
            ...form,
            role: e.target.value,
          })
        }
      >
        <option value="member">Member</option>
        <option value="admin">Admin</option>
        <option value="receptionist">Receptionist</option>
        <option value="manager">Manager</option>
      </select>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          type="submit"
          style={{
            flex: 1,
            padding: "10px",
            background: editingId ? "#f59e0b" : "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          {editingId ? "Update User" : "Tambah User"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={cancelEdit}
            style={{
              flex: 1,
              padding: "10px",
              background: "#6b7280",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
}