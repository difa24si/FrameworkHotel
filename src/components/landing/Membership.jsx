import { Link } from "react-router-dom";

export default function Membership() {
  return (
    <section
      style={{
        padding: "80px 60px",
        background: "#f9fafb",
        textAlign: "center",
      }}
    >
      <h2>Become Our Member</h2>

      <p
        style={{
          marginBottom: "35px",
          color: "#6b7280",
        }}
      >
        Join Grand Luxe Hotel Membership and enjoy exclusive benefits.
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          textAlign: "left",
        }}
      >
        ✅ Member Discount 15%
        <br />
        ✅ Faster Booking
        <br />
        ✅ Priority Check-in
        <br />
        ✅ Birthday Rewards
        <br />
        ✅ Loyalty Points
      </div>

      <Link
        to="/register"
        style={{
          display: "inline-block",
          marginTop: "35px",
          background: "#111827",
          color: "white",
          padding: "14px 28px",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Join Membership
      </Link>
    </section>
  );
}