function Technologies() {
  return (
    <section id="tecnologias" className="py-5">
      <div className="container">
        <h2 className="mb-4">Stack Tecnológico</h2>

        <div className="row">

          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <ul className="list-unstyled mb-0">
                  <li>React</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <ul className="list-unstyled mb-0">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>REST APIs</li>
                  <li>Autenticación JWT</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Herramientas & DevOps</h5>
                <ul className="list-unstyled mb-0">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Vercel</li>
                  <li>Render</li>
                  <li>Variables de entorno</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Technologies;