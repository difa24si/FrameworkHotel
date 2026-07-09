import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Guests() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
      .eq("role", "member")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
    } else {
      setUsers(data);
    }

    setLoading(false);
  }

  function resetForm() {
    setEditingId(null);

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setGender("");
    setCity("");
    setStatus("Active");
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

    if (editingId) {
      const { error } = await supabase
        .from("users")
        .update({
          name,
          email,
          password,
          phone,
          gender,
          city,
          status,
        })
        .eq("id", editingId);

      if (error) {
        alert(error.message);
      } else {
        alert("Customer berhasil diupdate");
        resetForm();
        fetchUsers();
      }
    } else {
      const { error } = await supabase
        .from("users")
        .insert([
          {
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
    }

    setLoading(false);
  }

  async function deleteCustomer(id) {
    if (!window.confirm("Yakin ingin menghapus customer?")) return;

    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
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
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* HEADER PAGE */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            👥 Guest Management
          </h1>
          <p className="page-subtitle">
            Kelola seluruh data customer Grand Luxe Hotel
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="card">
        <h2 className="card-title">
          {editingId ? "✏ Edit Customer" : "➕ Tambah Customer"}
        </h2>

        <div className="form-grid">
          <input
            className="form-control"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="form-control"
            placeholder="Nomor HP"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Jenis Kelamin</option>
            <option>Laki-laki</option>
            <option>Perempuan</option>
          </select>

          <input
            className="form-control"
            placeholder="Kota"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "25px",
          }}
        >
          <button
            className="btn-save"
            onClick={handleSaveCustomer}
            disabled={loading}
          >
            {editingId ? "💾 Update Customer" : "➕ Save Customer"}
          </button>

          {editingId && (
            <button className="btn-cancel" onClick={resetForm}>
              Batal
            </button>
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="table-card" style={{ marginTop: "30px" }}>
        <h2 className="card-title">📋 Daftar Customer</h2>

        <table className="member-table">
          <thead>
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
                    padding: "30px",
                  }}
                >
                  Belum ada customer.
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
                      className={
                        user.status === "Active"
                          ? "badge-active"
                          : "badge-inactive"
                      }
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <button
                        className="btn-edit"
                        onClick={() => editCustomer(user)}
                      >
                        ✏ Edit
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => deleteCustomer(user.id)}
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
    </div>
  );
}