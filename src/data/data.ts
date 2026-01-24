export const data = {
  name: "Your Name",
  title: "Backend Developer",
  tagline:
    "I am a backend developer who loves working with motivated teams and building systems from first principles before scaling them.",

  inspiration: {
    name: "their_twitter_username",
    url: "https://twitter.com/their_twitter_username",
  },
  about:
    "I focus on building reliable, scalable backend systems. I value clarity over cleverness, and simplicity over complexity. When I'm not writing code, I'm probably reading about distributed systems or taking long walks.",

  socialLinks: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@example.com",
  },

  resume: {
    imageUrl: "/resume.jpg",
    downloadUrl: "/resume.pdf",
  },

  blogs: [
    {
      title: "Lean life",
      slug: "lean-life",
      date: "2026-01-18",
      readTime: "4 min read",
      content: `TL;DR A lean life is doing less of the unnecessary, more of what matters, and owning your time and attention.

## What is a lean life?

In my words, it means cutting away the noise. It's about being intentional with your time, your energy, and your focus.

Most people fill their days with tasks that feel productive but don't move them forward. Meetings that could be emails. Emails that could be nothing. Projects that exist because someone was bored.

A lean life rejects this. It asks: what actually matters?

## The practice

1. **Say no more often.** Every yes is a no to something else.
2. **Own your calendar.** If you don't, someone else will.
3. **Build systems, not goals.** Goals are destinations. Systems are the vehicle.
4. **Protect deep work.** Shallow work expands to fill all available time.

## Why it matters

Time is the only resource you can't get back. Spending it intentionally is the closest thing to freedom.`,
    },
    {
      title: "Building systems that scale",
      slug: "building-systems-that-scale",
      date: "2026-01-10",
      readTime: "6 min read",
      content: `Scaling isn't about handling more load. It's about handling more load without proportionally more complexity.

## The misconception

Many engineers think scaling means throwing more servers at a problem. Sometimes it does. But more often, it means designing systems that don't need to think too hard.

## Principles I follow

1. **Statelessness where possible.** State is where bugs hide.
2. **Idempotency everywhere.** If something can fail, it will. Make retries safe.
3. **Boring technology.** Proven tools beat shiny ones.
4. **Measure before optimizing.** Intuition lies. Data doesn't.

## The reality

Most systems don't need to scale. But the ones that do need it suddenly, and without warning. Build for that day, even if it never comes.`,
    },
  ],

  experience: [
    {
      company: "Spotsnow",
      role: "Software Engineer",
      period: "Oct 2024 – Present",
      description:
        "Working on backend systems that handle high-throughput data processing. Building APIs, optimizing database queries, and mentoring junior engineers.",
    },
    {
      company: "TechStart",
      role: "Backend Developer",
      period: "Mar 2022 – Sep 2024",
      description:
        "Built the core payment infrastructure from scratch. Designed event-driven architecture for real-time notifications. Reduced API latency by 60%.",
    },
    {
      company: "Freelance",
      role: "Software Consultant",
      period: "Jan 2020 – Feb 2022",
      description:
        "Helped startups build their MVPs. Focused on clean architecture and maintainable codebases. Worked with Python, Go, and PostgreSQL.",
    },
  ],

  projects: [
    {
      name: "ratelimit",
      description:
        "A simple, Redis-backed rate limiter for distributed systems. Used in production by 3 companies.",
      link: "https://github.com",
    },
    {
      name: "pgmigrate",
      description:
        "Zero-downtime PostgreSQL migration tool. Handles schema changes without locking tables.",
      link: "https://github.com",
    },
    {
      name: "logpipe",
      description:
        "Lightweight log aggregation service. Collects, filters, and forwards logs to any destination.",
      link: null,
    },
  ],
};

export type Blog = (typeof data.blogs)[number];
export type Experience = (typeof data.experience)[number];
export type Project = (typeof data.projects)[number];
