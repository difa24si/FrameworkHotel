import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./index.css";
import "./App.css";

import Loading from "./components/common/Loading";
import TestSupabase from "./pages/TestSupabase";

// Landing
const Landing = lazy(() => import("./pages/Landing"));

// Layout
const MainLayout = lazy(() => import("./layouts/MainLayout"));

// Auth
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));

// Admin
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Guests = lazy(() => import("./pages/Guests"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Services = lazy(() => import("./pages/Services"));
const RoomDetails = lazy(() => import("./pages/RoomDetails"));
const Reports = lazy(() => import("./pages/Reports"));
const Settings = lazy(() => import("./pages/Settings"));
const Members = lazy(() => import("./pages/Members"));

// Member
const MemberDashboard = lazy(() => import("./pages/Member/MemberDashboard"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          {/* Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />

          {/* Member */}
          <Route path="/member" element={<MemberDashboard />} />

          {/* Admin */}
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="guests" element={<Guests />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="services" element={<Services />} />
            <Route path="room-details" element={<RoomDetails />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="members" element={<Members />} />
          </Route>

          {/* Test */}
          <Route path="/test" element={<TestSupabase />} />

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}