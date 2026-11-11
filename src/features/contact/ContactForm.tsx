import { useId, useRef, useState, type FormEvent } from 'react'
import { CheckCircle, PaperPlaneTilt } from '@phosphor-icons/react'
import { contactForm as f } from '@/content/contact'
import { isCompleteMessage, missingFields, type ContactMessage } from '@/lib/mail'

const EMPTY: ContactMessage = { firstName: '', lastName: '', email: '', message: '' }
const endpoint = 'https://formspree.io/f/xoedqwgr'

export function ContactForm({ nested = false }: { nested?: boolean }) {
  const Done = nested ? 'h4' : 'h3'
  const emailHint = useId()
  const [message, setMessage] = useState(EMPTY)
  const [emailValid, setEmailValid] = useState(true)
  const [status, setStatus] = useState<'idle' | 'sending' | 'error' | 'sent'>('idle')
  const inFlight = useRef(false)
  const ready = emailValid && isCompleteMessage(message)
  const busy = status === 'sending'

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!ready || inFlight.current || !event.currentTarget.reportValidity()) return
    inFlight.current = true
    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: message.firstName.trim(),
          lastName: message.lastName.trim(),
          email: message.email.trim(),
          message: message.message.trim(),
        }),
      })
      if (!response.ok) throw new Error('Form submission failed')
      setMessage(EMPTY)
      setStatus('sent')
    } catch {
      setStatus('error')
    } finally {
      inFlight.current = false
    }
  }

  const field = (name: keyof ContactMessage) => ({
    name,
    value: message[name],
    required: true,
    readOnly: busy,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value, validity } = event.currentTarget
      if (name === 'email') setEmailValid(validity.valid)
      setMessage((previous) => ({ ...previous, [name]: value }))
    },
  })

  if (status === 'sent') {
    return (
      <div className="ct-done" role="status">
        <CheckCircle size={30} weight="fill" aria-hidden />
        <Done tabIndex={-1} ref={(heading) => { heading?.focus() }}>{f.sentTitle}</Done>
        <div className="ct-done__actions">
          <button type="button" className="pg-btn" onClick={() => setStatus('idle')}>
            {f.again}
          </button>
        </div>
      </div>
    )
  }

  const invalidEmail = Boolean(message.email) && (!emailValid || missingFields(message).includes('email'))

  return (
    <form className="ct-form" onSubmit={onSubmit} aria-busy={busy}>
      <div className="ct-row2">
        <label className="ct-field">
          <span>{f.first}</span>
          <input type="text" {...field('firstName')} autoComplete="given-name" maxLength={80} placeholder={f.phFirst} />
        </label>
        <label className="ct-field">
          <span>{f.last}</span>
          <input type="text" {...field('lastName')} autoComplete="family-name" maxLength={80} placeholder={f.phLast} />
        </label>
      </div>
      <label className="ct-field">
        <span>{f.email}</span>
        <input type="email" {...field('email')} autoComplete="email" maxLength={254} placeholder={f.phEmail}
          aria-invalid={invalidEmail || undefined} aria-describedby={invalidEmail ? emailHint : undefined} />
        {invalidEmail && <span id={emailHint} className="ct-err">{f.invalidEmail}</span>}
      </label>
      <label className="ct-field">
        <span>{f.message}</span>
        <textarea {...field('message')} maxLength={1500} placeholder={f.phMessage} />
      </label>
      <div className="ct-actions">
        <button type="submit" className="ct-send" disabled={!ready || busy}>
          <PaperPlaneTilt size={16} weight="fill" aria-hidden />
          {busy ? f.sending : f.send}
        </button>
        {status === 'error' && <span className="ct-err" role="alert">{f.error}</span>}
        {status !== 'error' && <span className="ct-hint">{f.hint}</span>}
      </div>
    </form>
  )
}
