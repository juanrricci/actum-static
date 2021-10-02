import * as React from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sections
import Intro from "./landing-page-sections/intro";
import Companies from "./landing-page-sections/companies";
import Services from "./landing-page-sections/services";
import Testimonials from "./landing-page-sections/testimonials";
import Faq from "./landing-page-sections/faq";
import Portfolio from "./landing-page-sections/portfolio";
import Contact from "./landing-page-sections/contact";

// Styles
import "../styles/styles.scss";
import "../styles/fontawesome.scss";


// markup
const IndexPage = () => {
  return (
	<>
    <Navbar />

    <Intro />

    <Companies />

    <Services />

    <Testimonials />

    <Faq />

    <Portfolio />

    <Contact />

    <Footer />

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
