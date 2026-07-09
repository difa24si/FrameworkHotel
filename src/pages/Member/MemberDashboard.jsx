import MemberHero from "../../components/members/MemberHero";
import MemberDashboardStats from "../../components/members/MemberDashboardStats";
import UpcomingStay from "../../components/members/UpcomingStay";
import BookingHistory from "../../components/members/BookingHistory";
import MembershipBenefits from "../../components/members/MembershipBenefits";

export default function MemberDashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <MemberHero user={user} />

      <MemberDashboardStats />

      <UpcomingStay />

      <BookingHistory />

      <MembershipBenefits />

    </div>
  );
}