// Personal-brand projects showcased on the home page.
import type { ImageMetadata } from 'astro';
import shrinknotesLogo from '../assets/logos/shrinknotes.svg';
import sovereignLogo from '../assets/logos/sovereign-goods.svg';
import strengthLogo from '../assets/logos/strength-curiosity.svg';
import shoresLogo from '../assets/logos/shores-of-ignorance.svg';
import musicAvatar from '../assets/logos/music-avatar.webp';

export type SocialPlatform = 'instagram' | 'x' | 'github' | 'linkedin';

export interface Social {
  platform: SocialPlatform;
  url: string;
}

export interface Project {
  name: string;
  kicker: string; // short category label
  tagline: string;
  description: string;
  url?: string;
  cta: string;
  accent: string; // brand accent color
  ink: string; // text color that reads on the accent
  status?: 'live' | 'soon';
  socials?: Social[];
  logo?: ImageMetadata;
  logoRound?: boolean; // render the logo as a circular avatar
}

export const projects: Project[] = [
  {
    name: 'ShrinkNotes',
    kicker: 'SaaS · Product',
    tagline: 'Truly simple, truly private.',
    description:
      'End-to-end encrypted practice-management software for psychotherapists. Designed, built, and shipped end-to-end with React + Node.js.',
    url: 'https://myshrinknotes.com',
    cta: 'Visit ShrinkNotes',
    accent: '#7ea339',
    ink: '#1f2a10',
    status: 'live',
    logo: shrinknotesLogo,
  },
  {
    name: 'Sovereign Goods',
    kicker: 'Brand · Commerce',
    tagline: 'There is no 2nd best.',
    description:
      'Bitcoin-inspired apparel brand — 20+ original designs across shirts, hats, and home goods. Brand identity, photography, and storefront, all in-house.',
    url: 'https://sovereigngoods.shop',
    cta: 'Shop the brand',
    accent: '#6b3511',
    ink: '#f6efe6',
    status: 'live',
    logo: sovereignLogo,
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/sovereigngoodsco/' },
      { platform: 'x', url: 'https://x.com/sovereigngood' },
    ],
  },
  {
    name: 'Strength + Curiosity',
    kicker: 'Writing · Substack',
    tagline: 'Essays at the edge of ideas.',
    description:
      'My newsletter on strength, curiosity, and building things — from product and technology to philosophy and the examined life.',
    url: 'https://mattmccloskey.substack.com/',
    cta: 'Read on Substack',
    accent: '#c2703d',
    ink: '#241206',
    status: 'live',
    logo: strengthLogo,
  },
  {
    name: 'Shores of Ignorance',
    kicker: 'Podcast · Co-host',
    tagline: '283 episodes. 300+ hours.',
    description:
      'A weekly conversation on philosophy, religion, and current events. I co-host and handle the audio and video engineering.',
    url: 'https://shoresofignorance.com',
    cta: 'Listen in',
    accent: '#bf432d',
    ink: '#fbeae6',
    status: 'live',
    logo: shoresLogo,
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/shoresofignorance/' },
    ],
  },
  {
    name: 'Music',
    kicker: 'Music · Original',
    tagline: 'Songs, written and recorded.',
    description:
      'Original music I write, play, and record — all gathered in one place to stream.',
    url: 'https://listentomatt.com',
    cta: 'Listen now',
    accent: '#6c4bd8',
    ink: '#f1ecfb',
    status: 'live',
    logo: musicAvatar,
    logoRound: true,
  },
  {
    name: 'Good Morning',
    kicker: 'Poetry · Book',
    tagline: 'A book of poems. Coming soon.',
    description:
      'My debut collection of poetry — currently in the works. Read the introduction to see what it’s about.',
    url: 'https://mattmccloskey.substack.com/p/introducing-good-morning',
    cta: 'Read the intro',
    accent: '#2e3a4b',
    ink: '#eaf1f8',
    status: 'soon',
  },
];
