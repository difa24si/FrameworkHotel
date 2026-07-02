import { Link } from "react-router-dom";

export default function Rooms() {
  const rooms = [
    {
      name: "Deluxe Room",
      price: "Rp850.000 / Night",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
    },
    {
      name: "Suite Room",
      price: "Rp1.500.000 / Night",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
    },
    {
      name: "Family Room",
      price: "Rp1.200.000 / Night",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    },
  ];

  return (
    <section
      id="rooms"
      style={{
        padding: "80px 60px",
        background: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        Featured Rooms
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginBottom: "50px",
        }}
      >
        Choose your perfect room for an unforgettable stay.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {rooms.map((room, index) => (
          <div
            key={index}
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <img
              src={room.image}
              alt={room.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{room.name}</h3>

              <p
                style={{
                  color: "#f59e0b",
                  fontWeight: "bold",
                }}
              >
                {room.price}
              </p>

              <Link
                to="/login"
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: "10px 18px",
                  background: "#111827",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}