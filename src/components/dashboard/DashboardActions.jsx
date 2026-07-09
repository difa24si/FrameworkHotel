import { useNavigate } from "react-router-dom";

export default function DashboardActions() {
  const navigate = useNavigate();

  return (
    <button
      className="btn-save"
      onClick={() => navigate("/dashboard/bookings/add")}
    >
      + New Booking
    </button>
  );
}