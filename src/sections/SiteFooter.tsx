export function SiteFooter() {
  return (
    <footer className="border-t border-stone-700 bg-emerald-950 px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white p-3">
            <img
              src="/images/alfapet-logo.png"
              alt="AlfaPet"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm leading-6 text-white/60">
            7319 Ingham Lane, Godfrey, IL 62035
            <br />
            1-800-236-PETS (7387)
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/75"
        >
          <a
            className="transition hover:text-white"
            href="https://www.alfapetco.com/about-alfapet/"
            target="_blank"
            rel="noreferrer"
          >
            Meet AlfaPet
          </a>
          <a
            className="transition hover:text-white"
            href="https://www.alfapetco.com/products/"
            target="_blank"
            rel="noreferrer"
          >
            Our liners
          </a>
          <a
            className="transition hover:text-white"
            href="https://www.alfapetco.com/contact-us/"
            target="_blank"
            rel="noreferrer"
          >
            Contact us
          </a>
        </nav>
        <p className="text-sm text-white/45">© 2026 AlfaPet Inc.</p>
      </div>
    </footer>
  );
}
