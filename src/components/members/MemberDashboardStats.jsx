const cards = [
  {
    title: "Bookings",
    value: "12",
    icon: "🏨",
    color: "#2563eb",
  },
  {
    title: "Total Spending",
    value: "$8,200",
    icon: "💰",
    color: "#16a34a",
  },
  {
    title: "Reward Point",
    value: "3,450",
    icon: "⭐",
    color: "#ca8a04",
  },
  {
    title: "Membership",
    value: "Gold",
    icon: "👑",
    color: "#9333ea",
  },
];

export default function MemberDashboardStats() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
          }}
        >
          <div style={{ fontSize: "40px" }}>
            {card.icon}
          </div>

          <h2 style={{ margin: "10px 0" }}>
            {card.value}
          </h2>

          <span style={{ color: "#6b7280" }}>
            {card.title}
          </span>
        </div>
      ))}
    </div>
  );
}