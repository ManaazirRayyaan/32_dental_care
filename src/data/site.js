import {
  Baby,
  Bone,
  CalendarCheck,
  HeartPulse,
  MessageCircle,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  WandSparkles,
} from "lucide-react";

export const clinic = {
  name: "32 Dental Clinic & Aesthetic Centre",
  shortName: "32 Dental Clinic",
  doctor: "Dr. XXX",
  phone: "+91 XXX",
  tel: "tel:+91XXXXX",
  whatsapp:
    "https://wa.me/91XXXXX?text=Hello%2032%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  address: "1st Floor, beside Indian Bank, opp. District Education Office, Hosur",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const services = [
  {
    title: "Root Canal",
    fullTitle: "Root Canal Treatment",
    description: "Comfort-focused treatment for infected or painful teeth with careful tooth preservation.",
    icon: Syringe,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    title: "Implants",
    fullTitle: "Dental Implants",
    description: "Strong, natural-looking tooth replacement planned for long-term chewing comfort.",
    icon: Bone,
    accent: "bg-slate-100 text-slate-700",
  },
  {
    title: "Braces",
    fullTitle: "Braces & Aligners",
    description: "Discreet alignment options for straighter teeth and a balanced bite.",
    icon: Sparkles,
    accent: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Whitening",
    fullTitle: "Teeth Whitening",
    description: "Clinical whitening designed to brighten your smile safely and naturally.",
    icon: WandSparkles,
    accent: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Smile Design",
    fullTitle: "Smile Design",
    description: "Aesthetic planning for shape, shade, proportion, and confidence in your smile.",
    icon: HeartPulse,
    accent: "bg-rose-50 text-rose-600",
  },
  {
    title: "Kids Dentistry",
    fullTitle: "Pediatric Dentistry",
    description: "Gentle preventive and restorative dental care for children and families.",
    icon: Baby,
    accent: "bg-amber-50 text-amber-700",
  },
];

export const values = [
  {
    title: "Modern equipment",
    description: "Digital tools and contemporary materials support precise, efficient dental visits.",
    icon: Microscope,
  },
  {
    title: "Patient-first care",
    description: "Every treatment plan is explained clearly, with comfort built into each step.",
    icon: Stethoscope,
  },
  {
    title: "Clean environment",
    description: "Hygiene protocols and organized treatment rooms keep visits calm and safe.",
    icon: ShieldCheck,
  },
];

export const testimonials = [
  {
    name: "Priya S.",
    text: "Dr. Sowmya explained my root canal clearly and made the whole visit feel calm.",
  },
  {
    name: "Arun Kumar",
    text: "The clinic is clean, organized, and professional. My implant consultation was very detailed.",
  },
  {
    name: "Nisha R.",
    text: "I came in for whitening and liked that the result looked natural, not overdone.",
  },
];

export const quickActions = [
  { label: "Book Appointment", to: "/appointment", icon: CalendarCheck },
  { label: "WhatsApp", href: clinic.whatsapp, icon: MessageCircle },
];
