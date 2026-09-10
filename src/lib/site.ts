export const site = {
  name: "Senergy with Jen",
  shortName: "Senergy",
  tagline: "Clean daily supplements, guided by Jennifer Collins.",
  description:
    "Vitamin supplement shop guided by sales representative Jennifer Collins. Personalized wellness, clean formulas, and a storefront built on Fakelit.",
  representative: {
    name: "Jennifer Collins",
    role: "Wellness sales representative",
    headline: "Your personal guide to daily vitality",
    bio: "Jennifer Collins helps clients choose clean, effective supplements that fit real life — energy, recovery, immunity, and long-term wellness. As the sales representative behind Senergy with Jen, she reviews every formula and stays close after checkout so you are never guessing in the vitamin aisle.",
  },
  url: "https://senergywithjen.vercel.app",
  email: "hello@senergywithjen.com",
  nav: [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/wellness", label: "Wellness" },
    { href: "/about", label: "Meet Jen" },
    { href: "/contact", label: "Consult" },
  ],
} as const;
