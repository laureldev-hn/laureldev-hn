import { useState } from 'react'
import { Link } from "react-router-dom";
import iconNavbar from '../../assets/img/icon_navbar.png';
import iconMenu from '../../assets/img/logo_navbar.png';
import { useEffect } from 'react';

export const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 600);
    });
    }, []);

    return (
        <nav className={`navbar navbar-dark fixed-top ${scroll && 'bg-laureldev-blue'}`}>
            <div className="container-fluid">
                <span></span>
                <Link className="navbar-brand text-center link-logo-navbar">
                    <img src={iconNavbar} alt="" />
                </Link>
                <button
                    onClick={() => setShowSidebar(true)}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`offcanvas offcanvas-end text-bg-dark ${showSidebar && 'show'}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <img src={iconMenu} alt="" className="offcanvas-title" id="offcanvasDarkNavbarLabel" />
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setShowSidebar(false)}></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nuestros Clientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nuestras Tecnologias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contactanos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
