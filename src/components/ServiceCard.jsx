export default function ServiceCard({ service, detailed = false }) {
  const Icon = service.icon;

  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className={`mb-5 grid h-12 w-12 place-items-center rounded-lg ${service.accent}`}>
        <Icon size={25} />
      </div>
      <h3 className="text-lg font-black text-slate-950">{service.fullTitle}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
      {detailed && (
        <div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          Recommended after a clinical consultation, digital evaluation, and a clear explanation of
          treatment options.
        </div>
      )}
    </article>
  );
}
