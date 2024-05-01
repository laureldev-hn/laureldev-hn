

const TechnologiesSection = () => {
    return (
        <>
            <section>

                <div className="container text-center">
                    <div className="row row-cols-3">
                        <div className="col-md-12">
                            <h1 id="title">Nuestras Tecnologias</h1>
                        </div>

                        <div className="card col">
                            <h3>Python</h3>
                            <i className="bi bi-arrow-right"/>
                        </div>

                        <div className="card col">
                            <h3>JavaScript</h3>
                            <li>
                            <i className="bi bi-arrow-right"/>
                                <p>Lorem ipsum</p>
                                <p>loae</p>
                            </li>
                        </div>

                        <div className="card col">
                            <h3> C# </h3>
                            <li>
                            <i className="bi bi-arrow-right"/>
                                <p>Lorem, ipsum dolor</p>
                                <p>lore,</p>
                            </li>
                        </div>

                        <div className="card col">
                            <h3>AWS</h3>
                            <li>
                            <i className="bi bi-arrow-right"/>hola
                                <p>Lorem ipsum dolor </p>

                            </li>
                        </div>

                        <div className="card col">
                            <h3>SQL</h3>
                            <li>
                            <i className="bi bi-arrow-right"/>
                                <p>dolor sit</p>
                            </li>
                        </div>

                        <div className="card col">
                            <h3>Docker</h3>
                            <li>
                            <i className="bi bi-arrow-right"/><p>ipsum dolor sit amet</p>
                            <i className="bi bi-arrow-right"/>hols

                            </li>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default TechnologiesSection;