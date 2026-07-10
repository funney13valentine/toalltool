import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Summoning | ToAllTool",
  description: "Terms and conditions for utilizing the ToAllTool sanctuary of digital tools.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen page-bg flex flex-col items-center py-16 px-5 sm:px-6">
      <div className="relative w-full max-w-[800px] rounded-2xl border border-gothic-border/60 bg-gothic-card/60 p-8 sm:p-12 backdrop-blur-md card-shadow mt-8">
        {/* Gothic Background Accent */}
        <div className="absolute -right-10 -top-10 text-8xl opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
          📜
        </div>

        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="font-medium transition hover:text-gothic-emerald">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-slate-200">Terms of Summoning</span>
        </nav>

        <header className="mb-10 text-center sm:text-left border-b border-gothic-border/40 pb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-gothic-emerald drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">Sacred Covenant</p>
          <h1 className="font-display mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Terms of <span className="text-gothic-emerald filter drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">Summoning</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">Please read these rules before utilising our tool sanctuary.</p>
        </header>

        <div className="space-y-8 text-slate-300 leading-7">
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">1. Acceptance of the Pact</h2>
            <p>
              By entering this digital sanctuary and summoning the online tools hosted herein, you agree to be bound by these Terms of Summoning. If you reject these terms, you must dissolve your connection and leave this cathedral immediately.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">2. Permitted Sorcery</h2>
            <p>
              All tools are provided for constructive and lawful wizardry. You agree not to utilize these tools for dark sorcery, including but not limited to: creating malicious files, spamming, disrupting networks, or violating the privacy of other mortal souls.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">3. Mist & Misfunctions (Disclaimer)</h2>
            <p>
              These tools are summoned from the web &apos;as is&apos; and &apos;as available.&apos; We make no covenants that they will function perfectly, remain online forever, or be free of errors. If a tool fails or dissolves your files into digital mist, ToAllTool holds no liability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">4. Sanctuary Privacy</h2>
            <p>
              We respect the sanctity of your work. Any data or files you process using these third-party tools are not cached or stored within our cathedral. Your magic is yours alone, and it vanishes once you close the tab.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">5. Altar Updates</h2>
            <p>
              We reserve the right to alter this covenant, replace tools, or restrict access to the sanctuary at any time without prior incantation or notice.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gothic-border/40 text-center">
          <Link
            href="/"
            className="font-display inline-flex items-center gap-2 rounded-xl bg-gothic-emerald px-6 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-gothic-emerald/85 shadow-[0_4px_12px_rgba(16,185,129,0.15)]"
          >
            ← Return to Sanctuary
          </Link>
        </div>
      </div>
    </main>
  );
}
