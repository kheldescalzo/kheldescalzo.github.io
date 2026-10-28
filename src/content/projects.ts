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
    summary: 'A sample lead-intake design: receive a website enquiry, validate the details, check for duplicates, log the lead in Google Sheets, and route the next action with a Gmail reply draft. Try the browser simulation with sample data.',
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
