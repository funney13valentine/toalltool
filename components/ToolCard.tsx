import type { Tool } from "@/data/tools";
import { CTA_TEXTS, TOOL_EMOJIS, pickFromSeed } from "@/lib/playful";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
    <span className="animate-shimmer text-lg tracking-tight text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.4)]">★★★★★</span>
    <span className="text-sm font-bold text-slate-400">{rating.toFixed(1)}</span>
  </div>
);

export default function ToolCard({ tool }: { tool: Tool }) {
  const emoji = pickFromSeed(tool.id, TOOL_EMOJIS);
  const ctaText = pickFromSeed(tool.id + "-cta", CTA_TEXTS);

  const tagStyles = [
    "bg-emerald-950/30 text-emerald-300 border border-emerald-900/30",
    "bg-teal-950/30 text-teal-300 border border-teal-900/30",
    "bg-lime-950/30 text-lime-300 border border-lime-900/30",
    "bg-amber-950/30 text-amber-300 border border-amber-900/30",
  ];

  return (
    <article className="group flex flex-col gap-4 sm:flex-row sm:items-center justify-between rounded-2xl border border-gothic-border/60 bg-gothic-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-5 card-shadow card-shadow-hover">
      <div className="flex flex-1 items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gothic-dark border border-gothic-border/60 text-xl transition-transform group-hover:rotate-12 group-hover:scale-110 group-hover:border-gothic-emerald/40"
          aria-hidden="true"
        >
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h3 className="font-display text-lg font-extrabold tracking-tight text-white leading-tight">{tool.name}</h3>
            <StarRating rating={tool.rating} />
          </div>
          <p className="mt-1.5 text-sm leading-6 text-slate-400 text-pretty">{tool.description}</p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${tool.name} features`}>
            {tool.features.map((feature, index) => (
              <li
                key={feature}
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagStyles[index % tagStyles.length]}`}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:self-center shrink-0 w-full sm:w-auto">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl bg-gothic-emerald px-4 py-2.5 text-xs font-bold text-white transition-all hover:scale-[1.02] hover:bg-gothic-emerald/85 focus:outline-none focus:ring-4 focus:ring-gothic-emerald/20 shadow-[0_4px_10px_rgba(16,185,129,0.15)] hover:shadow-[0_4px_15px_rgba(16,185,129,0.3)]"
        >
          {ctaText} <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
