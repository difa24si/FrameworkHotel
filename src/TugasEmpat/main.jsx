import { createRoot } from "react-dom/client";
import "./tailwind.css";
import AdminPage from "./AdminPage";
import GuestPage from "./GuestPage";

createRoot(document.getElementById("root")).render(
  <div>
    <GuestPage/>
    <AdminPage/>
  </div>
);