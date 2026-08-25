// Consulting offer content for the home page.

export interface ServiceMove {
  step: string;
  title: string;
  blurb: string;
}

// The core service, in four moves.
export const moves: ServiceMove[] = [
  {
    step: '01',
    title: 'Clarify',
    blurb:
      'Cut through the fog: define the real MVP, map the user journeys and personas, and bring a clear point of view to your idea — so the product knows exactly what it is and who it’s for.',
  },
  {
    step: '02',
    title: 'Stabilize',
    blurb:
      'Harden what AI helped you build — authentication, data integrity, security, error handling, performance. The things that quietly break the moment real users show up.',
  },
  {
    step: '03',
    title: 'Polish',
    blurb:
      'Turn a rough prototype into a product people trust: sharpen the user experience, the design, and the details that make it feel finished instead of generated.',
  },
  {
    step: '04',
    title: 'Ship',
    blurb:
      'Deploy it properly — infrastructure, pipelines, monitoring — and hand you something live that you can actually run, support, and grow.',
  },
];

export interface Engagement {
  name: string;
  bestFor: string;
  blurb: string;
  featured?: boolean;
}

// Ways to work together.
export const engagements: Engagement[] = [
  {
    name: 'Production Audit',
    bestFor: 'You want a plan',
    blurb:
      'A focused review of your product, code, and UX — what the MVP really is, where to cut scope, and an honest, prioritized roadmap to launch.',
  },
  {
    name: 'Stabilize & Ship',
    bestFor: 'You want it done',
    blurb:
      'I take your 80–90% build the rest of the way — hands-on engineering and design until it’s live and holding up in production.',
    featured: true,
  },
  {
    name: 'Fractional Product Engineer',
    bestFor: 'You want a partner',
    blurb:
      'Ongoing senior product, design, and engineering help as you grow past launch — a steady hand on the wheel, without a full-time hire.',
  },
];
