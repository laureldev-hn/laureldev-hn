import React from 'react'
import './index.css'
import { Navbar } from './Navbar'

export const Index = () => {
    return (
        <div id="indexContainer">
            <Navbar/>
            <section id='index'>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-6">
                            <div id="divIndexTitle">
                                <div>
                                    <h1 id="indexTitle">Laurel <span>Dev</span></h1>
                                    <p className="pt-3" id="indexSubTitle"><span>Building great software</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center order-first order-md-last">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
