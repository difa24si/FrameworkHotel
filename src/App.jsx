import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './index.css';
import './App.css';
import Loading from './components/common/Loading';
import NotFound from './components/common/NotFound';
import PageHeader from './components/common/PageHeader';

const MainLayout = lazy(() => import('./layouts/MainLayout'));

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
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } />
          <Route path="/guests" element={
            <MainLayout>
              <Guests />
            </MainLayout>
          } />
          <Route path="/bookings" element={
            <MainLayout>
              <Bookings />
            </MainLayout>
          } />
          <Route path="/services" element={
            <MainLayout>
              <Services />
            </MainLayout>
          } />
          <Route path="/room-details" element={
            <MainLayout>
              <RoomDetails />
            </MainLayout>
          } />
          <Route path="/reports" element={
            <MainLayout>
              <Reports />
            </MainLayout>
          } />
          <Route path="/settings" element={
            <MainLayout>
              <Settings />
            </MainLayout>
          } />

          {/* Catch-all */}
          <Route path="*" element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
