import type { MethodStep } from './schema'

/** Your method: the three jobs your service does for a client, in order. It names the steps of the Home automation diagram. */
export const method = {
  eyebrow: 'The desk method',
  title: 'Intake. Support. Close.',
  summary: 'Every request is captured, worked with a record, and closed so nothing sits in drafts overnight.',
  steps: [
    { name: 'Intake', body: 'Capture the enquiry, ticket, or booking in one place with the context attached.', inputs: ['Inbox', 'Forms', 'Chat', 'Call notes'] },
    { name: 'Support', body: 'Reply, schedule, or unstick the issue, and leave a note the next person can use.', inputs: ['Calendar', 'Helpdesk', 'SOPs'] },
    { name: 'Close', body: 'Confirm the outcome, file the record, and queue the follow-up if one is due.', inputs: ['CRM', 'Reports', 'Handoff'] },
  ] satisfies MethodStep[],
}
