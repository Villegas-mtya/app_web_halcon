import FeatureCard from './FeatureCard'

function FeaturesSection({ items }) {
  return (
    <section id="servicios" className="features container">
      <div className="section-head">
        <p className="section-head__eyebrow">Servicios</p>
        <h2>Una base de frontend limpia, didáctica y mantenible</h2>
      </div>
      <div className="features__grid">
        {items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
