import React, { useEffect, useState } from 'react';
import './loading.css'
import logo from '../../assets/img/logoLaureldev.svg'

const Loading = () => {
    const [hide, setHide] = useState(false);

    useEffect(()=> {
        setTimeout(()=>setHide(true), 1000)
    }, [setHide])
    return (
        <div id='loadingContainer' className={`${hide && 'hideLoading'}`}>
            <div className="d-flex justify-content-center align-items-center">
                <img src={logo} alt="" style={{width: '30%', paddingTop: '40vh'}} />
            </div>
        </div>
    );
};

export default Loading;