import { MessageCircle, Phone } from "lucide-react";
import { clinic } from "../data/site.js";

export default function FloatingActions() {
  return (
    <>
      <a
        href={clinic.tel}
        className="fixed bottom-6 right-24 z-40 grid h-14 w-14 place-items-center rounded-full bg-white text-blue-600 shadow-2xl ring-1 ring-slate-200 transition hover:-translate-y-1 hover:text-slate-950"
        aria-label="Call 32 Dental Clinic"
      >
        <Phone size={23} />
      </a>
      <a
        href={clinic.whatsapp}
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#1fb85a]"
        aria-label="Chat with 32 Dental Clinic on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}
