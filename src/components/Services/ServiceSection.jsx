import './services.css'
import logo from './../../assets/img/bg_Services.jpg'

export const ServiceSection = () => {
    return (
        <section className='section-service'>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 id="title">Servicios</h1>
                    </div>
                    <div className="col-md-6">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, modi voluptates. Tempora nihil repellat voluptatem doloremque aliquam eum natus nemo perspiciatis mollitia saepe, possimus aperiam corporis sit minus itaque veritatis asperiores culpa error laboriosam atque?</p>
                    </div>
                    <div className="col-md-6">
                        <img src={logo} style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}