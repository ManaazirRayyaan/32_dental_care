import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
