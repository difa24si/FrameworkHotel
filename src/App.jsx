import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import './index.css';
import './App.css';

import Loading from './components/common/Loading';
import NotFound from './components/common/NotFound';

const MainLayout = lazy(() => import('./layouts/MainLayout'));

// Auth
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Forgot = lazy(() => import('./pages/auth/Forgot'));

// Admin Pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Guests = lazy(() => import('./pages/Guests'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Services = lazy(() => import('./pages/Services'));
const RoomDetails = lazy(() => import('./pages/RoomDetails'));
const Reports = lazy(() => import('./pages/Reports'));
const Settings = lazy(() => import('./pages/Settings'));


// Member Portal
const MemberDashboard = lazy(() =>
  import('./pages/Member/MemberDashboard')
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />

          {/* ADMIN */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />

          <Route
            path="/guests"
            element={
              <MainLayout>
                <Guests />
              </MainLayout>
            }
          />

          <Route
            path="/bookings"
            element={
              <MainLayout>
                <Bookings />
              </MainLayout>
            }
          />

          <Route
            path="/services"
            element={
              <MainLayout>
                <Services />
              </MainLayout>
            }
          />

          <Route
            path="/room-details"
            element={
              <MainLayout>
                <RoomDetails />
              </MainLayout>
            }
          />

          <Route
            path="/reports"
            element={
              <MainLayout>
                <Reports />
              </MainLayout>
            }
          />

          <Route
            path="/settings"
            element={
              <MainLayout>
                <Settings />
              </MainLayout>
            }
          />

          {/* MEMBER PORTAL */}
          <Route
            path="/member"
            element={<MemberDashboard />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <MainLayout>
                <NotFound />
              </MainLayout>
            }
          />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}