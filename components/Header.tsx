import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-5 px-5 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-base text-white">T</span>ToAll<span className="text-teal-500">Tool</span></Link>
        <nav className="flex items-center gap-5 text-sm font-semibold text-slate-600"><Link href="/" className="transition hover:text-teal-600">Home</Link><a href="#about" className="transition hover:text-teal-600">About</a></nav>
      </div>
    </header>
  );
}
