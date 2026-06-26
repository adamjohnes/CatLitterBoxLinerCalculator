import Button from '../components/Button';

function HeroSection() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Modern frontend website
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Build a clean, fast website with Vite, React, TypeScript, and Tailwind.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            This boilerplate gives you a simple structure with reusable components,
            page sections, a layout wrapper, and responsive Tailwind styling.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact">
              <Button>
                Contact Us
              </Button>
            </a>

            <a href="#services">
              <Button variant="secondary">
                View Services
              </Button>
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100" />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-950">Fast</p>
              <p className="mt-1 text-sm text-slate-600">Vite-powered setup</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-950">Typed</p>
              <p className="mt-1 text-sm text-slate-600">TypeScript components</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-950">Clean</p>
              <p className="mt-1 text-sm text-slate-600">Tailwind styling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;