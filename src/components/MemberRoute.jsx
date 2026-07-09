import { Navigate } from "react-router-dom";

export default function MemberRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === "member") {
    return children;
  }

  return <Navigate to="/dashboard" replace />;
}