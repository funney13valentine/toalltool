export default function Footer() {
  return (
    <footer id="about" className="mt-auto border-t border-slate-200/80 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-[1200px] px-5 py-9 sm:px-6">
        <div className="mb-5 text-center sm:text-left">
          <p className="font-display text-lg font-extrabold text-white">
            ToAllTool <span aria-hidden="true">🛠️</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">Tools, all in one place.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ToAllTool</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#privacy" className="transition hover:text-teal-400">
              Privacy
            </a>
            <a href="#about" className="transition hover:text-teal-400">
              About
            </a>
            <a href="#contact" className="transition hover:text-teal-400">
              Contact
            </a>
            <a href="#social" className="transition hover:text-white">
              𝕏
            </a>
            <a href="#social" className="transition hover:text-white">
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
