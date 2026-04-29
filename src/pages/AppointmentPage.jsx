import { CalendarCheck } from "lucide-react";
import { services } from "../data/site.js";

export default function AppointmentPage() {
  return (
    <section className="section bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">
            Appointment
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Request a dental appointment
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share your details and preferred treatment. The clinic can confirm availability and
            guide you on the next step.
          </p>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <CalendarCheck className="text-blue-600" size={30} />
            <p className="mt-4 font-black text-slate-950">Front-end demo form</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This form is designed for the static website demo. Backend submission can be added
              later through email, WhatsApp, or a clinic CRM.
            </p>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="grid gap-5">
            <label className="form-label">
              Name
              <input className="form-input mt-2" type="text" placeholder="Enter your full name" />
            </label>
            <label className="form-label">
              Phone
              <input className="form-input mt-2" type="tel" placeholder="Enter your phone number" />
            </label>
            <label className="form-label">
              Treatment selection
              <select className="form-input mt-2" defaultValue="">
                <option value="" disabled>
                  Select a treatment
                </option>
                {services.slice(0, 5).map((service) => (
                  <option key={service.title}>{service.fullTitle}</option>
                ))}
              </select>
            </label>
            <label className="form-label">
              Preferred date
              <input className="form-input mt-2" type="date" />
            </label>
            <button type="button" className="primary-submit mt-2">
              Request Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
