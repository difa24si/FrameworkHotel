export default function Facilities() {
  const facilities = [
    "Free WiFi",
    "Swimming Pool",
    "Restaurant",
    "Fitness Center",
    "Spa & Wellness",
    "Airport Shuttle",
  ];

  return (
    <section
      id="services"
      style={{
        padding: "80px 60px",
        background: "#f9fafb",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "10px",
          color: "#111827",
        }}
      >
        Our Facilities
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "50px",
        }}
      >
        Enjoy premium facilities designed for your comfort.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {facilities.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            }}
          >
            <h3
              style={{
                color: "#f59e0b",
                marginBottom: "10px",
              }}
            >
              ⭐
            </h3>

            <h4>{item}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}