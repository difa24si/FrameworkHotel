export default function BookingActions() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <button className="btn-secondary">
        Export
      </button>

      <button className="btn-primary">
        + New Booking
      </button>
    </div>
  );
}