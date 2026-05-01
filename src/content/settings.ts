export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteSettings {
  title: string;
  tagline: string;
  contactEmail?: string;
  socialLinks: SocialLink[];
  footerText?: string;
}

export const settings: SiteSettings = {
  title: "Hightopp Leather",
  tagline: "Hand-built leather hats, bags, goggles, and masks.",
  contactEmail: "contact@hightoppleather.com",
  socialLinks: [
    { platform: "Instagram", url: "https://www.instagram.com/shawnspinsthings" },
  ],
  footerText: "Made one piece at a time, by hand, in the studio.",
};
