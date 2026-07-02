export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
    "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=600",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600",
  ];

  return (
    <section
      style={{
        padding: "80px 60px",
        background: "#f9fafb",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        Hotel Gallery
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginBottom: "40px",
        }}
      >
        Take a look at our beautiful hotel and facilities.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Hotel"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,.1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}