const apps = [
  { slug: 'jarvis-desktop-assistant-three', name: 'Jarvis Desktop', platform: 'Windows', description: 'A personal desktop assistant for questions, voice commands, and everyday shortcuts.', features: ['Chat using a local model', 'Dictate messages and hear replies', 'Launch apps and attach screenshots'] },
  { slug: 'jarvis-phone-three', name: 'Jarvis Phone', platform: 'Android', description: 'A mobile companion that brings Jarvis chat and voice controls to your phone.', features: ['Chat and attach documents', 'Use voice input and spoken replies', 'Pair with Jarvis on your PC'] },
  { slug: 'kanton-king-notes', name: 'Kanton King Notes', platform: 'Windows', description: 'An offline Markdown workspace for notes, projects, and reference material.', features: ['Write and preview Markdown', 'Organize notes into Places and folders', 'Export notes and local backups'] },
  { slug: 'jarvis-alarm-clock', name: 'Jarvis Alarm Clock', platform: 'Windows', description: 'A desktop alarm clock with scheduled alerts and a custom Jarvis voice.', features: ['Schedule one-time and recurring alarms', 'Use custom spoken alerts', 'Keep alarms running from the system tray'] },
  { slug: 'jarvis-calendar-khel7', name: 'Jarvis Calendar', platform: 'PC & phone', description: 'A calendar for appointments, reminders, and keeping your schedule in sync.', features: ['View and organize events', 'Set appointment reminders', 'Sync PC and phone on your local network'], path: '/index.html' },
  { slug: 'simple-ledger-android', name: 'Simple Ledger', platform: 'Android', description: 'A personal ledger for recording income and expenses and checking your balance.', features: ['Add income and expenses quickly', 'See totals and recent activity', 'Organize entries by category'] },
]

export function ProductivityApps() {
  return (
    <ul className="productivity-apps">
      {apps.map(({ slug, name, platform, description, features, path = '/' }) => (
        <li key={slug}>
          <article className="productivity-app">
            <iframe
              title={name + ' interface preview'}
              src={import.meta.env.BASE_URL + 'app-previews/' + slug + '.html'}
              loading="lazy"
              sandbox=""
              tabIndex={-1}
            />
            <div className="productivity-app__details">
              <p className="wk-count">{platform}</p>
              <h3>{name}</h3>
              <p>{description}</p>
              <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a href={'https://' + slug + '.vercel.app' + path}>Explore {name} <span aria-hidden>↗</span></a>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
