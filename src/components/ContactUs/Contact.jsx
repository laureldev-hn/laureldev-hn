import './contact.css'
import { useState } from 'react';
import { supabase } from '../../helpers/clientes'


const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [telphone, setTelphone] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email || !message || !telphone) {
                setError('Por favor, completa todos los campos.');
                return;
            }

            setLoading(true);
            await supabase.from('contacts').insert([
                { name, email, message, telphone }
            ]);
            setName('');
            setEmail('');
            setMessage('');
            setTelphone('');
            setError(null);
            setSuccess(true);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.');
            setSuccess(false);

        }
    }

    return (
        <>
            <div id='contact-container'>
                <section>
                    <div className="container px-5 mx-auto" id='contact'>
                        <div className="row justify-content-center">
                            <div className=" mt-5 col text-center mb-3">
                                <h1 className='color-yellow-laureldev'>Contactanos</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <form onSubmit={handleSubmit} autoComplete='off'>
                                    {
                                        error && <div className="alert alert-danger">{error}</div>
                                    }
                                    {
                                        success &&
                                        <div
                                            className="alert alert-success alert-dismissible fade show"
                                            role="alert"
                                        >
                                            ¡Mensaje enviado exitosamente!
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                                onClick={() => setSuccess(false)}
                                            >
                                            </button>
                                        </div>
                                    }
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    id="floatingName"
                                                    className="form-control"
                                                    placeholder="nombre"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                <label htmlFor="floatingName" className='formContactLabels'>Nombre</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-floating mb-3 formDivContInput">
                                                <input type="email"
                                                    id="floatingEmail"
                                                    className="form-control"
                                                    placeholder="Correo"
                                                    value={email}
                                                    autoComplete='off'
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <label htmlFor="floatingEmail" className='formContactLabels'>Correo</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-floating mb-3">
                                                <input type="tel"
                                                    id="floatingPhone"
                                                    className="form-control"
                                                    placeholder="celular"
                                                    value={telphone}
                                                    onChange={(e) => setTelphone(e.target.value)}
                                                />
                                                <label htmlFor="floatingPhone" className='formContactLabels'>Celular</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <textarea
                                                    name="message"
                                                    id="floatingMessage"
                                                    className="form-control"
                                                    placeholder="Mensaje"
                                                    value={message}
                                                    style={{ resize: 'none', height: '100px' }}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                                <label htmlFor="floatingMessage" className='formContactLabels'>Mensaje</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5 mb-5">
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn-contact btn btn-block color-blue-laureldev fw-bold rounded-0">
                                                {
                                                    loading
                                                        ? 'Enviando...'
                                                        : 'Enviar'
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
