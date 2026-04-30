interface ResultCardProps {
  title: string;
  description: string;
  location: string;
  mood?: string;
  match?: string;
}

export function ResultCard({
  title,
  description,
  location,
  mood = "Cozy pick",
  match = "92% match",
}: ResultCardProps) {
  return (
    <article className="group rounded-xl border border-border/60  p-4 text-foreground shadow-md backdrop-blur-glass transition bg-surface-70 duration-medium hover:-translate-y-0.5  hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-3 inline-flex items-center rounded-full border border-border/60 bg-background/55 px-3 py-1 text-[11px] font-medium text-muted">
            {mood}
          </div>

          <h3 className="text-base font-semibold leading-6 tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>

        <div className="shrink-0 rounded-lg bg-primary/10 px-3 py-2 text-center text-primary">
          <span className="block text-sm font-semibold">{match}</span>
          <span className="block text-[10px] text-muted">for you</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/50 pt-4">
        <p className="truncate text-xs text-muted">{location}</p>
        <button className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-text transition duration-fast hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/35">
          View cafe
        </button>
      </div>
    </article>
  );
}
