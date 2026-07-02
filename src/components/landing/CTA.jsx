import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section
      style={{
        background: "#111827",
        color: "white",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        Ready for Your Luxury Stay?
      </h2>

      <p
        style={{
          color: "#d1d5db",
          maxWidth: "650px",
          margin: "0 auto 35px",
          lineHeight: "28px",
        }}
      >
        Book your favorite room today and experience premium hospitality,
        luxury facilities, and unforgettable moments at Grand Luxe Hotel.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/login"
          style={{
            background: "#f59e0b",
            color: "#111827",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Book Now
        </Link>

        <Link
          to="/register"
          style={{
            border: "2px solid white",
            color: "white",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Register Now
        </Link>
      </div>
    </section>
  );
}