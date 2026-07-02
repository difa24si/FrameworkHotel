export default function MemberSummary({ members }) {
  const adminCount = members.filter(
    (m) => m.role === "admin"
  ).length;

  const managerCount = members.filter(
    (m) => m.role === "manager"
  ).length;

  const receptionistCount = members.filter(
    (m) => m.role === "receptionist"
  ).length;

  const housekeepingCount = members.filter(
    (m) => m.role === "housekeeping"
  ).length;

  const cards = [
    {
      label: "Total Users",
      value: members.length,
      color: "#6366f1",
      bg: "rgba(99,102,241,0.1)",
    },
    {
      label: "Admins",
      value: adminCount,
      color: "#ef4444",
      bg: "rgba(239,68,68,0.1)",
    },
    {
      label: "Managers",
      value: managerCount,
      color: "#10b981",
      bg: "rgba(16,185,129,0.1)",
    },
    {
      label: "Receptionists",
      value: receptionistCount,
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.1)",
    },
    {
      label: "Housekeeping",
      value: housekeepingCount,
      color: "#8b5cf6",
      bg: "rgba(139,92,246,0.1)",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.label}
          className="card"
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              margin: "0 auto 12px",
              borderRadius: "12px",
              background: card.bg,
            }}
          />

          <h2
            style={{
              color: card.color,
              marginBottom: "8px",
            }}
          >
            {card.value}
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "14px",
              margin: 0,
            }}
          >
            {card.label}
          </p>
        </div>
      ))}
    </div>
  );
}