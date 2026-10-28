import { method } from './method'

/**
 * The live automation diagram on Home: a client's
 * journey through a booking pipeline, drawn stage by stage as the page scrolls (enquiry -> booking ->
 * reminders -> intro call -> outcomes). Replace the stage names and lines with your own journey.
 *
 * Coordinates are in the diagram's own 1200 x 600 units: the main path is the top row, the call's
 * outcomes the bottom row. `plane` is who moves it: `lead` = the lead / you, `auto` = the system sends
 * it. `step` is the method step (0, 1 or 2: the three steps in method.ts). Nodes are listed in build order.
 */
export type FlowPlane = 'lead' | 'auto'
export type FlowIcon = 'form' | 'email' | 'booked' | 'reminder' | 'alarm' | 'call' | 'proposal' | 'won' | 'later' | 'nurture' | 'lost'

export type FlowNode = {
  id: string
  title: string
  tag: string
  plane: FlowPlane
  icon: FlowIcon
  x: number
  y: number
  w: number
  h: number
  step: number
  /** One line for the inspector. */
  about: string
}

/** `solid` links are the lead path (arrows a packet runs); `dashed` links reroute it: a reschedule loops back, the call branches out. */
export type FlowLink = { from: string; to: string; style: 'solid' | 'dashed'; label?: string }

const ROWS = [64, 376]
const box = (col: number, row: number) => ({ x: 24 + col * 200, y: ROWS[row]!, w: 156, h: 136 })


export const liveAutomation = {
  eyebrow: 'Sample automation flow',
  titleThin: 'Intake. Support.',
  titleBold: 'Close.',
  steps: method.steps.map((step) => ({ name: step.name, body: step.body })),
  panel: { lead: 'Lead to', rest: 'Covered Desk' },
  legend: { auto: 'Automation', lead: 'Lead path' },
  zones: { booking: 'Calendar', pipeline: 'Desk' },
  connected: 'Workflow concept',
  hint: { hover: 'Hover a stage to inspect', tap: 'Tap a stage to inspect' },
  nodes: [
    { id: 'form', title: 'New Enquiry', tag: 'New lead trigger', plane: 'lead', icon: 'form', ...box(0, 0), step: 0, about: 'A founder writes from the site or forwards the inbox that is eating the week.' },
    { id: 'email', title: 'Welcome Email', tag: 'Send booking link', plane: 'auto', icon: 'email', ...box(1, 0), step: 1, about: 'An automatic note confirms receipt and offers a 20-minute intro slot.' },
    { id: 'booked', title: 'Call Booked', tag: 'Slot confirmed', plane: 'lead', icon: 'booked', ...box(2, 0), step: 1, about: 'They pick a time on the calendar; the slot lands on both sides with a prep prompt.' },
    { id: 'day', title: 'Reminder One', tag: 'Pre-call message', plane: 'auto', icon: 'reminder', ...box(3, 0), step: 1, about: 'A day-before reminder with the agenda and what to have open.' },
    { id: 'hour', title: 'Reminder Two', tag: 'Pre-call message', plane: 'auto', icon: 'alarm', ...box(4, 0), step: 1, about: 'A last-hour nudge with the join link and a one-click reschedule.' },
    { id: 'call', title: 'Intro Call', tag: 'Qualify the lead', plane: 'lead', icon: 'call', ...box(5, 0), step: 2, about: 'We map inbox, calendar, tickets, and admin, and decide if the desk is a fit.' },
    { id: 'proposal', title: 'Quote Sent', tag: 'Scope + price', plane: 'lead', icon: 'proposal', ...box(0, 1), step: 2, about: 'A ready client gets hours, tools, what done looks like, and the weekly price.' },
    { id: 'later', title: 'Maybe / Later', tag: 'Not ready yet', plane: 'lead', icon: 'later', ...box(3, 1), step: 2, about: 'If they are not ready, the notes stay filed and a light follow-up is queued.' },
    { id: 'lost', title: 'Not a Fit', tag: 'Closed out', plane: 'lead', icon: 'lost', ...box(5, 1), step: 2, about: 'A no is closed with a short reason and, when useful, a pointer to a better match.' },
    { id: 'won', title: 'Signed', tag: 'Deal closed', plane: 'lead', icon: 'won', ...box(1, 1), step: 2, about: 'A yes starts onboarding: access list, tone of voice, and week-one SOP.' },
    { id: 'nurture', title: 'Stay in Touch', tag: 'Long-term drip', plane: 'auto', icon: 'nurture', ...box(4, 1), step: 2, about: 'Occasional check-ins so a “not now” can become a start date without a cold restart.' },
  ] satisfies FlowNode[],
  links: [
    { from: 'form', to: 'email', style: 'solid' },
    { from: 'email', to: 'booked', style: 'solid' },
    { from: 'booked', to: 'day', style: 'solid' },
    { from: 'day', to: 'hour', style: 'solid' },
    { from: 'hour', to: 'call', style: 'solid' },
    { from: 'hour', to: 'booked', style: 'dashed', label: 'Booking rescheduled' },
    { from: 'call', to: 'proposal', style: 'dashed' },
    { from: 'call', to: 'later', style: 'dashed' },
    { from: 'call', to: 'lost', style: 'dashed' },
    { from: 'proposal', to: 'won', style: 'solid' },
    { from: 'later', to: 'nurture', style: 'solid' },
  ] satisfies FlowLink[],
}
