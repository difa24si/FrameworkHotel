import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function MainLayout() {

  const user = localStorage.getItem("user");

  console.log("USER DI LOCAL STORAGE :", user);

  if (!user) {
    console.log("BELUM LOGIN");
    return <Navigate to="/login" replace />;
  }

  console.log("SUDAH LOGIN");

  return (
    <div
      className="app-container"
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <Sidebar />

      <div
        className="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <main
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}