import type I18nKeys from "../locales/keys";

interface Configuration {
  title: string;
  subTitle: string;
  brandTitle: string;

  description: string;

  site: string;

  locale: "en" | "zh-CN";

  navigators: { nameKey: I18nKeys; href: string }[];

  username: string;
  sign: string;
  avatarUrl: string;
  /** Small uppercase label above your name on the home page. */
  heroEyebrow: string;
  /**
   * Optional full-bleed image or video behind the hero. Must live under
   * public/ (e.g. "/images/hero-bg.jpg" or "/videos/hero-bg.mp4"). When set,
   * hero text automatically switches to a light palette with a scrim overlay.
   */
  heroBackground?: {
    type: "image" | "video";
    src: string;
    /** Video only: shown before playback starts / while it loads. */
    poster?: string;
  };

  socialLinks: { icon: string; link: string }[];

  /** Rendered on /contact. */
  contact: {
    email: string;
    linkedin: string;
  };

  maxSidebarCategoryChip: number;
  maxSidebarTagChip: number;
  maxFooterCategoryChip: number;
  maxFooterTagChip: number;

  banners: string[];

  slugMode: "HASH" | "RAW";

  license: {
    name: string;
    url: string;
  };

  bannerStyle: "LOOP";
}

export type { Configuration };
