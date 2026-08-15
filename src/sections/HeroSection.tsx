export function HeroSection() {
  return (
    <section
      id="top"
      className="relative px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24"
    >
      <div className="absolute -right-32 top-10 size-96 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="absolute -left-32 bottom-0 size-72 rounded-full bg-amber-100/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-2">
        <div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-none tracking-tighter text-emerald-950 sm:text-6xl lg:text-7xl xl:text-8xl">
            The right liner, <span className="text-amber-600">first try.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-500 sm:text-xl">
            Measure your litter box once. We’ll match its dimensions to the
            AlfaPet cat pan liner made to fit. This means there’s less guessing and fewer
            returns.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-medium text-stone-500">
              Takes about 60 seconds · Measurements in inches
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
