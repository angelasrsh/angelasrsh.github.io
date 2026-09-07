import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Angela Suresh",
  subTitle: "Electrical & Computer Engineering",
  brandTitle: "Angela Suresh",

  description:
    "Portfolio and writing by Angela Suresh, an Electrical and Computer Engineering student at UT Austin.",

  site: "https://angelasrsh.github.io", // Your website URL, used for sitemap and RSS feed

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_blog,
      href: "/blog",
    },
    {
      nameKey: I18nKeys.nav_bar_projects,
      href: "/projects",
    },
    {
      nameKey: I18nKeys.nav_bar_contact,
      href: "/contact",
    },
  ],

  username: "Angela Suresh",
  heroEyebrow: "MS ECE @ CU Boulder | BS ECE @ UT Austin ",
  sign: "Electrical and Computer Engineering student focused on power electronics and systems design. Hardware, firmware, and creativity",
  avatarUrl: "/images/avatar.png",

  // Optional full-bleed image or video behind the hero. Drop the file under
  // public/ and point src at it, e.g. public/images/hero-bg.jpg -> "/images/hero-bg.jpg".
  // Hero text switches to a light palette automatically once this is set.
  // heroBackground: {
  //   type: "image",
  //   src: "/images/banners/tower.jpg",
  // },
  heroBackground: {
    type: "video",
    src: "https://www.youtube.com/watch?v=cURXU87JRZs&list=RDcURXU87JRZs&start_radio=1",
    poster: "/images/hero-bg-poster.jpg",
  },

  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/angelasrsh",
    },
    {
      icon: "mingcute:youtube-line",
      link: "https://www.youtube.com/@angelasrsh",
    },
  ],

  contact: {
    email: "angelasrsh@gmail.com",
    linkedin: "https://www.linkedin.com/in/angela-suresh/",
  },

  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  // Only used as a fallback cover for entries without one.
  banners: [
    "/images/banners/tower.jpg",
    "/images/banners/trailofLights.jpg",
    "/images/banners/angelaiquecomp.JPG",
    "/images/banners/Angelique.jpg",
    "/images/banners/ladyluck1.JPG",
    "/images/banners/newzealand.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  bannerStyle: "LOOP",
};

export default YukinaConfig;
