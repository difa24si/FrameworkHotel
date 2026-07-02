export default function Testimonials() {
  const testimonials = [
    {
      name: "Andi",
      review:
        "Pelayanan sangat ramah dan hotelnya bersih. Sangat direkomendasikan!",
    },
    {
      name: "Sinta",
      review:
        "Kamarnya nyaman, fasilitas lengkap, dan lokasi strategis.",
    },
    {
      name: "Michael",
      review:
        "One of the best hotels I've ever stayed in.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        What Our Guests Say
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            ⭐⭐⭐⭐⭐

            <p
              style={{
                marginTop: "15px",
              }}
            >
              "{item.review}"
            </p>

            <h4
              style={{
                marginTop: "20px",
              }}
            >
              — {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}