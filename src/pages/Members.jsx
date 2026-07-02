import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import MemberForm from "../components/members/MemberForm";
import MemberTable from "../components/members/MemberTable";

export default function Members() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "member",
  });

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
      return;
    }

    setUsers(data);
  }

  async function addUser(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Semua field wajib diisi");
      return;
    }

    console.log("EDITING ID:", editingId);
     console.log("FORM:", form);

   
if (editingId) {

  // Cek apakah email sudah dipakai user lain
  const { data: checkEmail } = await supabase
    .from("users")
    .select("id")
    .eq("email", form.email)
    .neq("id", editingId)
    .maybeSingle();

  if (checkEmail) {
    alert("Email sudah digunakan");
    return;
  }

  const { error } = await supabase
    .from("users")
    .update({
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role,
    })
    .eq("id", editingId);

  if (error) {
    alert(error.message);
    return;
  }

  alert("User berhasil diupdate");

  cancelEdit();
  getUsers();
  return;
}

    // ================= INSERT =================
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", form.email)
      .maybeSingle();

    if (existingUser) {
      alert("Email sudah terdaftar");
      return;
    }

    const { error } = await supabase
      .from("users")
      .insert([
        {
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("User berhasil ditambahkan");

    cancelEdit();
    getUsers();
  }

  async function deleteUser(id) {
    if (!window.confirm("Yakin ingin menghapus user ini?")) return;

    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("User berhasil dihapus");
    getUsers();
  }

  function editUser(user) {
    setEditingId(user.id);

    setForm({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function cancelEdit() {
    setEditingId(null);

    setForm({
      name: "",
      email: "",
      password: "",
      role: "member",
    });
  }


  return (
  <div style={{ padding: "20px" }}>
    <h1>Manajemen Data User</h1>

    <MemberForm
      form={form}
      setForm={setForm}
      addUser={addUser}
      editingId={editingId}
      cancelEdit={cancelEdit}
    />

    <MemberTable
      users={users}
      editUser={editUser}
      deleteUser={deleteUser}
    />
  </div>
);
}