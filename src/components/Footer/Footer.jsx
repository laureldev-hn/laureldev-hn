import './footer.css'
import logo from './../../assets/img/logo_blanco.png';
import Contact from '../ContactUs/Contact';


const Footer = () => {
    return (
        <footer className="footer-container">
            <Contact />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 footer-column">
                        <img src={logo} alt="" className='img-fluid mx-auto mb-4' style={{ width: '80px' }} />
                        <h3 className=''>Derechos de autor</h3>
                        <p className=''>Soluciones tecnologicas Laurel. <br />Todos los derechos reservados.</p>
                    </div>
                    <div className="col-lg-4 footer-column">
                        <h3>Enlaces</h3>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Sobre Nosotros</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Quienes Confian en Nosotros</a></li>
                            <li><a href="#">Nuestras Tecnologias</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 footer-column">
                        <h3>Contacto</h3>
                        <p>Correo electrónico: info@example.com</p>
                        <p>Teléfono: 123-456-7890</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;