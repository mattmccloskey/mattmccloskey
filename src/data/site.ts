// Central place for downloadable assets.
// Both PDFs are hosted on Cloudflare R2 (files.mattmccloskey.com) to keep the
// repo lean. Swap the domain/keys here if the bucket or custom domain changes.
// (URLs are percent-encoded because the object keys contain spaces.)
export const downloads = {
  resume: 'https://files.mattmccloskey.com/Matt%20McCloskey%20Resume.pdf',
  portfolio: 'https://files.mattmccloskey.com/Matt%20McCloskey%20Portfolio.pdf',
  portfolioSize: '63 MB',
};
