import type { ClientAccount, Quote, VideoTestimonial } from './schema'
import { employerReviewEvidence } from './review-evidence'

export const proofPage = {
  eyebrow: 'Customer feedback',
  titleThin: 'Helpful support.',
  titleBold: 'In their words.',
  bands: { videos: 'On camera', quotes: 'Property management', clients: 'Client accounts' },
  lede: 'Customer feedback from my property-management work. Reviewer surnames are blurred in the supplied screenshots, and only first names are shown.',
}
export const clientAccounts: ClientAccount[] = []
export const videoTestimonials: VideoTestimonial[] = []
export const communityQuotes: Quote[] = employerReviewEvidence.reviews.map((review) => ({
  name: review.reviewer,
  context: 'Customer feedback · Property management',
  text: review.text,
  image: { src: review.image, alt: review.alt, width: 2170, height: 725 },
}))
