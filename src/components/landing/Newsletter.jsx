export default function Newsletter() {
  return (
    <section
      style={{
        padding: "80px 60px",
        textAlign: "center",
      }}
    >
      <h2>Subscribe Newsletter</h2>

      <p
        style={{
          color: "#6b7280",
        }}
      >
        Get our latest promotions and exclusive offers.
      </p>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <input
          placeholder="Enter your email"
          style={{
            padding: "14px",
            width: "320px",
            marginRight: "10px",
          }}
        />

        <button
          style={{
            padding: "14px 24px",
            background: "#111827",
            color: "white",
            border: "none",
          }}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}