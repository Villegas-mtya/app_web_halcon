function HeroSection() {
  return (
    <section className="hero container">
      <div className="hero__content">
        <p className="badge">Diseño web moderno</p>
        <h1>Construimos frontends visualmente sólidos y listos para escalar.</h1>
        <p className="hero__description">
          Implementación fiel de diseño, componentes reutilizables y experiencia responsive para todos los
          dispositivos.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary" type="button">
            Empezar proyecto
          </button>
          <button className="btn btn--ghost" type="button">
            Ver portafolio
          </button>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="stat-card">
          <p>+45%</p>
          <span>Conversión promedio</span>
        </div>
        <div className="bubble bubble--one" />
        <div className="bubble bubble--two" />
      </div>
    </section>
  )
}

export default HeroSection
