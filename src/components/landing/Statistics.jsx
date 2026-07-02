export default function Statistics() {
  const stats = [
    { number: "5.000+", title: "Happy Guests" },
    { number: "120", title: "Luxury Rooms" },
    { number: "15", title: "Years Experience" },
    { number: "4.9 ★", title: "Guest Rating" },
  ];

  return (
    <section
      style={{
        padding: "80px 60px",
        background: "#111827",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Grand Luxe Hotel in Numbers
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
          textAlign: "center",
        }}
      >
        {stats.map((item, index) => (
          <div key={index}>
            <h1
              style={{
                color: "#fbbf24",
                fontSize: "42px",
              }}
            >
              {item.number}
            </h1>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}