import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { communityQuotes, proofPage } from '@/content/proof'
import { isoDay, proofJsonLd } from '@/lib/seo'
import './proof.css'

function Reviews() {
  return (
    <div className="pf-ledger">
      {communityQuotes.map((q) => (
        <blockquote key={q.name} className="pf-quote">
          <p>{q.text}</p>
          <footer>
            <cite>{q.name}</cite>
            <span className="pg-mono">{q.context}</span>
            {q.date ? <time className="pg-mono" dateTime={isoDay(q.date)}>{q.date}</time> : null}
          </footer>
          {q.image ? <a href={q.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open review screenshot from ${q.name}`}><img className="pf-review-image" src={q.image.src} alt={q.image.alt} width={q.image.width} height={q.image.height} loading="lazy" /></a> : null}
        </blockquote>
      ))}
    </div>
  )
}
export function ProofPage({ page }: { page: PageRoute }) {
  const c = proofPage
  return <div className="pg pf">
    <PageMeta page={page} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: proofJsonLd({ path: page.path, title: page.title, description: page.description, quotes: communityQuotes, videos: [] }) }} />
    <PageHeader eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
    <Reviews />
  </div>
}
export function ProofSection() {
  const c = proofPage
  return <section id="proof" className="pg pg--section pf" aria-labelledby="proof-title">
    <PageHeader level={2} id="proof-title" eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
    <Reviews />
  </section>
}
