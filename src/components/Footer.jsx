import { Link } from "react-router-dom";
import { clinic, navItems } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.25fr_0.75fr_1fr]">
        <div>
          <h2 className="text-xl font-black">{clinic.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Premium dental and aesthetic care in Hosur, focused on clear communication,
            comfort, and natural-looking outcomes.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-300">
            Quick links
          </h3>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link to="/appointment" className="text-sm text-slate-300 hover:text-white">
              Appointment
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-300">
            Contact
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">{clinic.address}</p>
          <a href={clinic.tel} className="mt-3 inline-flex text-sm font-bold text-white">
            {clinic.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
