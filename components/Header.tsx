import Link from "next/link";
import RotatingTagline from "@/components/RotatingTagline";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f5f3ef]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-5 px-5 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <span
            className="font-display flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg text-white shadow-md transition-transform group-hover:rotate-6 group-hover:scale-110"
            aria-hidden="true"
          >
            🛠️
          </span>
          <span className="flex flex-col">
            <span className="font-display text-xl font-extrabold tracking-tight text-slate-800 sm:text-2xl">
              ToAll<span className="text-teal-600">Tool</span>
            </span>
            <RotatingTagline />
          </span>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-bold sm:gap-4 sm:text-base">
          <Link
            href="/"
            className="group relative rounded-full px-3 py-2 text-slate-600 transition hover:text-teal-600 sm:px-4"
          >
            Home
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-teal-500 transition-all group-hover:w-3/4" />
          </Link>
          <a
            href="#about"
            className="group relative rounded-full px-3 py-2 text-slate-600 transition hover:text-teal-600 sm:px-4"
          >
            About
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-teal-500 transition-all group-hover:w-3/4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
