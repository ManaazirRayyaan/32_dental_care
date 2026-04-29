export default function SectionHeader({ eyebrow, title, description, align = "center", light = false }) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} mb-10 max-w-3xl`}>
      <p className={`mb-3 text-sm font-extrabold uppercase tracking-[0.18em] ${light ? "text-blue-200" : "text-blue-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
