
import { AboutSection } from "./components/AboutUs/AboutSection";
import { ServiceSection } from "./components/Services/ServiceSection";
import TechnologiesSection from "./components/Technologies/TechnologiesSection";
import { Index } from "./components/index/Index";
import { CustomerSection } from "./components/Customers/CustomerSection"
import Contact from "./components/ContactUs/Contact";



export const App = () => {



  return (
    <>
      {/* <Navbar/> */}
      <Index />
      <AboutSection />
      <ServiceSection />
      <CustomerSection />
      <TechnologiesSection />
      <Contact />
      <footer className="footer-container">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 footer-column">
              <h3>Enlaces</h3>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Nuestras Tecnologias</a></li>
                <li><a href="#">Nuestros Clientes</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
            <div className="col-lg-4 footer-column">
              <h3>Contacto</h3>
              <p>Correo electrónico: info@example.com</p>
              <p>Teléfono: 123-456-7890</p>
            </div>
            <div className="col-lg-4 footer-column">
              <h3>Derechos de autor</h3>
              <p>(c) 2024 Mi Sitio Web. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


