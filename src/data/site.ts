// Central place for downloadable assets.
// Both PDFs are hosted on Cloudflare R2 (files.mattmccloskey.com) to keep the
// repo lean. Swap the domain/keys here if the bucket or custom domain changes.
// (URLs are percent-encoded because the object keys contain spaces.)
export const downloads = {
  resume: 'https://files.mattmccloskey.com/Matt%20McCloskey%20Resume.pdf',
  portfolio: 'https://files.mattmccloskey.com/Matt%20McCloskey%20Portfolio.pdf',
  portfolioSize: '63 MB',
};

// Booking link for the "book a call" CTAs (Cal.com — swap here if it moves).
// `booking` is the full URL (used as the no-JS fallback href); `bookingPath`
// is the Cal.com slug the embed uses to open the popup.
export const booking = 'https://cal.com/matt-mccloskey/15min';
export const bookingPath = 'matt-mccloskey/15min';
export const bookingNamespace = '15min'; // Cal.com embed namespace (must match Base.astro init)
export const bookingConfig = '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}';
export const email = 'hello@mattmccloskey.com';
