import Link from "next/link";

export default function Footer() {
  return (
    <footer id="about" className="mt-auto border-t border-gothic-border/60 bg-gothic-dark text-slate-400 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      <div className="mx-auto max-w-[1200px] px-5 py-9 sm:px-6">
        <div className="mb-5 text-center sm:text-left">
          <p className="font-display text-lg font-extrabold text-white">
            ToAll<span className="text-gothic-purple">Tool</span> <span aria-hidden="true">🔮</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">Summoning tools since antiquity. All in one place.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ToAllTool</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/terms" className="transition hover:text-gothic-purple hover:drop-shadow-[0_0_5px_#8b5cf6]">
              Terms
            </Link>
            <Link href="/privacy" className="transition hover:text-gothic-purple hover:drop-shadow-[0_0_5px_#8b5cf6]">
              Privacy
            </Link>
            <a href="#about" className="transition hover:text-gothic-purple hover:drop-shadow-[0_0_5px_#8b5cf6]">
              About
            </a>
            <a href="mailto:mx13eet@gmail.com" className="transition hover:text-gothic-purple hover:drop-shadow-[0_0_5px_#8b5cf6]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
