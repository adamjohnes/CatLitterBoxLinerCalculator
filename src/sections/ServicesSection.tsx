import SectionHeading from '../components/SectionHeading';

const services = [
  {
    title: 'Website Design',
    description: 'Clean responsive pages that look good on desktop, tablet, and mobile.',
  },
  {
    title: 'Frontend Development',
    description: 'React and TypeScript components structured for long-term maintenance.',
  },
  {
    title: 'Performance Setup',
    description: 'A fast Vite foundation with simple build and preview commands.',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="What this boilerplate is ready for"
          description="This is a good starter for a small business website, landing page, portfolio, or simple frontend application."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-700">
                {service.title.charAt(0)}
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;