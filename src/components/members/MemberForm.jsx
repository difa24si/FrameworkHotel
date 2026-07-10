export default function MemberForm({
  form,
  setForm,
  addUser,
  editingId,
  cancelEdit,
}) {
  return (
    <div className="card">
      <h2 className="card-title">
        👥 {editingId ? "Edit User" : "Tambah User"}
      </h2>

      <form onSubmit={addUser}>
        <div className="form-grid">

          <div>
            <label>Nama Lengkap</label>

            <input
              className="form-control"
              required
              type="text"
              placeholder="Masukkan nama"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>Email</label>

            <input
              className="form-control"
              required
              type="email"
              placeholder="Masukkan email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>Password</label>

            <input
              className="form-control"
              required
              type="password"
              placeholder="Masukkan password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>Role</label>

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
  <option value="receptionist">Receptionist</option>
  <option value="manager">Manager</option>
  <option value="housekeeping">Housekeeping</option>
  <option value="admin">Administrator</option>
</select>
          </div>

        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "25px",
          }}
        >
          <button
            type="submit"
            className="btn-save"
          >
            {editingId ? "💾 Update User" : "➕ Tambah User"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              style={{
                flex: 1,
                padding: "14px",
                background: "#6b7280",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              ❌ Batal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}