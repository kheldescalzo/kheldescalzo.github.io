import type { ToolMark } from './schema'

const mark = (name: string, file: string, mono?: true): ToolMark => ({ name, logo: `/images/tools/${file}`, mono })

/** Locally stored brand marks. Add a name and SVG here to reuse it across the portfolio. */
export const tools = {
  salesforce: mark('Salesforce', 'salesforce.svg'),
  hubspot: mark('HubSpot', 'hubspot.svg'),
  teams: mark('Microsoft Teams', 'microsoftteams.svg'),
  outlook: mark('Outlook', 'microsoftoutlook.svg'),
  excel: mark('Excel', 'microsoftexcel.svg'),
  make: mark('Make', 'make.svg'),
  zapier: mark('Zapier', 'zapier.svg'),
  n8n: mark('n8n', 'n8n.svg'),
  forms: mark('Google Forms', 'googleforms.svg'),
  airtable: mark('Airtable', 'airtable.svg'),
  docusign: mark('DocuSign', 'docusign.svg'),
  toolA: mark('Gmail', 'gmail.svg'),
  toolB: mark('Zendesk', 'zendesk.svg'),
  toolC: mark('Slack', 'slack.svg'),
  toolD: mark('Google Calendar', 'googlecalendar.svg'),
  toolE: mark('Calendly', 'calendly.svg'),
  toolF: mark('Zoom', 'zoom.svg'),
  toolG: mark('Notion', 'notion.svg'),
  toolH: mark('Google Drive', 'googledrive.svg'),
  toolI: mark('Asana', 'asana.svg'),
  toolJ: mark('Trello', 'trello.svg'),
  toolK: mark('Google Sheets', 'googlesheets.svg'),
  toolL: mark('Docs', 'googledocs.svg'),
} satisfies Record<string, ToolMark>

/** The daily drivers, in the order you want them shown. */
export const dailyTools: ToolMark[] = [
  tools.toolA,
  tools.toolB,
  tools.toolC,
  tools.toolD,
  tools.toolE,
  tools.toolF,
  tools.toolG,
  tools.toolH,
  tools.toolI,
  tools.toolJ,
  tools.toolK,
]
