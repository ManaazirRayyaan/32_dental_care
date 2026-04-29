import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/site.js";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-200">
            Services
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
            Complete dental treatments planned with clarity and comfort.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From pain relief to smile enhancement, each treatment starts with diagnosis,
            explanation, and a practical care plan.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Treatments"
            title="Dental services available at 32 Dental Clinic"
            description="Explore the core treatments offered by the clinic. A consultation helps confirm the best option for your case."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 5).map((service) => (
              <ServiceCard key={service.title} service={service} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Treatment planning process</h2>
            <div className="mt-6 grid gap-4">
              {["Consultation and dental examination", "Digital assessment and treatment options", "Clear cost, timeline, and care instructions"].map(
                (item, index) => (
                  <div key={item} className="flex gap-4 rounded-xl bg-slate-50 p-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-600 text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="font-bold text-slate-800">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="rounded-2xl bg-blue-600 p-8 text-white shadow-xl">
            <h2 className="text-2xl font-black">Need help choosing a treatment?</h2>
            <p className="mt-4 leading-7 text-blue-50">
              Share your concern during consultation. The clinic can guide you through suitable
              options for pain, missing teeth, alignment, whitening, or smile design.
            </p>
            <div className="mt-7">
              <Button to="/appointment" variant="dark">
                Request Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
