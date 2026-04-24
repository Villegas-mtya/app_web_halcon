function ContactForm() {
  return (
    <section id="contacto" className="contact container">
      <div className="section-head">
        <p className="section-head__eyebrow">Contacto</p>
        <h2>Cuéntanos sobre tu proyecto</h2>
      </div>

      <form className="contact__form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Nombre
          <input type="text" placeholder="Tu nombre" />
        </label>

        <label>
          Correo
          <input type="email" placeholder="correo@dominio.com" />
        </label>

        <label>
          Mensaje
          <textarea rows="4" placeholder="¿Qué necesitas construir?" />
        </label>

        <button className="btn btn--primary" type="submit">
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}

export default ContactForm
