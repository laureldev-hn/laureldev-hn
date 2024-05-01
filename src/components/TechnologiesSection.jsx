import tecnologies from './../data/tecnologies.json'


const TechnologiesSection = () => {
    const htmlDecode = (input)=> {
        console.log(input);
        var e = document.createElement('div');
        e.innerHTML = input;
        e.classList.add('card-tech-img')
        console.log(e.childNodes);
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <h2 className='h3'>Nuestro stack de tecnologias</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                {
                    tecnologies.map((item, index) => (
                        <div key={`cardTech${index}`} className="col-md-4 mb-3">
                            <div className="card card-custom-style">
                                <div className="card-body">
                                    <div dangerouslySetInnerHTML={{ __html: htmlDecode(item.img_name) }}></div>
                                    <h4 className="card-title text-center">{item.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TechnologiesSection;