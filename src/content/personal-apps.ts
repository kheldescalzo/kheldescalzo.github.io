import type { AppBuild } from './schema'

/** Personal projects developed with AI assistance. Descriptions reflect available
 * builds and prior checks, not public releases or fully verified device behavior.
 * Add screenshots only from the actual app, without personal records or pairing keys.
 */
export const personalApps: AppBuild[] = [
  {
    id: 'jarvis-pc',
    name: 'Jarvis — PC Assistant',
    kind: 'Desktop app',
    tagline: 'A personal assistant for everyday desktop tasks.',
    summary: 'A Windows assistant combining local AI chat, voice controls, editable routines, notes, and calendar integration. A personal project developed with AI assistance and refined through everyday use.',
    status: 'Internal',
  },
  {
    id: 'jarvis-phone',
    name: 'Jarvis — Android Companion',
    kind: 'Mobile app',
    tagline: 'Personal-assistant features on Android.',
    summary: 'An Android companion with a guided calendar-reminder flow that asks for time, date, agenda, and priority before confirmation. Built for personal use; verification of reminder saving on the updated phone build remains pending.',
    status: 'Internal',
  },
  {
    id: 'jarvis-calendar',
    name: 'Jarvis Calendar',
    kind: 'PC & Android app',
    tagline: 'Appointments and reminders across PC and phone.',
    summary: 'A personal calendar with color-coded priorities, reminders, local Wi-Fi synchronization, and an app-update flow. Designed for Windows and Android; reminder timing and sync behavior depend on device setup.',
    status: 'Internal',
  },
  {
    id: 'kantons-clock',
    name: 'Kanton’s Clock',
    kind: 'Mobile app',
    tagline: 'A clock and Pomodoro timer with personal alarm choices.',
    summary: 'An Android clock and Pomodoro project with a Stop alarm control and support for selected phone tones or imported audio. An installable build is available for testing; phone sound-picker and playback checks remain pending.',
    status: 'Internal',
  },
  {
    id: 'familyping',
    name: 'FamilyPing',
    kind: 'Mobile app',
    tagline: 'An owner-enabled trusted-caller location prototype.',
    summary: 'An Android prototype intended to reply by SMS to configured trusted callers with a fresh device location. Includes visible controls and sending-SIM selection. SMS sending was tested; fresh-GPS acquisition remains unresolved.',
    status: 'Internal',
  },
]
