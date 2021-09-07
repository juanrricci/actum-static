import * as React from "react";
import "../styles/styles.scss";
import ActumBrand from "../images/actum_brand61.png";
import Img1 from "../images/arts/Innovation _Monochromatic.png";
import Img2 from "../images/companies/company-teatro_san_martin.jpg";
import Img3 from "../images/arts/Designer _Two Color.png";
import Img4 from "../images/arts/Online presentation_Monochromatic.png";
import Img5 from "../images/arts/Book Lover_Two Color.png";
import Img6 from "../images/testimonials/pp.jpg";
import Img7 from "../images/testimonials/pepo.jpg";


// markup
const IndexPage = () => {
  return (
	<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top menu shadow">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={ActumBrand} alt="" width="300" className="d-inline-block align-text-top" />
				</a>  
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Inicio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Blog</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Recursos</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<section>
			<div class="container">
				<div class="row align-items-center text-white">
					<div class="col-md-6 intros text-start">
						<h1 class="display-2">
							<span class="display-2--intro">Acción para el equilibrio consciente</span>
							<span class="display-2--description lh-base">Mediante el aprendizaje experiencial, 
									brindamos herramientas que nos conducen, como una brújula, hacia el equilibrio 
									interno y externo; permitiendo llevar un vida con consciencia plena.</span>
						</h1>
						<button type="button" class="rounded-pill btn-rounded">Más información
							<span>
								<i class="fas fa-chevron-right"></i>
							</span>
						</button>
					</div>
					<div class="col-md-6 intros text-end">
						<div class="video-box">
							<img src={Img1} alt="video illustration" class="img-fluid" />
							<a href="#" class="glightbox position-absolute top-50 start-50 translate-middle">
								<span>
										<i class="fas fa-play-circle"></i>
								</span>
								<span class="border-animation border-animation--border-1"></span>
								<span class="border-animation border-animation--border-2"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,90.7C384,75,480,53,576,80C672,107,768,181,864,186.7C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>        
		</section>

		{/* <!-- START THE COMPANIES SECTION --> */}
        <section id="companies" class="companies">
            <div class="container">
                <div class="row text-center">
                    <h4 class="fw-bold lead mb-3">Confían en nosotros</h4>
                    <div class="heading-line mb-5"></div>
                </div>
            </div>
            {/* <!-- START THE COMPANIES CONTENT --> */}
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="companies__logo-box shadow-sm">
                            <img src={Img2} alt="Teatro San Martín" title="Teatro San Martín Logo" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- START THE OUR SERVICES SECTION --> */}
        <section id="services" class="our-services">
            <div class="container">
                <div class="row text-center">
                    <h1 class="display-3 fw-bold">Nuestros servicios</h1>
                    <div class="heading-line mb-5"></div>
                </div>
            </div>

            <div class="container">
                <div class="row pt-2 pb-2 mt-2 mb-3">
                    <div class="col-md-6 border-right">
                        <div class="bg-white p-3">
                            <h2 class="fw-bold text-center">Proporcionamos técnicas enfocadas en lograr un estado mental de equilibrio consciente</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="bg-white p-4 text-start">
                            <p class="fw-light">
                                Consideramos a la práctica del equilibio consciente tanto individual como colectiva como el eje central del aumento del bienestar mental. También trabajamos los fundamentos teóricos que sustentan tales prácticas, desde las bases de la psicología cognitivista, la atención plena y los últimos avances en neurociencias.</p>
                        </div>
                    </div>
                </div>
            </div>    

            <div class="container">
                {/* <!-- CONTENIDO 1 --> */}
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div class="services__content"></div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div class="services__content"></div>
                    </div>
                </div>
                {/* <!-- CONTENIDO 2 --> */}
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div class="services__content"></div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div class="services__content"></div>
                    </div>
                </div>
                {/* <!-- CONTENIDO 3 --> */}
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div class="services__content"></div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div class="services__content"></div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row text-center">
                    <div class="col-md-6 intros text-start">
                        <h1 class="display-3">
                            <div class="icon d-block fas fa-lightbulb"></div>
                            <span class="display-3--intro">Asesoramiento para profesionales</span>
                            <span class="display-3--description lh-base">La vida,el vivir y el buen vivir se implican mutuamente.Podemos desde la evolución de nuestra consciencia transformar dichos pasos en un Buen vivir, cultivado por nuestras acciones.</span>
                        </h1>
                        <button type="button" class="rounded-pill btn-rounded">Más información
                            <span>
                                <i class="fas fa-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                    {/* <!-- START THE CONTENT FOR THE VIDEO --> */}
                    <div class="col-md-6 intros text-end">
                        <div class="video-box">
                            <img src={Img3} alt="video illustration" class="img-fluid" />
                            <a href="#" class="glightbox position-absolute top-50 start-50 translate-middle">
                                <span>
                                    <i class="fas fa-play-circle"></i>
                                </span>
                                <span class="border-animation border-animation--border-1"></span>
                                <span class="border-animation border-animation--border-2"></span>
                            </a>
                        </div>
                    </div>

                    {/* <!-- START THE CONTENT FOR THE VIDEO --> */}
                    <div class="col-md-6 intros text-end">
                        <div class="video-box">
                            <img src={Img4} alt="video illustration" class="img-fluid" />
                            <a href="#" class="glightbox position-absolute top-50 start-50 translate-middle">
                                <span>
                                    <i class="fas fa-play-circle"></i>
                                </span>
                                <span class="border-animation border-animation--border-1"></span>
                                <span class="border-animation border-animation--border-2"></span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 intros text-start">
                        <h1 class="display-3">
                            <div class="icon d-block fas fa-users"></div>
                            <span class="display-3--intro">Espacio Social Virtual</span>
                            <span class="display-3--description lh-base">La instancia fáctica de permanecer en la vida nos interpela a responder adaptativa mente y ese proceso puede destilar hacia una actitud que nos permita acceder a un equilibrio ético.</span>
                        </h1>
                        <button type="button" class="rounded-pill btn-rounded">Más información
                            <span>
                                <i class="fas fa-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                    <div class="col-md-6 intros text-start">
                        <h1 class="display-3">
                            <div class="icon d-block fas fa-book"></div>
                            <h3 class="display-3--intro mt-1">Publicaciones</h3>
                            <span class="display-3--description lh-base">Las herramientas que lo posibilitan pueden aprenderse y nuestra intención como fundación es compartirlas. Desde nosotros mismos hacia los otros existe un puente que elegimos transitar lo conscientemente para que el mundo no sea contra otros sino con otros</span>
                        </h1>
                        <button type="button" class="rounded-pill btn-rounded">Más información
                            <span>
                                <i class="fas fa-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                    {/* <!-- START THE CONTENT FOR THE VIDEO --> */}
                    <div class="col-md-6 intros text-end">
                        <div class="video-box">
                            <img src={Img5} alt="video illustration" class="img-fluid" />
                            <a href="#" class="glightbox position-absolute top-50 start-50 translate-middle">
                                <span>
                                    <i class="fas fa-play-circle"></i>
                                </span>
                                <span class="border-animation border-animation--border-1"></span>
                                <span class="border-animation border-animation--border-2"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- TESTIMONIALS --> */}
        <section id="testimonials" class="testimonials">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,170.7C672,171,768,181,864,197.3C960,213,1056,235,1152,208C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div class="container">
                <div class="row text-center text-white">
                    <h1 class="display-3 fw-bold">Testimonios</h1>
                    {/* <hr style="width: 100px; height: 3px;" class="mx-auto" /> */}
                    <p class="lead pt-1">Experiencias de nuestros interlocutores</p>
                </div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            {/* <!-- testimonials card --> */}
                            <div class="testimonials__card">
                                <p class="lh-lg">
                                    <i class="fas fa-quote-left"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi, laborum recusandae molestiae ex enim a facere eum? Officiis praesentium aperiam maxime rem vero possimus dolores exercitationem cupiditate eius ducimus!
                                    <i class="fas fa-quote-right"></i>
                                    <div class="ratings p-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </p>
                            </div>
                            {/* <!-- client picture --> */}
                            <div class="testimonials__picture">
                                <img src={Img6} alt="client-1 picture" class="img-fluid rounded-circle" />
                            </div>
                            {/* <!-- client name & role --> */}
                            <div class="testimonials__name">
                                <h3>Juan Ricci</h3>
                                <p class="fw-light">Paciente</p>
                            </div>
                        </div>

                        <div class="carousel-item active">
                            {/* <!-- testimonials card --> */}
                            <div class="testimonials__card">
                                <p class="lh-lg">
                                    <i class="fas fa-quote-left"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi, laborum recusandae molestiae ex enim a facere eum? Officiis praesentium aperiam maxime rem vero possimus dolores exercitationem cupiditate eius ducimus!
                                    <i class="fas fa-quote-right"></i>
                                    <div class="ratings p-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </p>
                            </div>
                            {/* <!-- client picture --> */}
                            <div class="testimonials__picture">
                                <img src={Img7} alt="client-2 picture" class="img-fluid rounded-circle" />
                            </div>
                            {/* <!-- client name & role --> */}
                            <div class="testimonials__name">
                                <h3>Joao Rossi</h3>
                                <p class="fw-light">Otro Paciente</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-outline-light fas fa-long-arrow-alt-left" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"></button>
                        <button class="btn btn-outline-light fas fa-long-arrow-alt-right" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"></button>
                    </div>
                  </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,90.7C384,75,480,53,576,80C672,107,768,181,864,186.7C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>        
        </section>

        {/* <!-- FAQ --> */}
        <section id="faq" class="faq">
            <div class="container">
                <div class="row text-center">
                    <h1 class="display-3 fw-bold">Preguntas frecuentes</h1>
                    <div class="heading-line mb-5"></div>
                </div>
            </div>
        </section>

        {/* <!-- PORTFOLIO --> */}
        <section id="Portfolio" class="Portfolio">
            <div class="container">
                <div class="row text-center">
                    <h1 class="display-3 fw-bold">Portfolio</h1>
                    <div class="heading-line mb-5"></div>
                </div>
            </div>
        </section>

        {/* <!-- CONTACTO --> */}
        <section id="Contacto" class="Contacto">
            <div class="container">
                <div class="row text-center">
                    <h1 class="display-3 fw-bold">Contacto</h1>
                    <div class="heading-line mb-5"></div>
                </div>
            </div>
        </section>

        {/* <!-- FOOTER --> */}
        <section id="footer" class="footer"></section>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="assets/vendors/js/glightbox.min.js"></script>
        <script type="text/javascript">
            {/* const lightbox = GLightbox({
                'href': 'https://youtu.be/oWZZrhboq3M',
                'type': 'video',
                'source': 'youtube', //vimeo, youtube or local
                'width': 900,
                'autoPlayVideos': 'true',
            }); */}
        </script>
    </>
  )
}

export default IndexPage
