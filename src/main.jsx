import React from "react";
import { createRoot } from "react-dom/client";
import {
  Baby,
  BadgeIndianRupee,
  Bone,
  CalendarCheck,
  ChevronRight,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  WandSparkles,
  X,
} from "lucide-react";
import "./styles.css";

const phoneNumber = "+91 98765 43210";
const telHref = "tel:+919876543210";
const whatsappHref =
  "https://wa.me/919876543210?text=Hello%2032%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Why Us", "#why-us"],
  ["Reviews", "#testimonials"],
  ["Contact", "#contact"],
];

const services = [
  {
    title: "Root Canal Treatment",
    description: "Precision care to save infected teeth comfortably.",
    icon: Syringe,
  },
  {
    title: "Dental Implants",
    description: "Stable, natural-looking replacements for missing teeth.",
    icon: Bone,
  },
  {
    title: "Braces & Aligners",
    description: "Modern smile correction for teens and adults.",
    icon: Sparkles,
  },
  {
    title: "Teeth Whitening",
    description: "Brighten your smile with safe clinical whitening.",
    icon: WandSparkles,
  },
  {
    title: "Smile Makeover",
    description: "Personalized aesthetic plans for confident smiles.",
    icon: HeartPulse,
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle dental visits designed for children.",
    icon: Baby,
  },
];

const whyChoose = [
  {
    title: "Painless procedures",
    description: "Calm, comfort-first treatments with gentle techniques.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced technology",
    description: "Digital planning and modern dental equipment.",
    icon: Microscope,
  },
  {
    title: "Friendly care",
    description: "Clear guidance and reassuring chairside support.",
    icon: Stethoscope,
  },
  {
    title: "Affordable pricing",
    description: "Transparent options for essential and aesthetic care.",
    icon: BadgeIndianRupee,
  },
];

