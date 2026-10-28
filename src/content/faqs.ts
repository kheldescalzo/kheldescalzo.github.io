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
      'A defined weekly block can start within a few business days once access and tone-of-voice notes are in. Larger retainers take a short onboarding week. I work GMT+8 and overlap US evenings, European mornings, and Asia-Pacific business hours.',
  },
  needStack: {
    question: 'Do I need a specific platform?',
    answer:
      'I work in Gmail, Google Calendar, Slack, Zoom, Notion, Sheets, helpdesks, and common booking tools. If your stack is a poor fit, I say so early and we either adapt the workflow or I point you to a better match.',
  },
  pricing: {
    question: 'How much do you charge?',
    answer:
      'Most work is a weekly retainer; a defined one-off (inbox catch-up, SOP pack, calendar clean) can be fixed-price. I quote after a short written brief: hours, tools, and what “done” looks like. The quote names what is included before anything starts.',
  },
  afterWrite: {
    question: 'What happens after I write?',
    answer:
      'I reply within one business day with a plan, a few clarifying questions, or a straight no if I am not the right desk. Nothing is billed until we agree the scope in writing.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
