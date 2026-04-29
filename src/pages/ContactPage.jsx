import { MapPin, MessageCircle, Phone } from "lucide-react";
import Button from "../components/Button.jsx";
import { clinic } from "../data/site.js";

export default function ContactPage() {
  return (
    <section className="section bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">
            Contact
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Visit 32 Dental Clinic & Aesthetic Centre
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reach the clinic for appointments, treatment questions, and directions.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <MapPin className="shrink-0 text-blue-600" size={23} />
              <p className="font-semibold leading-7 text-slate-700">{clinic.address}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={clinic.tel} variant="secondary">
                <Phone size={19} />
                Call {clinic.phone}
              </Button>
              <Button href={clinic.whatsapp}>
                <MessageCircle size={19} />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
          <h2 className="text-2xl font-black text-slate-950">Send an enquiry</h2>
          <form className="mt-6 grid gap-4">
            <input className="form-input" placeholder="Your name" type="text" />
            <input className="form-input" placeholder="Phone number" type="tel" />
            <input className="form-input" placeholder="Treatment or concern" type="text" />
            <textarea className="form-input min-h-32 resize-none" placeholder="Message" />
            <button type="button" className="primary-submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[360px] place-items-center rounded-2xl border border-dashed border-blue-200 bg-white text-center shadow-sm">
          <div>
            <MapPin className="mx-auto text-blue-600" size={34} />
            <p className="mt-4 text-xl font-black text-slate-950">Map location</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{clinic.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