const testimonials = [
  {
    name: "Priya S.",
    review:
      "The doctor explained every step clearly. My root canal was smooth and far more comfortable than I expected.",
  },
  {
    name: "Arun Kumar",
    review:
      "Very clean clinic, polite staff, and excellent treatment. The implant consultation was detailed and practical.",
  },
  {
    name: "Nisha R.",
    review:
      "I visited for teeth whitening before an event. The results were natural and the whole process felt safe.",
  },
  {
    name: "Mohammed Faisal",
    review:
      "My child was nervous, but the team handled the appointment with patience. Highly recommend for families.",
  },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-clinic-teal text-lg font-black text-white">
            32
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-extrabold uppercase tracking-wide text-clinic-navy sm:text-base">
              32 Dental Clinic
            </span>
            <span className="block text-xs font-semibold text-clinic-teal">
              & Aesthetic Centre
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={telHref} className="icon-button" aria-label="Call clinic">
            <Phone size={18} />
          </a>
          <a href="#contact" className="primary-button">
            Book Appointment
          </a>
        </div>

        <button
          className="icon-button lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sky-100 bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-md px-3 py-3 text-sm font-bold text-clinic-ink hover:bg-sky-50"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a href={telHref} className="secondary-button justify-center">
                Call Now
              </a>
              <a href={whatsappHref} className="primary-button justify-center">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-clinic-teal">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-clinic-navy sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85"
          alt="Smiling dental patient in a modern clinic"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/45" />
      </div>

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/85 px-4 py-2 text-sm font-bold text-clinic-teal shadow-sm">
            <ShieldCheck size={17} />
            Modern dentistry in Hosur
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-clinic-navy sm:text-5xl lg:text-6xl">
            Advanced Dental Care with a Gentle Touch
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Modern treatments, painless procedures, and a smile you can trust
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="primary-button text-base">
              <CalendarCheck size={20} />
              Book Appointment
            </a>
            <a href={whatsappHref} className="whatsapp-button text-base">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center sm:gap-4">
            {["Painless care", "Digital planning", "Family dentistry"].map((item) => (
              <div key={item} className="rounded-lg border border-sky-100 bg-white/85 p-4 shadow-sm">
                <p className="text-sm font-extrabold text-clinic-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
            alt="Dentist preparing modern dental equipment"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-clinic-teal">
            About the clinic
          </p>
          <h2 className="text-3xl font-black tracking-tight text-clinic-navy sm:text-4xl">
            Focused dental care in a calm, hygienic setting.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            32 Dental Clinic & Aesthetic Centre provides comprehensive dental and smile care with
            an emphasis on comfort, clarity, and long-term oral health. From routine consultations
            to aesthetic treatments, every visit is planned around precise diagnosis and gentle care.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Experienced dentist", Stethoscope],
              ["Modern equipment", Microscope],
              ["Hygienic environment", ShieldCheck],
            ].map(([label, Icon]) => (
              <div key={label} className="feature-tile">
                <Icon className="text-clinic-teal" size={24} />
                <p className="text-sm font-extrabold text-clinic-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section bg-sky-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Treatments"
          title="Dental services for healthy, confident smiles"
          description="Clinical care and aesthetic treatments delivered with clear communication and modern methods."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="service-card">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-clinic-mint text-clinic-teal">
                <Icon size={25} />
              </div>
              <h3 className="text-lg font-black text-clinic-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="A smoother dental visit from consultation to care"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map(({ title, description, icon: Icon }) => (
            <div key={title} className="reason-card">
              <Icon size={28} className="text-clinic-teal" />
              <h3 className="mt-5 text-lg font-black text-clinic-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section bg-clinic-mint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient reviews"
          title="Trusted by patients and families"
          description="Sample feedback that reflects the calm, professional care patients expect."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ name, review }) => (
            <article key={name} className="testimonial-card">
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-7 text-slate-650">{review}</p>
              <p className="mt-5 font-black text-clinic-navy">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppointmentCta() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-xl bg-clinic-navy px-6 py-9 shadow-soft sm:px-8 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal-200">
            Appointment
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
            Book Your Appointment Today
          </h2>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={telHref} className="light-button">
            <Phone size={19} />
            Call Now
          </a>
          <a href={whatsappHref} className="teal-button">
            <MessageCircle size={19} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section bg-sky-50/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-clinic-teal">
            Contact
          </p>
          <h2 className="text-3xl font-black tracking-tight text-clinic-navy sm:text-4xl">
            Visit 32 Dental Clinic & Aesthetic Centre
          </h2>
          <div className="mt-8 space-y-4">
            <div className="contact-row">
              <MapPin className="text-clinic-teal" size={22} />
              <p>1st Floor, beside Indian Bank, opp. District Education Office, Hosur, Tamil Nadu</p>
            </div>
            <a href={telHref} className="contact-row hover:border-teal-200 hover:bg-white">
              <Phone className="text-clinic-teal" size={22} />
              <p>{phoneNumber}</p>
            </a>
            <a href={whatsappHref} className="contact-row hover:border-teal-200 hover:bg-white">
              <MessageCircle className="text-clinic-teal" size={22} />
              <p>Chat on WhatsApp</p>
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-sky-100 bg-white shadow-soft">
          <iframe
            title="32 Dental Clinic location map"
            src="https://www.google.com/maps?q=1st%20Floor%2C%20beside%20Indian%20Bank%2C%20opp.%20District%20Education%20Office%2C%20Hosur%2C%20Tamil%20Nadu&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-clinic-navy px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <h2 className="text-xl font-black">32 Dental Clinic & Aesthetic Centre</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-sky-100">
            Advanced dental and aesthetic care with a gentle, hygiene-first approach in Hosur.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal-200">
            Quick links
          </h3>
          <div className="mt-4 grid gap-2">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-sky-100 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal-200">
            Contact info
          </h3>
          <p className="mt-4 text-sm leading-6 text-sky-100">
            1st Floor, beside Indian Bank, opp. District Education Office, Hosur, Tamil Nadu
          </p>
          <a href={telHref} className="mt-3 inline-flex text-sm font-bold text-white">
            {phoneNumber}
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <>
      <a
        href={telHref}
        className="fixed bottom-6 right-24 z-40 grid h-14 w-14 place-items-center rounded-full bg-white text-clinic-teal shadow-soft ring-1 ring-teal-100 transition hover:-translate-y-1 hover:text-clinic-navy"
        aria-label="Call 32 Dental Clinic"
      >
        <Phone size={23} />
      </a>
      <a
        href={whatsappHref}
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#1fb85a]"
        aria-label="Chat with 32 Dental Clinic on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-clinic-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <AppointmentCta />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
