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
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "25px",
            borderTop: `5px solid ${card.color}`,
            boxShadow:
              "0 5px 15px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: `${card.color}20`,
              borderRadius: "14px",
              fontSize: "35px",
            }}
          >
            {card.icon}
          </div>

          <h2
            style={{
              marginTop: "18px",
              marginBottom: "5px",
              color: "#111827",
              fontSize: "30px",
            }}
          >
            {card.value}
          </h2>

          <span
            style={{
              color: "#374151",
              fontSize: "17px",
              fontWeight: "600",
            }}
          >
            {card.title}
          </span>
        </div>
      ))}
    </div>
  );
}