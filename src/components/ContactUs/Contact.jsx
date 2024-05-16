import './contact.css'
import { useState } from 'react';
import { supabase } from '../../helpers/clientes'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [telphone, setTelphone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await supabase.from('contacts').insert([
                { name, email, message, telphone }])



        } catch (error) {
            console.error('No Funciona')
        }


    }



    return (
        <>
            <section id="contact">
                <div className="container px-5 mx-auto">
                    <div className="row justify-content-center">
                        <div className=" mt-5 col text-center mb-5">
                            <h1 id='h1'>Contactanos</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <div className="input form-floating mb-3">
                                            <input type="email"
                                                id="floatingEmail"
                                                className="form-control"
                                                placeholder="Correo Electronico"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label htmlFor="floatingEmail">CORREO ELECTRONICO</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="input form-floating mb-3">
                                            <input type="text"
                                                id="floatingName"
                                                className="form-control"
                                                placeholder="Nombre"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <label htmlFor="floatingName">NOMBRE</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="input form-floating mb-3">
                                            <input type="tel"
                                                id="floatingPhone"
                                                className="form-control"
                                                placeholder="Telefono"
                                                value={telphone}
                                                onChange={(e) => setTelphone(e.target.value)}
                                            />
                                            <label htmlFor="floatingPhone">TELEFONO</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col">
                                        <div className="input form-floating mb-3">
                                            <textarea name="message"
                                                id="floatingMessage"
                                                className="form-control"
                                                rows="5"
                                                placeholder="Escribe tu mensaje"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                            <label htmlFor="floatingMessage">Mensaje</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 mb-5">
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            CONTACTANOS
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Contact;