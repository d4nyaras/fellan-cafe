interface ResultCardProps {
  title: string;
  description: string;
  location: string;
  mood?: string;
  match?: string;
}

export function ResultCard({ title, description, location, match = "92% match" }: ResultCardProps) {
  return (
    <article className="rounded-2xl border border-border/60 bg-surface/70 p-4 shadow-md backdrop-blur-glass transition hover:-translate-y-0.5 hover:bg-surface/90">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted">{description}</p>
        </div>

        <div className="shrink-0 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-center">
          <span className="block text-sm font-semibold text-primary">{match}</span>
          <span className="block text-[10px] text-muted">for you</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
        <p className="truncate text-xs text-muted">{location}</p>
        <button className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-text hover:bg-primary-hover">
          View cafe
        </button>
      </div>
    </article>
  );
}
