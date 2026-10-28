import type { WorkItem } from './schema'

/** ADD / EDIT PROJECTS HERE. Duplicate one object below, give it a unique id, and save.
 * Images are optional. Put image files in public/images/projects/ and use /images/projects/file.webp.
 * Omit href when a project has no public page. Keep concept projects labeled as samples.
 */
export const projects: WorkItem[] = [
  {
    id: 'make-lead-intake',
    name: 'Lead intake & follow-up',
    kicker: 'Make · Sample automation',
    summary: 'A workflow concept that validates a new enquiry, checks for an existing lead, and routes a follow-up for the right person. Explore the browser demo with sample data.',
    stack: 'Make · Webhook · Google Sheets · Gmail',
    href: '/demos/automation/make-lead-intake.html',
  },
  {
    id: 'zapier-client-onboarding',
    name: 'Client onboarding checklist',
    kicker: 'Zapier · Sample automation',
    summary: 'A workflow concept that turns a ready client record into a welcome email draft and an onboarding task. Explore the ready/not-ready checks in the browser demo.',
    stack: 'Zapier · Google Sheets · Filter · Gmail · Trello',
    href: '/demos/automation/zapier-client-onboarding.html',
  },
]
