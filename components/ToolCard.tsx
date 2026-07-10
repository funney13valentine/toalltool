import type { Tool } from "@/data/tools";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
    <span className="tracking-tight text-amber-400">★★★★★</span>
    <span className="ml-1 text-sm font-semibold text-slate-600">{rating.toFixed(1)}</span>
  </div>
);

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-lg font-bold text-teal-600" aria-hidden="true">↗</div>
        <StarRating rating={tool.rating} />
      </div>
      <h3 className="text-lg font-bold tracking-tight text-slate-900">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{tool.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${tool.name} features`}>
        {tool.features.map((feature) => <li key={feature} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{feature}</li>)}
      </ul>
      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-200">
        Visit Tool <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
