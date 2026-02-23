function Hero() {
  return (
    <section id="inicio" className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-12 col-md-8">
            <h1 className="display-5 fw-bold">
              Cristian Gabriel Cacciolatti
            </h1>

            <h2 className="text-muted mb-3">
              Full Stack Developer | React · Node.js · PostgreSQL
            </h2>

            <p className="lead">
              Desarrollo aplicaciones web fullstack con arquitectura
              cliente-servidor, APIs REST y bases de datos relacionales.
              Me enfoco en escribir código mantenible, escalable y preparado
              para entornos de producción.
            </p>

            <div className="mt-3">
              <a href="#proyectos" className="btn btn-dark me-2">
                Ver proyectos
              </a>

              <a
                href="https://www.linkedin.com/in/cristiancacciolatti/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;