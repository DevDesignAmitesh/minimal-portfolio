export const data = {
  name: "Amitesh Singh",
  title: "Backend Developer",
  tagline:
    "I am a backend developer who loves working with motivated teams and building systems from first principles before scaling them.",

  inspirations: [
    {
      name: "sargampoudel",
      url: "https://x.com/sargampoudel",
    },
    {
      name: "kshvbgde",
      url: "https://x.com/kshvbgde",
    },
  ],

  about:
    "I focus on building reliable, scalable backend systems. I value clarity over cleverness, and simplicity over complexity. When I'm not writing code, I'm probably reading about distributed systems or taking long walks.",

  socialLinks: {
    github: "https://github.com/devDesignAmitesh/",
    twitter: "https://x.com/Amitesh48256",
    linkedin: "https://www.linkedin.com/in/amitesh-singh-504b2b281/",
    email: "mailto:amiteshsingh252@gmail.com",
  },

  resume: {
    imageUrl: "/resume.jpg",
    downloadUrl: "/resume.pdf",
  },

  blogs: [
    {
      title: "Story behind this portfolio",
      slug: "story-behind-this-portfolio",
      date: "2026-01-24",
      readTime: "4 min read",
      content: `# I Built This Portfolio Because Vibes

TL;DR — I randomly decided to build a portfolio, used lovable.dev, fought with Next.js and Tailwind, and now you’re reading this because I needed content. Also: frontend is cute.

## So… how did this even start?

I just got the idea of building my portfolio. No deep life moment. No dramatic trigger. Just vibes.

I truly love frontend, even though I mostly code backend, so please don’t expose me. I also wanted to try lovable.dev because why not. Vibe coding era, baby.

Also, I recently bought a cutie little domain and it was sitting there doing absolutely nothing. That felt illegal.

So yeah. Portfolio time.

## The vibe I was going for

I had some references in mind. Very minimal. Very clean. Very “I drink black coffee”.

sarg.am and kela.com were the main ones. Simple, calm, and cool. Exactly my speed for a quick build.

Then I also looked at some fancy portfolios like ramx.in, dikshit.tech, rinkit.tech, pixperk.tech, and anshu.tech.

These are crazy good. But also clearly built with time, effort, and emotional stability.

I want to build something like that too. But not today. Not in this economy. Not with my attention span.

So I went with minimal. Easy to start. Easy to finish. Easy to vibe-code.

## Enter lovable.dev and pain

I opened ChatGPT. Trauma-dumped my entire idea. Got a prompt. Pasted it into lovable.dev.

Boom. Instant UI. Dopamine hit. Life was good.

Then I noticed something.

Oh. This is Vite.

I use Next.js. So now I’m converting everything. Which is a pain in the ass while vibe coding, by the way.

I somehow finished that.

Then I noticed another thing.

Oh. This is old Tailwind.

So now I’m upgrading Tailwind too. Which did not go smoothly.

At this point I was too deep to quit. Classic sunk-cost fallacy moment.

## And now we’re here

Eventually, I built the whole thing.

Now it’s time to add content.

So for the sake of it, I’m writing this post and I’m going to publish it right after this.

I’m writing this very raw. Very unfiltered. Very “this is literally what happened”.

And yes, after this I’m going to ask GPT to structure it nicely for rendering beautifully.

Which is exactly what I just did. Meta, I know.

## Final thoughts aka emotional outro

If you’re reading this, you are awesome. You have elite patience. You probably also overthink side projects.

Also, please drop a comment on my Twitter post about my portfolio. I need validation. Thank you.

TL;DR — Built a portfolio because vibes. Used lovable.dev. Fought Vite, Next.js, and Tailwind. Wrote this post for content. No regrets. Some regrets.`,
    },
  ],

  experience: [
    {
      company: "Macro Rides",
      role: "Founding Engineer",
      period: "Oct 2024 – Jan 2026",
      description:
        "Joined as a Founding Engineer and played a key role in building the product from the ground up, owning frontend, backend, and DevOps initiatives. Led technical hiring efforts, conducted interviews, and managed project timelines while implementing a modern, scalable technology stack.",
    },
    {
      company: "My Design Minds",
      role: "Full Stack Developer",
      period: "Apr 2025 – Nov 2025",
      description:
        "Built an AI-driven platform from the ground up, leading end-to-end development across frontend, backend, and DevOps. Managed and mentored a two-member engineering team while implementing a modern, scalable technology stack.",
    },
  ],

  projects: [
    {
      name: "MacroRides — Web Platform (Landing Page + Vendor Portal)",
      description:
        "Built both the public-facing landing page and the internal vendor management platform for MacroRides. Delivered a high-performance, SEO-optimized marketing site and engineered a production-grade vendor portal used by multiple vendors for daily operations. Took ownership of development, deployment, and scalability across both products.",
      link: "https://macrorides.com/",
    },
    {
      name: "Multiplayer Brainstorming Platform (Excalidraw Clone)",
      description:
        "Built a collaborative whiteboarding platform inspired by Excalidraw, enabling teams to brainstorm visually and efficiently. Developed the complete frontend with a strong focus on performance, scalability, and user experience. Currently extending the platform with real-time collaboration using WebSockets and an event-driven backend.",
      link: "https://excalidraw.baap.one/",
    },
    {
      name: "Multiplayer Draw & Guess Game (Skribbl.io Clone)",
      description:
        "Developing an interactive multiplayer game where players draw prompts and compete by guessing words in real time. Implementing core gameplay mechanics, scoring logic, and a responsive UI using a modern, scalable frontend stack, with real-time state synchronization in progress.",
      link: "https://github.com/DevDesignAmitesh/skribbl",
    },
  ],
};

export type Blog = (typeof data.blogs)[number];
export type Experience = (typeof data.experience)[number];
export type Project = (typeof data.projects)[number];
