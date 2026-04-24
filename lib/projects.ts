export type Project = {
  number: number;
  title: string;
  description: string;
  date: string;
  href?: string;
};

export const projects: Project[] = [
  {
    number: 1,
    title: "26 Mini Hacks",
    description: "This site — a running index of everything built along the way.",
    date: "2026-04-23",
    href: "https://github.com/shreya-51/26_mini_hacks",
  },
];
