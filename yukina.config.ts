import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Angela Suresh",
  subTitle: "My Personal Website",
  brandTitle: "Angela Suresh",

  description: "Welcome to my personal website. Theme Created by WhitePaper. Edited with Astro",

  site: "https://angelasrsh.github.io", // Your website URL, used for sitemap and RSS feed

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_engineering,
      href: "/engineering",
    },
    {
      nameKey: I18nKeys.nav_bar_blog,
      href: "/blog",
    },
    // {
    //   nameKey: I18nKeys.nav_bar_archive,
    //   href: "/archive",
    // },
    // {
    //   nameKey: I18nKeys.nav_bar_portfolio,
    //   href: "/portfolio",
    // },

    {
      nameKey: I18nKeys.nav_bar_resume,
      href: "../src/contents/pdfs/resume2526.pdf",
    },
  ],

  username: "Angela Suresh",
  sign: "Never Stop Learning, There's Always a Form You Don't Know",
  avatarUrl: "https://drive.google.com/file/d/1PxuNpJSBJ66KYWZezJOzXdKTl942DH1c/view?usp=sharing",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/angelasrsh",
    },
    {
      icon: "mingcute:youtube-line",
      link: "https://www.youtube.com/@angelasrsh",
    },
    {
      icon: "mingcute:spotify-line",
      link: "https://open.spotify.com/user/angelasuresh?si=ab18e199f4434010",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/images/banners/tower.jpg",
    "/images/banners/trailofLights.jpg",
    "/images/banners/angelaiquecomp.JPG",
    "/images/banners/Angelique.jpg",
    "/images/banners/ladyluck1.JPG",
    "/images/banners/newzealand.jpg"
  ],
  // banners: [
  //   "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
  //   "https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
  //   "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
  //   "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
  //   "https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
  //   "https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
  //   "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
  //   "https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
  // ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Angela Suresh",
  subTitle: "My Personal Website",
  brandTitle: "Angela Suresh",

  description: "Welcome to my personal website. Theme Created by WhitePaper. Edited with Astro",

  site: "https://angelasrsh.github.io", // Your website URL, used for sitemap and RSS feed

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_engineering,
      href: "/engineering",
    },
    {
      nameKey: I18nKeys.nav_bar_blog,
      href: "/blog",
    },
    // {
    //   nameKey: I18nKeys.nav_bar_archive,
    //   href: "/archive",
    // },
    // {
    //   nameKey: I18nKeys.nav_bar_portfolio,
    //   href: "/portfolio",
    // },

    {
      nameKey: I18nKeys.nav_bar_resume,
      href: "../src/contents/pdfs/resume2526.pdf",
    },
  ],

  username: "Angela Suresh",
  sign: "Never Stop Learning, There's Always a Form You Don't Know",
  avatarUrl: "https://i.pinimg.com/736x/66/66/70/66667074afde63636a82d302cf805f15.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/angelasrsh",
    },
    {
      icon: "mingcute:youtube-line",
      link: "https://www.youtube.com/@angelasrsh",
    },
    {
      icon: "mingcute:spotify-line",
      link: "https://open.spotify.com/user/angelasuresh?si=ab18e199f4434010",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/images/banners/tower.jpg",
    "/images/banners/trailofLights.jpg",
    "/images/banners/angelaiquecomp.JPG",
    "/images/banners/Angelique.jpg",
    "/images/banners/ladyluck1.JPG",
    "/images/banners/newzealand.jpg"
  ],
  // banners: [
  //   "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
  //   "https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
  //   "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
  //   "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
  //   "https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
  //   "https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
  //   "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
  //   "https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
  // ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

