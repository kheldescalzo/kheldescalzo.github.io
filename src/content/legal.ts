import { site } from './site'

export type LegalSection = { heading: string; paragraphs: string[] }

export type LegalDoc = {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

/** What this site actually stores and loads. Keep in sync with src/lib/storage.ts and src/lib/analytics.ts. */
export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'October 18, 2026',
  intro: `This policy covers ${site.url.replace('https://', '')}, the portfolio of ${site.name} trading as ${site.brand}. This page describes how the site actually works; it is not legal advice. Have it reviewed for the country you operate in before you rely on it.`,
  sections: [
    {
      heading: 'What this site collects',
      paragraphs: [
        'The contact form opens your own mail app and addresses a message to Michael. It does not send that message to this site, and this site has no form backend unless one is added later.',
        `If you email ${site.email}, the message lives in that inbox. It is kept as long as the enquiry is active and deleted on request. Write to the same address to ask what is held or to ask for deletion.`,
      ],
    },
    {
      heading: 'What your browser stores',
      paragraphs: [
        'This site stores your theme choice and whether the sidebar is collapsed in localStorage on your device. Nothing else is written there unless analytics is added and you agree to it.',
      ],
    },
    {
      heading: 'Analytics',
      paragraphs: [
        'No analytics provider is wired by default. If analytics is added later, it only loads after you agree, using the consent notice built into the site.',
      ],
    },
    {
      heading: 'Hosting',
      paragraphs: [
        'The site is served by its host. Hosts typically log the IP address, the page requested, and the time. Those logs are controlled by the host, not stored as a mailing list on this site.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        `You can ask what is held about you, or ask for it to be deleted, by writing to ${site.email}. Rights that apply where you live (access, correction, erasure) are honoured on that request.`,
      ],
    },
    {
      heading: 'Changes',
      paragraphs: ['When this policy changes, the date at the top of the page is updated. Continued use of the site after that date is the notice.'],
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: 'Terms of Service',
  updated: 'October 18, 2026',
  intro: `These terms cover your use of this portfolio site, run by ${site.name} trading as ${site.brand}. They are written for how the site works today and are not a substitute for advice in the country you operate in.`,
  sections: [
    {
      heading: 'Using this site',
      paragraphs: [
        'You may browse the portfolio, open the demo pages, and use the contact form to write to Michael. Sample pages, case studies, and demo names are illustrative unless a live client is named.',
      ],
    },
    {
      heading: 'Working together',
      paragraphs: [
        'Nothing on this site is a binding offer of work. Client work starts after a written brief, a quote, and an agreement you both sign or confirm in writing. Emailing the contact form is not a contract.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'The site design, copy, and Michael’s own materials belong to Michael Descalzo trading as Descalzo VA. Third-party logos and client marks are shown to identify tools or anonymised desks and remain their owners’. Client work is shown only in the form agreed with that client.',
      ],
    },
    {
      heading: 'No warranties',
      paragraphs: [
        'The site is provided as is. It does not promise uninterrupted availability or that every sample, date, or demo still matches a live system. Quotes and plans for paid work are given in writing, not by this page alone.',
      ],
    },
    {
      heading: 'External links',
      paragraphs: ['Links to other sites are for convenience. Michael is not responsible for their content, availability, or privacy practices.'],
    },
    {
      heading: 'Governing law',
      paragraphs: ['These terms are governed by the laws of the Philippines, without regard to conflict-of-law rules.'],
    },
    {
      heading: 'Contact',
      paragraphs: [`Questions about these terms: ${site.email}.`],
    },
  ],
}
