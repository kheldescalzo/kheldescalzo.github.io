import { ProductivityApps } from './ProductivityApps'
import './work.css'

export function WorkSection() {
  return (
    <section id="work" className="wk wb" aria-labelledby="work-title">
      <header className="wb__head">
        <p className="wk-eyebrow">Selected work</p>
        <h2 id="work-title" className="wk-title">
          <span className="wk-title__thin">My own</span> <span className="wk-title__bold">productivity tools I created</span>
        </h2>
      </header>
      <ProductivityApps />
    </section>
  )
}
