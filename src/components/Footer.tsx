function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {year} My Website. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#about" className="hover:text-slate-950">
            About
          </a>

          <a href="#services" className="hover:text-slate-950">
            Services
          </a>

          <a href="#contact" className="hover:text-slate-950">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;