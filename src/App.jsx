import { AboutSection } from "./components/AboutSection";
// import { CustomerSection } from "./components/CustomerSection";
import { ServiceSection } from "./components/ServiceSection";
import TechnologiesSection from "./components/TechnologiesSection";





export const App = () => {

  return (
    <>
      
      <div className="testindexBG">

      </div>
      <section id="home" >

        <div className="container-fluid">

        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div id="titleHomeDiv">
                <div>
                  <h1 id="titleHome">Laurel <span>Dev</span></h1>
                  <p className="pt-3" id="subTitle"><span>Building great software</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center order-first order-md-last">
              <div id="logoHome"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="curved"></section>

      <AboutSection />
      <ServiceSection />
      <TechnologiesSection/>
      {/* <CustomerSection /> */}
      <section className="curved-inverted"></section>
      <footer className="footer-container">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 footer-column">
              <h3>Enlaces</h3>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
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


