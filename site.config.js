const CONFIG = {
  // profile setting (required)
  profile: {
    name: "まっちゃてぃー。",
    image: "/icon.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "",
    bio: "抹茶系男子中学生",
    email: "nanasityan0112@proton.me",
    linkedin: "",
    github: "mattyatea",
    instagram: "",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/mattyatea/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "PrisMisskey Docs",
    description: "PrisMisskeyの主要なルールなどをまとめているサイトです。",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://docs.PrisMisskey.space",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ja-JP", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: [],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: "af09da71eeab41d796763cec3173a736",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
