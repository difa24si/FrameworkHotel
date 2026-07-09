export default function UpcomingStay() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "25px",
        marginBottom: "25px",
        boxShadow: "0 6px 18px rgba(0,0,0,.08)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        🏨 Upcoming Booking
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f9fafb",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <div>
          <h3>Deluxe Ocean View Suite</h3>

          <p>📅 25 June 2026 - 28 June 2026</p>

          <p>👤 2 Adults</p>

          <p>🛏 Deluxe Room</p>
        </div>

        <div style={{ textAlign: "right" }}>
          <span
            style={{
              background: "#dcfce7",
              color: "#16a34a",
              padding: "8px 16px",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            Confirmed
          </span>

          <br />

          <button
            style={{
              marginTop: "20px",
              padding: "10px 18px",
              border: "none",
              borderRadius: "10px",
              background: "#111827",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}