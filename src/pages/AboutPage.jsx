import { Award, HeartHandshake, ShieldCheck } from "lucide-react";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { clinic } from "../data/site.js";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">
              About us
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Dental care shaped around comfort, trust, and clinical detail.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {clinic.name} provides modern dental and aesthetic care for patients who want a clean,
              professional clinic experience without rushed explanations or unnecessary confusion.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=85"
              alt="Modern dental consultation room"
              className="h-80 rounded-2xl object-cover shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85"
              alt="Dental tools prepared for treatment"
              className="mt-10 h-80 rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-white p-6">
            <div className="grid h-full min-h-[380px] place-items-end rounded-xl bg-slate-200 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85')] bg-cover bg-center p-5">
              <div className="rounded-xl bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-xl font-black text-slate-950">{clinic.doctor}</p>
                <p className="mt-1 text-sm font-semibold text-blue-700">Dental Surgeon</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Doctor profile"
              title="Dr. Sowmya"
              description="Dr. Sowmya’s care philosophy is simple: diagnose carefully, explain clearly, and treat gently. Each appointment is planned to help patients understand the concern, the options, and the expected outcome."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Experience", "Practical treatment planning for daily dental needs and aesthetic care.", Award],
                ["Philosophy", "Preserve natural teeth whenever possible and avoid rushed decisions.", HeartHandshake],
                ["Patient care", "A calm chairside manner for anxious adults, children, and families.", ShieldCheck],
              ].map(([title, text, Icon]) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon className="text-blue-600" size={25} />
                  <h3 className="mt-5 font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button to="/appointment">Book with Dr. Sowmya</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
