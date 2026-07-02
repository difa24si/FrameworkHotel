import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Guests() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setUsers(data);
    } else {
      alert(error.message);
    }

    setLoading(false);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");

    setPhone("");
    setGender("");
    setCity("");

    setStatus("Active");

    setEditingId(null);
  }

  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;

        return v.toString(16);
      }
    );
  }

  async function handleSaveCustomer() {
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !gender ||
      !city
    ) {
      alert("Semua data wajib diisi");
      return;
    }

    setLoading(true);

    // Cek email sudah ada atau belum
    if (!editingId) {
      const { data: checkEmail } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .neq("id", editingId)
        .maybeSingle();

      if (checkEmail) {
        alert("Email sudah digunakan");
        setLoading(false);
        return;
      }
    }
    const uuidBaru = generateUUID();

    const { error } = await supabase
      .from("users")
      .insert([
        {
          id: uuidBaru,
          name,
          email,
          password,
          phone,
          gender,
          city,
          status,
          role: "member",
        },
      ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Customer berhasil ditambahkan");

      resetForm();

      fetchUsers();
    }

    setLoading(false);
  }

  async function deleteCustomer(id) {
    if (!window.confirm("Yakin hapus customer ini?")) return;

    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      alert("Customer berhasil dihapus");
      fetchUsers();
    }
  }

  function editCustomer(user) {
    setEditingId(user.id);

    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);

    setPhone(user.phone || "");
    setGender(user.gender || "");
    setCity(user.city || "");

    setStatus(user.status || "Active");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      style={{
        padding: "20px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1>Guest Management</h1>

      <div
        style={{
          background: "white",
          padding: 25,
          borderRadius: 12,
          marginBottom: 25,
        }}
      >
        <h2>
          {editingId ? "Edit Customer" : "Tambah Customer"}
        </h2>

        <div
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          <input
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            placeholder="Nomor HP"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>

          <input
            placeholder="Kota"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              type="button"
              onClick={handleSaveCustomer}
              disabled={loading}
              style={{
                flex: 1,
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {editingId ? "Update Customer" : "Save Customer"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                style={{
                  flex: 1,
                  background: "#6b7280",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Batal
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead
            style={{
              background: "#f1f5f9",
            }}
          >
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>HP</th>
              <th>Gender</th>
              <th>Kota</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  Belum ada customer
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.gender}</td>
                  <td>{user.city}</td>
                  <td>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "20px",
                        color: "#fff",
                        background:
                          user.status === "Active"
                            ? "#22c55e"
                            : "#ef4444",
                      }}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => editCustomer(user)}
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
                      onClick={() => deleteCustomer(user.id)}
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
      </div>
    </div>
  );
}