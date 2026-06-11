import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function MainLayouts({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}
