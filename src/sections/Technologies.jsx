function Technologies(){
    return(
        <section id="tecnologias" className="py-5">
      <div className="container">
        <h2 className="mb-4">Tecnologías</h2>

        <div className="row">
          {/* Frontend */}
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <ul className="list-unstyled mb-0">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <ul className="list-unstyled mb-0">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Herramientas */}
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Herramientas</h5>
                <ul className="list-unstyled mb-0">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Vercel</li>
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