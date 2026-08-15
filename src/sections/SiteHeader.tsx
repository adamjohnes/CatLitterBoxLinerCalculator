export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8"
      >
        <a
          href="#top"
          aria-label="AlfaPet Cat Pan Liner Calculator home"
          className="flex items-center gap-3"
        >
          <img
            src="/images/alfapet-logo.png"
            alt="AlfaPet"
            className="h-10 w-auto sm:h-11"
          />
          <span className="hidden border-l border-stone-300 pl-3 text-xs font-bold uppercase leading-4 tracking-widest text-stone-500 sm:block">
            Liner
            <br />
            calculator
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-stone-600 md:flex">
          <a className="transition hover:text-amber-700" href="#calculator">
            Calculator
          </a>
          <a className="transition hover:text-amber-700" href="#products">
            Our liners
          </a>
        </div>
        <a
          href="https://www.alfapetco.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-full bg-emerald-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-900 sm:px-5"
        >
          Visit AlfaPet
        </a>
      </nav>
    </header>
  );
}
