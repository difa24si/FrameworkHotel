const history = [
  {
    room: "Executive Suite",
    date: "14 May 2026",
    status: "Completed",
  },
  {
    room: "Presidential Room",
    date: "10 Apr 2026",
    status: "Completed",
  },
  {
    room: "Family Room",
    date: "20 Feb 2026",
    status: "Completed",
  },
];

export default function BookingHistory() {
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
      <h2>📖 Booking History</h2>

      {history.map((item) => (
        <div
          key={item.room}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "18px",
            paddingBottom: "15px",
            borderBottom: "1px solid #eee",
          }}
        >
          <div>
            <h4>{item.room}</h4>

            <small>{item.date}</small>
          </div>

          <span
            style={{
              color: "#16a34a",
              fontWeight: "bold",
            }}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}