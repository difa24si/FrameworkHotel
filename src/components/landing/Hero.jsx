import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      style={{
        background: "#111827",
        color: "white",
        padding: "100px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Welcome to
          <br />
          Grand Luxe Hotel
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "30px",
            color: "#d1d5db",
            marginBottom: "30px",
          }}
        >
          Experience luxury, comfort, and exceptional service in every stay.
          Book your perfect room and enjoy unforgettable moments with us.
        </p>

        <Link
          to="/login"
          style={{
            background: "#fbbf24",
            color: "#111827",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Book Now
        </Link>
      </div>

      <div
        style={{
          flex: 1,
          textAlign: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700"
          alt="Hotel"
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
        />
      </div>
    </section>
  );
}