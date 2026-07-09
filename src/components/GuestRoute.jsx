import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return children;
  }

  if (user.role === "member") {
    return <Navigate to="/member" replace />;
  }

  return <Navigate to="/dashboard" replace />;
}