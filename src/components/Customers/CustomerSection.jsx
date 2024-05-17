import { useState } from 'react';
import './customer.css'


export const CustomerSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        'src/assets/img/slider1.jpg',
        'src/assets/img/slider2.jpg',
        'src/assets/img/slider3.jpg',
    ];

    const handlePrevClick = () => {
        setActiveIndex ((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex -1));
    };

    const handleNextClick = () => {
        setActiveIndex ((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };



    return (
        <>
            <section>
                <div className="container ">
                    <h1 id="title">Quienes Confian en Nosotros</h1>
                </div>
                <div className="container mt-5 overflow-hidden text-center">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            {images.map((image, index)=> (
                                <div key={index} className={`carousel-item ${index === activeIndex ? 'active': ''}`}> 
                                <img src={image} className=" d-block w-100" alt={`Slide ${index + 1 }`} />
                                </div>
                            ))}
                            {/* <div className="carousel-item active">
                                <img src="/src/assets/img/slider1.jpg" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="/src/assets/img/slider2.jpg" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="/src/assets/img/slider3.jpg" className="d-block w-100" />
                            </div> */}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                            onClick={handlePrevClick}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                            onClick={handleNextClick}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

        </>

    );
}

