import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.email || !form.password) {
      setError("Email dan Password wajib diisi.");
      return;
    }

    setLoading(true);

    try {
      const email = form.email.trim().toLowerCase();

      const { data: userFound, error: supabaseError } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .maybeSingle();

        console.log("Email yang dicari:", email);
console.log("User ditemukan:", userFound);
console.log("Error:", supabaseError);

      if (supabaseError) throw supabaseError;

      if (!userFound) {
        setError("Email tidak ditemukan.");
        return;
      }

      if (userFound.password !== form.password) {
        setError("Password salah.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(userFound));

      if (userFound.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/member");
      }
    } catch (err) {
      setError(err.message || "Terjadi kesalahan saat login.");
    } finally {
      setLoading(false);
    }
  }; // <--- Menutup fungsi handleSubmit dengan benar

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="logo-box">🏨</div>

        <h1>Grand Luxe Hotel</h1>

        <p>
          Premium Hotel Management System yang membantu pengelolaan reservasi,
          tamu, dan operasional hotel menjadi lebih mudah.
        </p>

        <div className="feature-card">
          <h3>Dashboard</h3>
          <span>Monitoring hotel secara realtime.</span>
        </div>

        <div className="feature-card">
          <h3>Guest Management</h3>
          <span>Kelola seluruh data tamu hotel.</span>
        </div>

        <div className="feature-card">
          <h3>Booking System</h3>
          <span>Reservasi kamar lebih cepat.</span>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back</h2>

          <p className="subtitle">Login ke akun Grand Luxe Hotel</p>

          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              className="login-input"
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
              className="login-input"
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

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          <div className="bottom-text">
            Belum punya akun?
            <Link to="/register"> Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}