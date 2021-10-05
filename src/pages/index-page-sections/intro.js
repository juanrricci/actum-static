import React from 'react';

import Img1 from "../../assets/images/arts/Innovation _Monochromatic.png";

export default function IntroSection() {
    return <>
    <section id="home" className="intro-section">
        <div className="container">
            <div className="row align-items-center text-white">
                <div className="col-md-6 intros text-start">
                    <h1 className="display-2">
                        <span className="display-2--intro">Acción para el equilibrio consciente</span>
                        <span className="display-2--description lh-base">Mediante el aprendizaje experiencial, 
                                brindamos herramientas que nos conducen, como una brújula, hacia el equilibrio 
                                interno y externo; permitiendo llevar un vida con consciencia plena.</span>
                    </h1>
                    <button type="button" className="rounded-pill btn-rounded">Más información
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </button>
                </div>
                <div className="col-md-6 intros text-end">
                    <div className="video-box">
                        <img src={Img1} alt="video illustration" className="img-fluid" />
                        <a href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
                            <span>
                                    <i className="fas fa-play-circle"></i>
                            </span>
                            <span className="border-animation border-animation--border-1"></span>
                            <span className="border-animation border-animation--border-2"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,90.7C384,75,480,53,576,80C672,107,768,181,864,186.7C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>        
    </section>
    </>
}