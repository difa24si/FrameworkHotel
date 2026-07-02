export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 60px",
        background: "#f9fafb",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#111827",
        }}
      >
        About Grand Luxe Hotel
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "32px",
          color: "#4b5563",
          fontSize: "18px",
        }}
      >
        Grand Luxe Hotel is committed to providing the best hospitality
        experience. We offer luxurious rooms, premium facilities,
        professional service, and a comfortable environment for business
        trips, family vacations, and special occasions.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "60px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "white",
            width: "250px",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          }}
        >
          <h3 style={{ color: "#f59e0b" }}>120+</h3>
          <p>Luxury Rooms</p>
        </div>

        <div
          style={{
            background: "white",
            width: "250px",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          }}
        >
          <h3 style={{ color: "#f59e0b" }}>5000+</h3>
          <p>Happy Guests</p>
        </div>

        <div
          style={{
            background: "white",
            width: "250px",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          }}
        >
          <h3 style={{ color: "#f59e0b" }}>24/7</h3>
          <p>Customer Service</p>
        </div>
      </div>
    </section>
  );
}