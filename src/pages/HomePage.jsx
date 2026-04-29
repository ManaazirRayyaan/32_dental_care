import { CalendarCheck, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { clinic, services, testimonials, values } from "../data/site.js";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-white/40" />
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="relative animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-extrabold text-blue-700 shadow-sm">
              Premium dental care in Hosur
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Advanced Dental Care with a Gentle Touch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Modern treatments, painless procedures, and a smile you can trust at {clinic.name}.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/appointment" className="text-base">
                <CalendarCheck size={20} />
                Book Appointment
              </Button>
              <Button href={clinic.whatsapp} variant="secondary" className="text-base">
                <MessageCircle size={20} />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Smiling dental patient in a modern clinic"
                className="h-[460px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-xl bg-white p-5 shadow-xl">
              <div className="grid grid-cols-3 gap-3 text-center">
                {["Gentle care", "Digital planning", "Clean clinic"].map((item) => (
                  <p key={item} className="text-sm font-black text-slate-900">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Clinic overview"
            title="Comfort-led dentistry with a premium, practical approach."
            description="Our team focuses on precise diagnosis, clean clinical workflows, and treatment plans that patients can understand before they begin."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-xl bg-slate-50 p-6">
                <Icon className="text-blue-600" size={26} />
                <h3 className="mt-5 font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured services"
            title="Treatments for pain relief, function, and confidence"
            description="A focused set of high-demand dental treatments available with clear consultation and treatment planning."
            light
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Patient feedback" title="A calm, clear experience patients remember" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                <p className="mt-5 font-black text-slate-950">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-r from-blue-600 to-slate-900 px-6 py-10 text-white shadow-2xl sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-100">
              Ready for a consultation?
            </p>
            <h2 className="mt-2 text-3xl font-black">Book Your Appointment Today</h2>
          </div>
          <Link to="/appointment" className="rounded-lg bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5">
            Request Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
