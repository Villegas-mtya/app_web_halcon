function TeamSection({ members }) {
  return (
    <section id="testimonios" className="team container">
      <div className="section-head">
        <p className="section-head__eyebrow">Equipo</p>
        <h2>Perfiles expertos para llevar tu idea a producción</h2>
      </div>

      <div className="team__grid">
        {members.map((member) => (
          <article key={member.name} className="team-card">
            <div className={member.colorClass}>{member.name.slice(0, 1)}</div>
            <div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
