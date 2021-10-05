import React from 'react';

import Img3 from "../../assets/images/arts/Designer _Two Color.png";
import Img4 from "../../assets/images/arts/Online presentation_Monochromatic.png";
import Img5 from "../../assets/images/arts/Book Lover_Two Color.png";

export default function ServicesSection() {
    return <>
        <section id="services" className="our-services">
        <div className="container">
            <div className="row text-center">
                <h1 className="display-3 fw-bold">Nuestros servicios</h1>
                <div className="heading-line mb-5"></div>
            </div>
        </div>

        <div className="container">
            <div className="row pt-2 pb-2 mt-2 mb-3">
                <div className="col-md-6 border-right">
                    <div className="bg-white p-3">
                        <h2 className="fw-bold text-center">Proporcionamos técnicas enfocadas en lograr un estado mental de equilibrio consciente</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bg-white p-4 text-start">
                        <p className="fw-light">
                            Consideramos a la práctica del equilibio consciente tanto individual como colectiva como el eje central del aumento del bienestar mental. También trabajamos los fundamentos teóricos que sustentan tales prácticas, desde las bases de la psicología cognitivista, la atención plena y los últimos avances en neurociencias.</p>
                    </div>
                </div>
            </div>
        </div>    

        <div className="container">
            {/* <!-- CONTENIDO 1 --> */}
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content"></div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content"></div>
                </div>
            </div>
            {/* <!-- CONTENIDO 2 --> */}
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content"></div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content"></div>
                </div>
            </div>
            {/* <!-- CONTENIDO 3 --> */}
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content"></div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                    <div className="services__content"></div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 intros text-start">
                    <h1 className="display-3">
                        <div className="icon d-block fas fa-lightbulb"></div>
                        <span className="display-3--intro">Asesoramiento para profesionales</span>
                        <span className="display-3--description lh-base">La vida,el vivir y el buen vivir se implican mutuamente.Podemos desde la evolución de nuestra consciencia transformar dichos pasos en un Buen vivir, cultivado por nuestras acciones.</span>
                    </h1>
                    <button type="button" className="rounded-pill btn-rounded">Más información
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </button>
                </div>
                {/* <!-- START THE CONTENT FOR THE VIDEO --> */}
                <div className="col-md-6 intros text-end">
                    <div className="video-box">
                        <img src={Img3} alt="video illustration" className="img-fluid" />
                        <a href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
                            <span>
                                <i className="fas fa-play-circle"></i>
                            </span>
                            <span className="border-animation border-animation--border-1"></span>
                            <span className="border-animation border-animation--border-2"></span>
                        </a>
                    </div>
                </div>

                {/* <!-- START THE CONTENT FOR THE VIDEO --> */}
                <div className="col-md-6 intros text-end">
                    <div className="video-box">
                        <img src={Img4} alt="video illustration" className="img-fluid" />
                        <a href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
                            <span>
                                <i className="fas fa-play-circle"></i>
                            </span>
                            <span className="border-animation border-animation--border-1"></span>
                            <span className="border-animation border-animation--border-2"></span>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 intros text-start">
                    <h1 className="display-3">
                        <div className="icon d-block fas fa-users"></div>
                        <span className="display-3--intro">Espacio Social Virtual</span>
                        <span className="display-3--description lh-base">La instancia fáctica de permanecer en la vida nos interpela a responder adaptativa mente y ese proceso puede destilar hacia una actitud que nos permita acceder a un equilibrio ético.</span>
                    </h1>
                    <button type="button" className="rounded-pill btn-rounded">Más información
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </button>
                </div>
                <div className="col-md-6 intros text-start">
                    <h1 className="display-3">
                        <div className="icon d-block fas fa-book"></div>
                        <h3 className="display-3--intro mt-1">Publicaciones</h3>
                        <span className="display-3--description lh-base">Las herramientas que lo posibilitan pueden aprenderse y nuestra intención como fundación es compartirlas. Desde nosotros mismos hacia los otros existe un puente que elegimos transitar lo conscientemente para que el mundo no sea contra otros sino con otros</span>
                    </h1>
                    <button type="button" className="rounded-pill btn-rounded">Más información
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </button>
                </div>
                {/* <!-- START THE CONTENT FOR THE VIDEO --> */}
                <div className="col-md-6 intros text-end">
                    <div className="video-box">
                        <img src={Img5} alt="video illustration" className="img-fluid" />
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
    </section>
    </>
}