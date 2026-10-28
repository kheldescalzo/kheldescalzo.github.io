import type { Faq } from './schema'

/** The questions people ask before they write. Pages pick the ones that answer their own objection. */
export const faqs = {
  whatYouBuild: {
    question: 'What do you actually take on?',
    answer:
      'Customer service, scheduling, technical support, and admin for small teams and operators. Typical weeks mix inbox and chat, calendar and bookings, ticket help, and the follow-through that keeps files and SOPs current.',
  },
  startSpeed: {
    question: 'How fast can you start?',
    answer:
      'Start dates and working hours are agreed after we discuss the scope, workload, and your preferred schedule.',
  },
  needStack: {
    question: 'Do I need a specific platform?',
    answer:
      'I work in Gmail, Google Calendar, Slack, Zoom, Notion, Sheets, helpdesks, and common booking tools. If your stack is a poor fit, I say so early and we either adapt the workflow or I point you to a better match.',
  },
  pricing: {
    question: 'How much do you charge?',
    answer:
      'Pricing depends on the scope, tools, and hours involved. Send a short brief so we can discuss an arrangement and agree what is included before work starts.',
  },
  afterWrite: {
    question: 'What happens after I write?',
    answer:
      'We will discuss your requirements, tools, preferred schedule, and next steps. Any work and pricing are agreed before starting.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
