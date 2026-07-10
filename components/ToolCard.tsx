import type { Tool } from "@/data/tools";
import { CTA_TEXTS, TAG_COLORS, TOOL_EMOJIS, pickFromSeed } from "@/lib/playful";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
    <span className="animate-shimmer text-lg tracking-tight text-amber-400">★★★★★</span>
    <span className="text-sm font-bold text-slate-500">{rating.toFixed(1)}</span>
  </div>
);

export default function ToolCard({ tool }: { tool: Tool }) {
  const emoji = pickFromSeed(tool.id, TOOL_EMOJIS);
  const ctaText = pickFromSeed(tool.id + "-cta", CTA_TEXTS);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 sm:p-6 card-shadow card-shadow-hover">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl transition-transform group-hover:rotate-12 group-hover:scale-110"
          aria-hidden="true"
        >
          {emoji}
        </div>
        <StarRating rating={tool.rating} />
      </div>
      <h3 className="font-display text-lg font-extrabold tracking-tight text-slate-800">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{tool.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${tool.name} features`}>
        {tool.features.map((feature, index) => (
          <li
            key={feature}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${TAG_COLORS[index % TAG_COLORS.length]}`}
          >
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-display mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-4 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-200"
      >
        {ctaText} <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
