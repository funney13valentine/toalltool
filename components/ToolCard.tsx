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
    "bg-red-950/30 text-red-300 border border-red-900/30",
    "bg-orange-950/30 text-orange-300 border border-orange-900/30",
    "bg-rose-950/30 text-rose-300 border border-rose-900/30",
    "bg-amber-950/30 text-amber-300 border border-amber-900/30",
  ];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gothic-border/60 bg-gothic-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 sm:p-6 card-shadow card-shadow-hover">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gothic-dark border border-gothic-border/60 text-xl transition-transform group-hover:rotate-12 group-hover:scale-110 group-hover:border-gothic-crimson/40"
          aria-hidden="true"
        >
          {emoji}
        </div>
        <StarRating rating={tool.rating} />
      </div>
      <h3 className="font-display text-lg font-extrabold tracking-tight text-white">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{tool.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${tool.name} features`}>
        {tool.features.map((feature, index) => (
          <li
            key={feature}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tagStyles[index % tagStyles.length]}`}
          >
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-display mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gothic-crimson px-4 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-gothic-crimson/85 focus:outline-none focus:ring-4 focus:ring-gothic-crimson/20 shadow-[0_4px_12px_rgba(220,38,38,0.15)] hover:shadow-[0_4px_18px_rgba(220,38,38,0.3)]"
      >
        {ctaText} <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
