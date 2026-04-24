# 26 Mini Hacks

A minimal site for logging 26 mini hack projects — a title, short description, date, and optional link for each.

To change the target count, update the `TOTAL` constant in [`app/page.tsx`](app/page.tsx).

Built with Next.js, TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com/).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding an entry

Append to the `projects` array in [`lib/projects.ts`](lib/projects.ts):

```ts
{
  number: 2,
  title: "Your project",
  description: "One-line description.",
  date: "2026-05-01",
  href: "https://example.com", // optional
}
```

Entries are sorted newest-first by `number`. The header progress bar updates automatically.

## Project structure

- `app/page.tsx` — the list view
- `lib/projects.ts` — the project data
- `app/layout.tsx` — root layout and fonts
- `components/ui/` — shadcn components

## License

MIT — see [LICENSE](LICENSE) if included, otherwise do whatever you want.
