import './about.css'
import imgAbout from './../../assets/img/bg_about.jpg';

export const AboutSection = () => {
  return (
    <section className='section-about'>
      <div className='aboutus-main'>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="sectionTitle">SOBRE NOSOTROS</h1>
          </div>
          <div className="col-md-6">
            <img src={imgAbout} style={{ width: '100%' }} className='.tilt-in-top-1'/>
          </div>
          <div className="col-md-6">
            <p className="stitlesP">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nulla quod, dolorum ipsa qui a
              vero animi magnam veritatis voluptatibus eligendi debitis eos vitae vel suscipit molestias at quis
              laboriosam?
            </p>
            <p className="stitlesP">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero nisi, iste perferendis
              ab facilis amet unde necessitatibus magni ducimus nihil non aperiam, nulla quos? Ad sapiente quos ex saepe
              quod dignissimos laborum, exercitationem cum! Dolores exercitationem optio facere ipsa quam laboriosam, ea
              fugiat vel hic quae voluptate, eius deserunt.</p>
          </div>
        </div>
      </div>
     
    </section>
  );
}