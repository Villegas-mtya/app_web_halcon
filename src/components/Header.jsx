function Header({ links }) {
  return (
    <header className="header container">
      <div className="brand">
        <div className="brand__dot" />
        <span>Halcón Studio</span>
      </div>
      <nav className="header__nav">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <button className="btn btn--secondary" type="button">
        Solicitar demo
      </button>
    </header>
  )
}

export default Header
