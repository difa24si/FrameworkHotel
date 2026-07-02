import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "18px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#111827",
        color: "white",
        boxSizing: "border-box",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#fbbf24",
          }}
        >
          Grand Luxe Hotel
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <a
          href="#about"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          About
        </a>

        <a
          href="#services"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Services
        </a>

        <a
          href="#rooms"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Rooms
        </a>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            background: "#fbbf24",
            color: "#111827",
            padding: "10px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}