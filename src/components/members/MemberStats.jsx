export default function MemberStats({ users }) {
  const total = users.length;

  const admin = users.filter(
    (u) => u.role === "admin"
  ).length;

  const member = users.filter(
    (u) => u.role === "member"
  ).length;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(3,1fr)",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      <Card
        title="Total User"
        value={total}
        color="#2563eb"
      />

      <Card
        title="Admin"
        value={admin}
        color="#dc2626"
      />

      <Card
        title="Member"
        value={member}
        color="#16a34a"
      />
    </div>
  );
}

function Card({
  title,
  value,
  color,
}) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "25px",
        borderRadius: "12px",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          marginTop: "15px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}