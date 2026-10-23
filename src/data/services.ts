// Home-page "how I work" + "how I can help" content.

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

export interface Mode {
  name: string;
  bestFor: string;
  blurb: string;
}

// The ways I plug into a team — employment or engagement.
export const modes: Mode[] = [
  {
    name: 'Lead',
    bestFor: 'Direction & delivery',
    blurb:
      'Product and engineering leadership, full-time or fractional. I set direction, build the team, and own delivery end to end.',
  },
  {
    name: 'Build',
    bestFor: 'Hands-on in the code',
    blurb:
      'Senior IC work: architecture, full-stack, and AI. I design the system and write the code that ships to production.',
  },
  {
    name: 'Advise',
    bestFor: 'A clear path forward',
    blurb:
      'Audits, architecture reviews, and an honest, prioritized roadmap — so your team knows exactly what to build and fix.',
  },
];
