import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Email dan Password wajib diisi");
      return;
    }

    setLoading(true);

    try {
      const email = form.email.trim().toLowerCase();

      console.log("Email yang dicari :", email);

      const { data: userFound, error } = await supabase
        .from("users")
        .select("*")
        .ilike("email", email)
        .maybeSingle();

      console.log("DATA USER :", userFound);
      console.log("ERROR :", error);

      if (error) {
        throw error;
      }

      if (!userFound) {
        alert("Email tidak ditemukan");
        return;
      }

      if (userFound.password !== form.password) {
        alert("Password salah");
        return;
      }

      localStorage.setItem("user", JSON.stringify(userFound));

      alert("Login berhasil!");

      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          width: "400px",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: "#00C853",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}