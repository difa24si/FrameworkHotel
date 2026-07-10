import "./MemberDashboardStats.css";

const cards = [
  {
    title: "Bookings",
    value: "12",
    icon: "🏨",
    description: "Total reservasi",
    className: "blue",
  },
  {
    title: "Total Spending",
    value: "$8,200",
    icon: "💰",
    description: "Total pengeluaran",
    className: "green",
  },
  {
    title: "Reward Point",
    value: "3,450",
    icon: "⭐",
    description: "Poin tersedia",
    className: "gold",
  },
  {
    title: "Membership",
    value: "Gold",
    icon: "👑",
    description: "Status member",
    className: "purple",
  },
];

const bookingHistory = [
  {
    room: "Executive Suite",
    date: "14 May 2026",
    status: "Completed",
  },
  {
    room: "Presidential Room",
    date: "10 April 2026",
    status: "Completed",
  },
  {
    room: "Family Room",
    date: "20 February 2026",
    status: "Completed",
  },
];

const benefits = [
  {
    icon: "🍳",
    title: "Free Breakfast",
    description: "Sarapan gratis selama menginap",
  },
  {
    icon: "🚗",
    title: "Free Parking",
    description: "Area parkir gratis untuk member",
  },
  {
    icon: "📶",
    title: "Free WiFi",
    description: "Akses internet berkecepatan tinggi",
  },
  {
    icon: "🏊",
    title: "Swimming Pool",
    description: "Akses fasilitas kolam renang",
  },
  {
    icon: "💪",
    title: "Gym Access",
    description: "Akses gratis ke pusat kebugaran",
  },
  {
    icon: "🍹",
    title: "Welcome Drink",
    description: "Minuman selamat datang gratis",
  },
];

export default function MemberDashboard() {
  return (
    <div className="member-dashboard">

      {/* WELCOME BANNER */}
      <section className="member-welcome">
        <div className="welcome-profile">
          <div className="welcome-avatar">
            L
          </div>

          <div>
            <p className="welcome-small">
              Welcome back,
            </p>

            <h1>lala 👋</h1>

            <p className="welcome-email">
              lala@gmail.com
            </p>
          </div>
        </div>

        <div className="membership-info">
          <span>MEMBERSHIP</span>

          <h2>⭐ Gold Member</h2>

          <p>Reward Point</p>

          <strong>3,450</strong>
        </div>
      </section>

      {/* STATISTIC CARDS */}
      <section className="member-stats-grid">
        {cards.map((card) => (
          <div
            className={`member-stat-card ${card.className}`}
            key={card.title}
          >
            <div className="stat-top">
              <div className="stat-icon">
                {card.icon}
              </div>

              <span className="stat-arrow">
                ↗
              </span>
            </div>

            <h2>{card.value}</h2>

            <h3>{card.title}</h3>

            <p>{card.description}</p>
          </div>
        ))}
      </section>

      {/* UPCOMING BOOKING */}
      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span className="section-label">
              NEXT STAY
            </span>

            <h2>🏨 Upcoming Booking</h2>
          </div>

          <button className="view-all-button">
            View All
          </button>
        </div>

        <div className="upcoming-booking">
          <div className="booking-date-box">
            <strong>25</strong>
            <span>JUN</span>
          </div>

          <div className="booking-information">
            <h3>Deluxe Ocean View Suite</h3>

            <p>
              📅 25 June 2026 – 28 June 2026
            </p>

            <div className="booking-tags">
              <span>👥 2 Adults</span>
              <span>🛏 Deluxe Room</span>
              <span>🌙 3 Nights</span>
            </div>
          </div>

          <div className="booking-action">
            <span className="confirmed-badge">
              ● Confirmed
            </span>

            <button className="detail-button">
              View Detail →
            </button>
          </div>
        </div>
      </section>

      {/* HISTORY DAN BENEFITS */}
      <div className="dashboard-bottom-grid">

        {/* BOOKING HISTORY */}
        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <span className="section-label">
                RECENT ACTIVITY
              </span>

              <h2>📖 Booking History</h2>
            </div>
          </div>

          <div className="history-list">
            {bookingHistory.map(
              (booking, index) => (
                <div
                  className="history-item"
                  key={booking.room}
                >
                  <div className="history-number">
                    {index + 1}
                  </div>

                  <div className="history-detail">
                    <h3>{booking.room}</h3>

                    <p>📅 {booking.date}</p>
                  </div>

                  <span className="completed-badge">
                    ✓ {booking.status}
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        {/* MEMBERSHIP BENEFITS */}
        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <span className="section-label">
                GOLD PRIVILEGES
              </span>

              <h2>🎁 Membership Benefits</h2>
            </div>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <div
                className="benefit-item"
                key={benefit.title}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <div>
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}