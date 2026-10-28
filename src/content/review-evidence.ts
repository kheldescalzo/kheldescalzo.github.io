/** Review evidence supplied by the owner for the portfolio walkthrough.
 * Only surname-blurred copies are stored in public/. Do not add full surnames
 * to visible text, image alt text, filenames, or metadata.
 * These are customer reviews from the owner's property-management work, not freelance-client
 * testimonials. Exact dates and the owner's job title remain unconfirmed.
 */
export const employerReviewEvidence = {
  employer: 'Property management',
  relationship: 'Current employer, confirmed by owner',
  source: 'Owner-supplied Google review screenshots; company name and identifying link omitted at owner request',
  evidence: 'Owner-supplied Google review screenshots; live review text not independently verified',
  received: '2026-10-28',
  reviews: [
    {
      reviewer: 'Alias',
      text: 'Kit and Mike were very polite and helpful',
      relativeDateAsShown: 'Edited 3 weeks ago',
      image: '/images/reviews/review-alias-blurred.png',
      alt: 'Customer review mentioning Kit and Mike; reviewer surname blurred',
    },
    {
      reviewer: 'Marcos',
      text: 'Michael was very kind and helped me with my questions',
      relativeDateAsShown: 'a month ago',
      image: '/images/reviews/review-marcos-blurred.png',
      alt: 'Customer review mentioning Michael; reviewer surname blurred',
    },
  ],
}
