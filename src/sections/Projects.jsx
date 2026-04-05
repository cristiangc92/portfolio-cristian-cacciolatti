function Projects() {
  return (
    <section id="proyectos" className="bg-light py-5">
      <div className="container">
        <h2 className="mb-5 text-center">Proyectos Destacados</h2>

        <div className="row g-4">
          
          {/* ========================= */}
          {/* PERSONAL FINANCE API */}
          {/* ========================= */}
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">
                  💰 Personal Finance API – Backend REST
                </h5>

                <p className="card-text">
                  API REST para gestión de finanzas personales. Permite registrar
                  ingresos y gastos, filtrar por categoría y tipo, y obtener
                  un resumen del balance financiero. Implementa autenticación
                  segura con JWT y arquitectura por capas.
                </p>

                <div className="mb-3">
                  <span className="badge bg-secondary me-2">Node.js</span>
                  <span className="badge bg-secondary me-2">Express</span>
                  <span className="badge bg-secondary me-2">PostgreSQL</span>
                  <span className="badge bg-secondary me-2">JWT</span>
                  <span className="badge bg-secondary">bcryptjs</span>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://github.com/cristiangc92/personal-finance-api"
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

          {/* ========================= */}
          {/* TASKFLOW - PROYECTO PRINCIPAL */}
          {/* ========================= */}
          <div className="col-12">
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title mb-3">
                  📋 TaskFlow – Plataforma Fullstack de Gestión de Tareas
                </h4>

                <p className="card-text">
                  Aplicación web fullstack diseñada para optimizar la gestión de tareas
                  en entornos colaborativos. Implementa autenticación segura,
                  operaciones CRUD completas y arquitectura cliente-servidor desacoplada.
                  Pensada como solución escalable para equipos y profesionales.
                </p>

                {/* Badges tecnologías */}
                <div className="mb-3">
                  <span className="badge bg-dark me-2">React</span>
                  <span className="badge bg-dark me-2">Node.js</span>
                  <span className="badge bg-dark me-2">Express</span>
                  <span className="badge bg-dark me-2">PostgreSQL</span>
                  <span className="badge bg-dark me-2">JWT</span>
                  <span className="badge bg-dark">REST API</span>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://taskflow-frontend-liart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark me-2"
                  >
                    Ver aplicación
                  </a>

                  <a
                    href="https://taskflow-api-pztk.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark me-2"
                  >
                    Ver API
                  </a>

                  <a
                    href="https://github.com/cristiangc92/taskflow-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary me-2"
                  >
                    GitHub Frontend
                  </a>

                  <a
                    href="https://github.com/cristiangc92/taskflow-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary"
                  >
                    GitHub Backend
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* NOVASTORE FRONTEND */}
          {/* ========================= */}
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">
                  🛍️ NovaStore – Frontend E-commerce
                </h5>

                <p className="card-text">
                  Interfaz de tienda online desarrollada en React,
                  enfocada en experiencia de usuario, navegación fluida
                  y consumo eficiente de API REST.
                  Simula un escenario real de comercio digital.
                </p>

                <div className="mb-3">
                  <span className="badge bg-secondary me-2">React</span>
                  <span className="badge bg-secondary me-2">Bootstrap</span>
                  <span className="badge bg-secondary me-2">Axios</span>
                  <span className="badge bg-secondary">Responsive Design</span>
                </div>

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

          {/* ========================= */}
          {/* NOVASTORE API */}
          {/* ========================= */}
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">
                  📝 NovaStore API – Backend REST
                </h5>

                <p className="card-text">
                  API REST diseñada para soportar operaciones de e-commerce.
                  Implementa endpoints CRUD, conexión segura con PostgreSQL
                  y configuración mediante variables de entorno.
                  Arquitectura preparada para integración con múltiples clientes.
                </p>

                <div className="mb-3">
                  <span className="badge bg-secondary me-2">Node.js</span>
                  <span className="badge bg-secondary me-2">Express</span>
                  <span className="badge bg-secondary me-2">PostgreSQL</span>
                  <span className="badge bg-secondary me-2">SSL</span>
                  <span className="badge bg-secondary">REST</span>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://novastore-api.onrender.com/api/products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark me-2"
                  >
                    Ver endpoint
                  </a>

                  <a
                    href="https://github.com/cristiangc92/novastore-backend"
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

        </div>
      </div>
    </section>
  )
}

export default Projects;