const benefits = [
  "🍳 Free Breakfast",
  "🚗 Free Parking",
  "🛜 Free WiFi",
  "🏊 Swimming Pool",
  "💪 Gym Access",
  "🍷 Welcome Drink",
];

export default function MembershipBenefits() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "25px",
        boxShadow: "0 6px 18px rgba(0,0,0,.08)",
      }}
    >
      <h2>🎁 Membership Benefits</h2>

      {benefits.map((item) => (
        <p
          key={item}
          style={{
            marginTop: "15px",
            fontSize: "16px",
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}