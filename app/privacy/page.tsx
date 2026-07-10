import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Covenant | ToAllTool",
  description: "Privacy policy describing how data and files are kept safe in the ToAllTool sanctuary.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen page-bg flex flex-col items-center py-16 px-5 sm:px-6">
      <div className="relative w-full max-w-[800px] rounded-2xl border border-gothic-border/60 bg-gothic-card/60 p-8 sm:p-12 backdrop-blur-md card-shadow mt-8">
        {/* Gothic Background Accent */}
        <div className="absolute -right-10 -top-10 text-8xl opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
          🛡️
        </div>

        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="font-medium transition hover:text-gothic-crimson">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-slate-200">Privacy Covenant</span>
        </nav>

        <header className="mb-10 text-center sm:text-left border-b border-gothic-border/40 pb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-gothic-crimson drop-shadow-[0_0_5px_rgba(220,38,38,0.3)]">Sacred Shield</p>
          <h1 className="font-display mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Privacy <span className="text-gothic-crimson filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">Covenant</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">How we guard the sanctity of your digital presence.</p>
        </header>

        <div className="space-y-8 text-slate-300 leading-7">
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">1. Sanctuary Integrity</h2>
            <p>
              Your digital presence is sacred to our cathedral. We do not gather, store, or sell any of your mortal details, nor do we harvest files you bring to our altar. Your steps within this sanctuary are private.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">2. Zero-Cache Sorcery</h2>
            <p>
              When you use files or text to utilize converter, design, or translation tools, the data is processed directly via third-party secure APIs or inside your own browser window. We do not host, store, or view the content of your summoned files. Once the process completes, the magic is done, and no traces remain.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">3. External Portals</h2>
            <p>
              Our sanctuary lists and links to third-party tools and external websites. Once you cross these gates, you are subject to the privacy covenants of those domains. We encourage you to review their shields and policies before presenting your data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">4. Cookies & Trackers</h2>
            <p>
              We do not deploy invasive tracking tools or behavioral cookie scripts to stalk your movement inside this gothic cathedral. Basic session data may be used solely to monitor sanctuary stability and prevent hostile intrusions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">5. Summoning the Sorcerer</h2>
            <p>
              If you have queries or seek clarification regarding this Privacy Covenant, you may summon us directly by electronic dispatch at:{" "}
              <a
                href="mailto:mx13eet@gmail.com"
                className="text-gothic-crimson font-semibold hover:underline hover:drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]"
              >
                mx13eet@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gothic-border/40 text-center">
          <Link
            href="/"
            className="font-display inline-flex items-center gap-2 rounded-xl bg-gothic-crimson px-6 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-gothic-crimson/85 shadow-[0_4px_12px_rgba(220,38,38,0.15)]"
          >
            ← Return to Sanctuary
          </Link>
        </div>
      </div>
    </main>
  );
}
