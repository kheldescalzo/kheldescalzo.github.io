import type { Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Support, scheduling, tech help, and admin — stacked as you need them.',
  lede: 'Hire one lane or combine a few: customer service, scheduling, technical support, and admin tasks sit on the same desk.',
}

/**
 * The Home Services section: a stack of cards dealt onto a pile as the page scrolls. The display line
 * is the thin + bold pair below.
 */
export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'Pick one',
  titleBold: 'or stack a few.',
  explore: 'Discuss this service',
  /** The Work chapter each card opens, by service id (a chapter id from home.ts). */
  work: { 'service-1': 'featured', 'service-2': 'featured', 'service-3': 'apps', 'service-4': 'featured', 'service-5': 'side-projects' } as Record<string, string>,
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Customer Service',
    summary: 'Customer support through phone, email, and live chat, including benefits advocacy, claims and billing questions, sales inquiries, and issue resolution.',
    outcome: 'Replies handled',
    bullets: ['Benefits coverage, eligibility, enrollment, and provider guidance', 'Claims inquiries, billing questions, refunds, complaints, and escalations', 'Sales follow-ups, appointment changes, and technical troubleshooting'],
    tools: [tools.toolA, tools.toolB, tools.toolC],
  },
  {
    id: 'service-2',
    title: 'Scheduling',
    summary: 'Calendar and appointment management, including bookings, changes, meeting reminders, time-zone coordination, and travel arrangements.',
    outcome: 'Calendar clean',
    bullets: ['Appointment booking, rescheduling, cancellations, and conflict resolution', 'Meeting invitations, reminders, and time-zone coordination', 'Travel arrangements and accommodation bookings'],
    tools: [tools.toolD, tools.toolE, tools.toolF],
  },
  {
    id: 'service-3',
    title: 'Technical Support',
    summary: 'Help people get unstuck: logins, tools, how-tos, and tickets closed with a record.',
    outcome: 'Tickets closed',
    bullets: ['How-to and access help', 'Ticket notes that stick', 'Handoff when it is a bug'],
    tools: [tools.toolG, tools.toolH, tools.toolI],
  },
  {
    id: 'service-4',
    title: 'Admin Tasks',
    summary: 'Administrative support across employer work, freelance clients, and personal projects, from organized records and reports to onboarding and process documentation.',
    outcome: 'Admin current',
    bullets: ['Inbox follow-ups, data entry, CRM updates, trackers, and reports', 'Documents, files, meeting notes, action items, and SOPs', 'Client onboarding, invoices, payment tracking, and expense records'],
    tools: [tools.toolJ, tools.toolK, tools.toolL],
  },
  {
    id: 'service-5',
    title: 'Automation',
    summary: 'Workflow automation for lead capture, onboarding, reminders, reporting, and repetitive admin tasks.',
    outcome: 'Workflows connected',
    bullets: ['Forms, CRM updates, lead routing, and data syncing', 'Email follow-ups, appointment reminders, and onboarding tasks', 'Reports, documents, AI-assisted processing, and browser automation'],
    tools: [tools.toolA, tools.toolF, tools.toolK],
  },
]
