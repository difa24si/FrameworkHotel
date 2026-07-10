import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { supabase } from "../../lib/supabase";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "member", // Diubah ke "member" sebagai nilai default awal
    password: "",
    confirm: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("REGISTER DIKLIK");
    console.log("TOMBOL REGISTER DIKLIK");

    try {
      setLoading(true);

      // TEST KONEKSI SUPABASE
      const { data: testData, error: testError } =
        await supabase
          .from("users")
          .select("*");

      console.log("TEST DATA:");
      console.log(testData);

      console.log("TEST ERROR:");
      console.log(testError);

      if (testError) {
        alert(
          "Supabase Error: " +
            testError.message
        );
        return;
      }

      // Validasi kosong
      if (
        !form.name.trim() ||
        !form.email.trim() ||
        !form.password.trim() ||
        !form.confirm.trim()
      ) {
        alert("Semua field wajib diisi");
        return;
      }

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(form.email)) {
        alert("Format email tidak valid");
        return;
      }

      if (form.password.length < 6) {
        alert("Password minimal 6 karakter");
        return;
      }

      if (form.password !== form.confirm) {
        alert(
          "Password dan Confirm Password tidak sama"
        );
        return;
      }

      const {
        data: existingUser,
        error: checkError,
      } = await supabase
        .from("users")
        .select("*")
        .eq("email", form.email.trim())
        .maybeSingle();

      console.log(
        "HASIL CEK EMAIL:",
        existingUser
      );
      console.log(
        "ERROR CEK EMAIL:",
        checkError
      );

      if (checkError) {
        alert(
          "Error cek email: " +
            checkError.message
        );
        return;
      }

      if (existingUser) {
        alert("Email sudah terdaftar");
        return;
      }

      const userData = {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        role: form.role,
      };

      console.log(
        "DATA YANG AKAN DISIMPAN:"
      );
      console.log(userData);

      const { data, error } =
        await supabase
          .from("users")
          .insert([userData])
          .select();

      console.log("INSERT DATA:");
      console.log(data);

      console.log("INSERT ERROR:");
      console.log(error);

      if (error) {
        alert(
          "Gagal simpan: " +
            error.message
        );
        return;
      }

      alert("Pendaftaran berhasil!");

      navigate("/login");
    } catch (err) {
      console.error(err);

      alert(
        "CATCH ERROR: " + err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Register as a new hotel staff member</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="type"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
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
              <option value="member">
                Member
              </option>

              <option value="receptionist">
                Receptionist
              </option>

              <option value="manager">
                Manager
              </option>

              <option value="housekeeping">
                Housekeeping
              </option>

              <option value="admin">
                Administrator
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              value={form.confirm}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirm: e.target.value,
                })
              }
              required
            />
          </div>

          <button
            className="register-btn"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : "Create Account"}
          </button>
        </form>

        <div className="auth-footer-text">
          Already have an account?{" "}
          <Link to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}