export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
