import SectionHeading from '../components/SectionHeading';

function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A simple foundation for a professional website"
          description="Use this section to explain who you are, what the site is for, and why someone should trust the business or project."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-950">
              Clear structure
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Components, sections, layout, and pages are separated so the project
              stays easy to maintain.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-950">
              Reusable pieces
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Buttons, headings, navigation, and content sections can be reused
              throughout the site.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-950">
              Easy to deploy
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Vite builds static assets that can be hosted on services like Vercel,
              Netlify, or standard static hosting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;