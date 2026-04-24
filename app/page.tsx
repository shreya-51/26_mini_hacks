import { projects } from "@/lib/projects";

const TOTAL = 26;

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const sorted = [...projects].sort((a, b) => b.number - a.number);
  const done = projects.length;
  const remaining = TOTAL - done;
  const pct = (done / TOTAL) * 100;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-20 sm:py-28">
      <header className="mb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-medium tracking-tight">
              26 Mini Hacks
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              A log of 26 small things I&rsquo;m building.
            </p>
          </div>
          <a
            href="https://twitter.com/shreyaw_"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>@shreyaw_</span>
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div
            className="h-1 flex-1 overflow-hidden rounded-full bg-border/70"
            role="progressbar"
            aria-valuenow={done}
            aria-valuemin={0}
            aria-valuemax={TOTAL}
          >
            <div
              className="h-full rounded-full bg-foreground transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex items-baseline gap-2 font-mono text-xs tabular-nums text-muted-foreground">
            <span className="text-foreground">
              {String(done).padStart(2, "0")}
            </span>
            <span className="text-muted-foreground/60">/</span>
            <span>{TOTAL}</span>
            <span className="text-muted-foreground/60">·</span>
            <span>{String(remaining).padStart(2, "0")} to go</span>
          </div>
        </div>
      </header>

      <ol className="flex flex-col divide-y divide-border">
        {sorted.map((p) => {
          const Row = (
            <div className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-4">
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {String(p.number).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-[15px] font-medium tracking-tight text-foreground decoration-foreground/30 underline-offset-4 group-hover:underline">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
              <time
                dateTime={p.date}
                className="whitespace-nowrap font-mono text-xs tabular-nums text-muted-foreground"
              >
                {formatDate(p.date)}
              </time>
            </div>
          );

          return (
            <li key={p.number}>
              {p.href ? (
                <a
                  href={p.href}
                  className="block transition-colors focus:outline-none focus-visible:bg-accent/50"
                >
                  {Row}
                </a>
              ) : (
                Row
              )}
            </li>
          );
        })}
      </ol>
    </main>
  );
}
