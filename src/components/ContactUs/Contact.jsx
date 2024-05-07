import './contact.css'

const Contact = () => {
    return (
        <div id="contact">

            <div className="container px-5 mx-auto">
                <div className="row justify-content-center">
                    <div className="col text-center mb-4">
                        <h1>Contactanos</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="name" className="leading-7">Nombre</label>
                                    <input type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Nombre"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="email" className="leading-7">Correo Electronico</label>
                                    <input type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Correo Electronico"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="message" className="leading-7">Mensaje</label>
                                    <textarea name="message"
                                        id="message"
                                        className="form-control"
                                        rows="5"
                                        placeholder="Escribe tu mensaje"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <button className="btn btn-primary btn-block">
                                    Contactanos
                                </button>
                            </div>
                        </div>
                        <div className="row mt-5 pt-8 border-top border-gray-200 text-center">
                            <div className="col">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Contact;