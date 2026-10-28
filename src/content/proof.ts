import type { ClientAccount, Quote, VideoTestimonial } from './schema'

export const proofPage = {
  eyebrow: 'Proof',
  titleThin: 'Results you',
  titleBold: 'can check.',
  bands: { videos: 'On camera', quotes: 'In the community', clients: 'Client accounts' },
  lede: 'Sample desks and feedback in the kind of work I take on: customer service, scheduling, technical support, and admin. Swap these for named clients and word-for-word quotes when you have them.',
}

/** Client names stay anonymised: the label is shown, the role and the work say what you do for them. */
export const clientAccounts: ClientAccount[] = [
  {
    label: 'Boutique stay',
    role: 'Guest services & inbox',
    work: 'I run guest email and chat, keep the booking calendar honest, and escalate only when a stay needs the owner. First replies go out the same day.',
    tags: ['Customer service', 'Scheduling', 'Hospitality'],
    logo: { src: '/images/clients/64/client-1.webp', alt: 'Boutique stay logo', width: 64, height: 64 },
  },
  {
    label: 'Small practice',
    role: 'Front desk & tickets',
    work: 'I schedule consults, send reminders, and close how-to tickets in the tools the team already uses. Notes land where the next person can find them.',
    tags: ['Scheduling', 'Technical support', 'Admin'],
    logo: { src: '/images/clients/64/client-2.webp', alt: 'Small practice logo', width: 64, height: 64 },
  },
  {
    label: 'Independent operator',
    role: 'Inbox, calendar, admin',
    work: 'I own the weekly admin: files, follow-ups, and the report of what closed. The operator stays with clients; the backlog does not.',
    tags: ['Admin', 'Customer service', 'Problem solving'],
    // No logo: the ledger shows the row number in its place. Add `logo` like the two above to show one.
  },
]

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'client-clip-1',
    src: '/media/clip-1.mp4',
    poster: '/media/clip-1-poster.jpg',
    width: 640,
    height: 360,
    duration: '0:08',
    label: 'Client video 1',
    published: '2026-01-01',
  },
  {
    id: 'client-clip-2',
    src: '/media/clip-2.mp4',
    poster: '/media/clip-2-poster.jpg',
    width: 464,
    height: 832,
    duration: '0:08',
    label: 'Client video 2',
    published: '2026-01-01',
  },
]

/** Written feedback. Only named, dated quotes are used. */
export const communityQuotes: Quote[] = [
  {
    name: 'Alex R.',
    context: 'Owner, boutique stay',
    date: 'Mar 12, 2026',
    text: 'Sample quote until a real one is added: Michael answers guests the way I would — warm, specific, and on time — so I can stay on the floor.',
  },
  {
    name: 'Priya S.',
    context: 'Practice manager',
    date: 'Feb 4, 2026',
    text: 'Sample quote until a real one is added: the calendar is finally honest. Reminders go out, reschedules have a link, and I am not playing dispatcher at 7am.',
  },
  {
    name: 'Jordan K.',
    context: 'Independent consultant',
    date: 'Jan 20, 2026',
    text: 'Sample quote until a real one is added: he cleared the admin I had been dreading and left a report I could actually use on Monday.',
  },
  {
    name: 'Sam T.',
    context: 'Ops lead, small shop',
    date: 'Jan 8, 2026',
    text: 'Sample quote until a real one is added: tickets get a real close-out, not a shrug. If he cannot fix it, he says so and hands it over with context.',
  },
]
