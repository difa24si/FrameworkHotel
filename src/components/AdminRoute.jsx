import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (
    user.role === "admin" ||
    user.role === "manager" ||
    user.role === "receptionist"
  ) {
    return children;
  }

  return <Navigate to="/member" replace />;
}