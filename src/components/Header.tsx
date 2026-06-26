function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight text-slate-950">
          My Website
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#about" className="transition hover:text-slate-950">
            About
          </a>

          <a href="#services" className="transition hover:text-slate-950">
            Services
          </a>

          <a href="#contact" className="transition hover:text-slate-950">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Header;