function FeatureCard({ title, description, icon }) {
  return (
    <article className="feature-card">
      <span className="feature-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
