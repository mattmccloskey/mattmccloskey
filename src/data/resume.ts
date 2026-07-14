// Resume content — mirrors Matt-McCloskey-Resume.pdf.
export const summary =
  'Product development & design leader with 20+ years driving digital products from concept to launch. Expert in UX design, full-stack development, rapid prototyping, and end-to-end strategy. VP-level experience delivering high-impact solutions for defense, healthcare, and critical infrastructure. Founded multiple SaaS products and uses self-hosted AI agentic systems to accelerate research, development, and delivery.';

export const highlights: string[] = [
  'VP Product at Hypergiant delivering AI-powered tools for NORAD / NORTHCOM and critical infrastructure, with documented multi-million-dollar business impact.',
  'VP Design & Product at Rex managing teams of up to 18 and launching 10 startups in 6 months.',
  'Technology / Design Director at Fjord · Accenture serving Lockheed Martin, USPS, Shell, and CalHEERS (12M residents).',
  'Founder of five design-driven SaaS startups.',
  'Serial SaaS founder — the first headless CMS (2,000+ accounts) and an LPC privacy platform.',
];

export interface SkillGroup {
  label: string;
  items: string[];
}
export const skills: SkillGroup[] = [
  {
    label: 'Design & Prototyping',
    items: [
      'Figma (design systems, AI-assisted)',
      'React Storybook',
      'Webflow',
      'Rapid prototyping',
      'User research & testing',
    ],
  },
  {
    label: 'Full-Stack Development',
    items: ['React', 'Node.js', 'MySQL', 'AWS (EC2 & pipelines)', 'Bitbucket', 'Git workflows'],
  },
  {
    label: 'AI & Agentic Systems',
    items: [
      'OpenClaw multi-agent orchestration',
      'Self-hosted AI (Mac Mini / Raspberry Pi)',
      'Prompt-engineering frameworks',
      'Claude · Cursor · Figma AI',
      'Geospatial viz & workflow automation',
    ],
  },
  {
    label: 'Leadership & Strategy',
    items: [
      'Team management (12–18)',
      'Hiring & technical interviewing',
      'Cross-functional product strategy',
      'Startup founding & scaling',
    ],
  },
];

export interface Role {
  role: string;
  org: string;
  period: string;
  blurb?: string;
  bullets: string[];
}

export const experience: Role[] = [
  {
    role: 'Product Consultant',
    org: 'Freelance',
    period: 'Nov 2024 – Present',
    blurb: 'Freelance design and product consultant, working with startups to design, build, and ship product.',
    bullets: [
      'Retail electric provider — design, marketing, and compliance architecture.',
      'AI-powered energy analytics for utilities — Design Director.',
      'Private network intelligence — designed an MVP React Native app leveraging AI to surface intelligent connections between users.',
      'Psychotherapy practice management — designed, architected, and launched a React + Node.js SaaS platform for Texas LPCs; orchestrated self-hosted multi-agent AI workflows (OpenClaw) for research, codebase modernization, and delivery.',
      'Peer-to-peer learning platform — defined the MVP, created the design system, and delivered end-to-end designs.',
    ],
  },
  {
    role: 'VP of Product',
    org: 'Hypergiant',
    period: 'May 2023 – Nov 2024',
    blurb: 'Delivering decision-making software for defense & critical infrastructure.',
    bullets: [
      'Defined and executed product-design strategy to transition DoD capabilities into commercial energy, security, and logistics applications.',
      'Managed an engineering team of 12 to deliver an AI-powered geospatial visualization tool for NORAD / NORTHCOM and critical-infrastructure clients.',
      'Delivered a traffic-simulation tool modeling cross-border shipping and the logistics transition to autonomous freight shuttles with AI controllers.',
      'Developed an AI-powered queryable geospatial module to improve discoverability of complex datasets; acted as hiring manager for technical roles.',
    ],
  },
  {
    role: 'VP of Product Design',
    org: 'Rex',
    period: 'Nov 2021 – Jan 2023',
    blurb: 'Rex is a tech incubator building solutions for the real-estate industry.',
    bullets: [
      'Oversaw design and product strategy for 10 startups, managing a team of 15 designers and establishing scalable design systems and processes.',
      'Partnered with founders to align design impact with business outcomes and brand positioning across real estate, insurance, logistics, and fintech.',
      'Drove user-centered prototyping, testing, and Webflow builds for 10 startup sites and the Rex.com ecosystem.',
    ],
  },
  {
    role: 'Senior Manager / Technology Director',
    org: 'Fjord · Accenture Interactive',
    period: 'Sep 2018 – Nov 2021',
    blurb: 'Global design and innovation consultancy.',
    bullets: [
      'Directed a $6M multi-phase program delivering data-visualization software to analyze unstructured data for F-35 design and maintenance decisions.',
      'Led multi-year development of California’s healthcare enrollment platform, enabling 12M residents to access coverage under the ACA.',
      'Delivered a unified data tool for USPS that accelerated lost-package resolution, and a new data-visualization dashboard for an oil & gas client.',
    ],
  },
  {
    role: 'Senior Web Developer',
    org: 'Chaotic Moon',
    period: 'Oct 2016 – Sep 2018',
    blurb: 'Creative technology studio (acquired by Accenture).',
    bullets: [
      'Led the studio transition from Angular to React as technical architect and performed audits to recover failing client accounts (IBM, Schlumberger, Cisco, State of California).',
    ],
  },
  {
    role: 'Senior Web Developer',
    org: 'Razorfish',
    period: 'Jan 2015 – Sep 2015',
    blurb: 'Interactive agency focused on digital marketing transformation.',
    bullets: [
      'Developed large marketing sites for international brands (SC Johnson, Patrón) with an emphasis on WCAG 2.0 AAA accessibility and internationalization.',
    ],
  },
];

export interface Venture {
  name: string;
  role: string;
  period: string;
  blurb: string;
}
export const ventures: Venture[] = [
  {
    name: 'Sovereign Goods',
    role: 'Founder',
    period: '2024 – Present',
    blurb: 'Bitcoin-inspired apparel brand — a Shopify print-on-demand store with 20+ original designs across shirts, hats, and home goods.',
  },
  {
    name: 'ShrinkNotes',
    role: 'Founder',
    period: '2010 – Present',
    blurb: 'React + Node.js SaaS for private, encrypted psychotherapy notes — actively developed with AI-assisted workflows and therapist outreach.',
  },
  {
    name: 'Shores of Ignorance',
    role: 'Co-Host',
    period: '2018 – Present',
    blurb: 'Weekly podcast on philosophy, religion, and current events. Audio & video engineer — 283 episodes, 300+ hours of content.',
  },
  {
    name: 'Osmek',
    role: 'Founder',
    period: '2006 – 2018',
    blurb: 'The world’s first SaaS headless CMS — designed, architected, and led development to 2,000+ accounts.',
  },
  {
    name: 'Whiteloupe',
    role: 'Founder',
    period: '2010 – 2018',
    blurb: 'Digital portfolios for photographers and designers, built on Osmek’s headless CMS.',
  },
  {
    name: 'Kemso Design',
    role: 'Founder',
    period: '2003 – 2018',
    blurb: 'Interactive design and web-development agency — hundreds of sites and apps across music, tourism, aviation, and hospitality.',
  },
];
