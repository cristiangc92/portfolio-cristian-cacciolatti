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
                            Full Stack Web Developer
                        </h2>
                        <p className="lead">
                            Desarrollo aplicaciones web utilizando React, Node.js y bases de
                            datos SQL, con foco en buenas prácticas, claridad de código y
                            experiencia de usuario.
                        </p>

                        <a href="#proyectos" className="btn btn-dark mt-3">
                            Ver proyectos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;