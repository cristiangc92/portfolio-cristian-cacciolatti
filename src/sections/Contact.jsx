function Contact() {
  return (
    <section id="contacto" className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="mb-4">Contacto</h2>

        <p>
          Estoy disponible para oportunidades como Full Stack Developer
          en modalidad remota o híbrida. 
        </p>

        <ul className="list-unstyled">
          <li className="mb-2">
            📧 Email:{' '}
            <a
              href="mailto:cristiangc92@gmail.com"
              className="text-light text-decoration-underline"
            >
              cristiangc92@gmail.com
            </a>
          </li>

          <li className="mb-2">
            💻 GitHub:{' '}
            <a
              href="https://github.com/cristiangc92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-underline"
            >
              github.com/cristiangc92
            </a>
          </li>

          <li>
            🔗 LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/cristiancacciolatti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-underline"
            >
              linkedin.com/in/cristiancacciolatti
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact;