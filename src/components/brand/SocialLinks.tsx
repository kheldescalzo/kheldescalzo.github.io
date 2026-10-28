import { socials } from '@/content/site'
import { SocialIcon } from './SocialIcon'
import './social-links.css'

/** The row of social keys (sidebar header, Contact). One look everywhere; `className` places the row. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`social-keys ${className ?? ''}`} aria-label="Find me on">
      {socials.map((social) => {
        const active = social.href.trim() !== '#' && social.href.trim() !== ''

        return (
          <li key={social.icon}>
            {active ? (
              <a className="social-key" data-icon={social.icon} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label} (opens in a new tab)`} title={social.label}>
                <SocialIcon icon={social.icon} />
              </a>
            ) : (
              <span className="social-key social-key--inactive" data-icon={social.icon} aria-label={`${social.label} link coming soon`} title={`${social.label} link coming soon`}>
                <SocialIcon icon={social.icon} />
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
