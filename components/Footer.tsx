export default function Footer() {
  return (
    <footer id="about" className="mt-auto border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-9 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} ToAllTool. Tools, all in one place.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2"><a href="#privacy" className="transition hover:text-white">Privacy</a><a href="#about" className="transition hover:text-white">About</a><a href="#contact" className="transition hover:text-white">Contact</a><a href="#social" className="transition hover:text-white">𝕏</a><a href="#social" className="transition hover:text-white">in</a></div>
      </div>
    </footer>
  );
}
