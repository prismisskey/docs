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
    title: "適当なさいと",
    description: "よこうそ",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://nanasi-apps.xyz",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ja-JP", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["misskeyv13","s3","ストレージ","すとれーじ","r2","wasabi","設定","使い方","storage","object","objectstorage","おぶじぇくとすとれーじ","オブジェクトストレージ","くらうどふれあ","クラウドフレア","解説","かいせつ","仕方","やりかた","しかた","morethan-log","fedora","debian","Blog", "Website", "Notion","mattyatea","misskey","cloudflare","サーバー","さーばー","cloudflare","pages","deploy","でぷろい","デプロイ","morethan-log","vercel","ミスキー","みすきー","mattyaski","まっちゃてぃー","抹茶ティー","マニュアル","インストール","構築","インスタンス","instance","まっちゃすきー","mattyacocacora","Misskey","建て方","v13","missky","github","Misskey","サーバー","misky"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
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
}
module.exports = CONFIG
