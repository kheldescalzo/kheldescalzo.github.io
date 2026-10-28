import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { X, ArrowUpRight } from '@phosphor-icons/react'
import type { Service } from '@/content/schema'

export function ServiceDetails({ service, onClose }: { service: Service | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    if (service && !dialog?.open) dialog?.showModal()
    if (!service && dialog?.open) dialog.close()
  }, [service])
  return <dialog ref={ref} className="service-detail" aria-labelledby="service-detail-title" data-lenis-prevent onCancel={event => { event.preventDefault(); onClose() }} onClick={event => { if (event.target === event.currentTarget) onClose() }}>
    {service && <div className="service-detail__panel">
      <header><span className="pg-mono">Services / {service.outcome}</span><button type="button" className="service-detail__close" aria-label="Close service details" onClick={onClose} autoFocus><X size={22} /></button></header>
      <h2 id="service-detail-title">{service.title}</h2>
      <p>{service.summary}</p>
      <ul>{service.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
      <h3>Tools I use</h3>
      <div className="service-detail__tools">{service.tools.map(tool => <div className="sv__tool" key={tool.name}><span className="sv__logo"><img src={tool.logo} alt="" width="32" height="32" /></span><span>{tool.name}</span></div>)}</div>
      <Link className="btn-line" to="/contact" onClick={onClose}>Discuss this service <ArrowUpRight size={18} /></Link>
    </div>}
  </dialog>
}
