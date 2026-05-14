import { useState } from 'react';
import GuestPage from './pages/GuestPage';
import AdminPage from './pages/AdminPage';

function Tugas4App() {
  const [currentPage, setCurrentPage] = useState('guest');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">
                🛒 Swalayan Finder
              </h1>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage('guest')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === 'guest'
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                👤 Guest View
              </button>
              <button
                onClick={() => setCurrentPage('admin')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === 'admin'
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                👨‍ Admin View
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'guest' ? <GuestPage /> : <AdminPage />}
    </div>
  );
}

export default Tugas4App;