import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './index.css';
import './App.css';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
const MainLayouts = lazy(() => import('./layouts/MainLayouts'));

// Auth Pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Forgot = lazy(() => import('./pages/auth/Forgot'));

// Main Pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Guests = lazy(() => import('./pages/Guests'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Services = lazy(() => import('./pages/Services'));
const RoomDetails = lazy(() => import('./pages/RoomDetails'));
const Reports = lazy(() => import('./pages/Reports'));
const Settings = lazy(() => import('./pages/Settings'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Auth */}
          <Route path="/login"    element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot"   element={<Forgot />} />

          {/* Main App */}
          <Route path="/" element={
            <MainLayouts>
              <Dashboard />
            </MainLayouts>
          } />
          <Route path="/guests" element={
            <MainLayouts>
              <Guests />
            </MainLayouts>
          } />
          <Route path="/bookings" element={
            <MainLayouts>
              <Bookings />
            </MainLayouts>
          } />
          <Route path="/services" element={
            <MainLayouts>
              <Services />
            </MainLayouts>
          } />
          <Route path="/room-details" element={
            <MainLayouts>
              <RoomDetails />
            </MainLayouts>
          } />
          <Route path="/reports" element={
            <MainLayouts>
              <Reports />
            </MainLayouts>
          } />
          <Route path="/settings" element={
            <MainLayouts>
              <Settings />
            </MainLayouts>
          } />

          {/* Catch-all */}
          <Route path="*" element={
            <MainLayouts>
              <NotFound />
            </MainLayouts>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
