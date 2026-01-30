function Projects() {
  return (
    <section id="proyectos" className="bg-light py-5">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">💻 NovaWeb - Landing Institucional</h5>
                <p className="card-text">
                  Landing page institucional desarrollada con React y Bootstrap,
                  simulando un encargo real de cliente. Proyecto enfocado en
                  componentización, diseño responsive y buenas prácticas.
                </p>

                <div className="mt-auto">
                  <a
                    href="https://landing-institucional.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark me-2"
                  >
                    Ver demo
                  </a>

                  <a
                    href="https://github.com/cristiangc92/landing-institucional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">🛍️ NovaStore – E-commerce (React)</h5>
                <p className="card-text">
                  Tienda online demo con filtros por categoría y contacto vía WhatsApp.
                  React · Bootstrap · JavaScript
                </p>

                <div className="mt-auto">
                  <a
                    href="https://novastore-kappa.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark me-2"
                  >
                    Ver demo
                  </a>

                  <a
                    href="https://github.com/cristiangc92/novastore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto futuro */}
          <div className="col-12 col-md-6">
            <div className="card h-100 border-secondary">
              <div className="card-body d-flex flex-column justify-content-center text-center text-muted">
                <h5 className="card-title">Proyecto Full Stack</h5>
                <p className="card-text">
                  En desarrollo: aplicación full stack con Node.js, Express y
                  PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;