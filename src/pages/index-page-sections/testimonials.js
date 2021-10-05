import React from 'react';

import Img6 from "../../assets/images/testimonials/pp.jpg";
import Img7 from "../../assets/images/testimonials/pepo.jpg";


export default function TestimonialsSection() {
    return <>
    <section id="testimonials" className="testimonials">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,170.7C672,171,768,181,864,197.3C960,213,1056,235,1152,208C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="container">
            <div className="row text-center text-white">
                <h1 className="display-3 fw-bold">Testimonios</h1>
                {/* <hr style="width: 100px; height: 3px;" className="mx-auto" /> */}
                <p className="lead pt-1">Experiencias de nuestros interlocutores</p>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        {/* <!-- testimonials card --> */}
                        <div className="testimonials__card">
                            <p className="lh-lg">
                                <i className="fas fa-quote-left"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi, laborum recusandae molestiae ex enim a facere eum? Officiis praesentium aperiam maxime rem vero possimus dolores exercitationem cupiditate eius ducimus!
                                <i className="fas fa-quote-right"></i>
                                <div className="ratings p-1">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </p>
                        </div>
                        {/* <!-- client picture --> */}
                        <div className="testimonials__picture">
                            <img src={Img6} alt="client-1 picture" className="img-fluid rounded-circle" />
                        </div>
                        {/* <!-- client name & role --> */}
                        <div className="testimonials__name">
                            <h3>Juan Ricci</h3>
                            <p className="fw-light">Paciente</p>
                        </div>
                    </div>

                    <div className="carousel-item active">
                        {/* <!-- testimonials card --> */}
                        <div className="testimonials__card">
                            <p className="lh-lg">
                                <i className="fas fa-quote-left"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi, laborum recusandae molestiae ex enim a facere eum? Officiis praesentium aperiam maxime rem vero possimus dolores exercitationem cupiditate eius ducimus!
                                <i className="fas fa-quote-right"></i>
                                <div className="ratings p-1">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </p>
                        </div>
                        {/* <!-- client picture --> */}
                        <div className="testimonials__picture">
                            <img src={Img7} alt="client-2 picture" className="img-fluid rounded-circle" />
                        </div>
                        {/* <!-- client name & role --> */}
                        <div className="testimonials__name">
                            <h3>Joao Rossi</h3>
                            <p className="fw-light">Otro Paciente</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-light fas fa-long-arrow-alt-left" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"></button>
                    <button className="btn btn-outline-light fas fa-long-arrow-alt-right" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"></button>
                </div>
                </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,90.7C384,75,480,53,576,80C672,107,768,181,864,186.7C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>        
    </section>
    </>
}