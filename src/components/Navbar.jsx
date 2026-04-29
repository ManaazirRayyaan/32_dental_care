import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { clinic, navItems } from "../data/site.js";
import Button from "./Button.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const navClass = ({ isActive }) =>
    `text-sm font-bold transition ${isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-lg font-black text-white">
            32
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-black uppercase tracking-wide text-slate-950 sm:text-base">
              32 Dental Clinic
            </span>
            <span className="block text-xs font-semibold text-blue-600">& Aesthetic Centre</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={clinic.tel}
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900 transition hover:border-blue-200 hover:text-blue-600"
            aria-label="Call clinic"
          >
            <Phone size={18} />
          </a>
          <Button to="/appointment">Book Appointment</Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-bold ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                  }`
                }
                onClick={close}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <Button href={clinic.tel} variant="secondary" className="w-full">
                Call
              </Button>
              <Button to="/appointment" className="w-full" onClick={close}>
                Book
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
