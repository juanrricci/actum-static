import * as React from "react";

// Sections
import IntroSection from "./index-page-sections/intro";
import CompaniesSection from "./index-page-sections/companies";
import ServicesSection from "./index-page-sections/services";
import TestimonialsSection from "./index-page-sections/testimonials";
import FaqSection from "./index-page-sections/faq";
import PortfolioSection from "./index-page-sections/portfolio";
import ContactSection from "./index-page-sections/contact";

// Styles
import "../styles/styles.scss";
import "../styles/fontawesome.scss";


// markup
const IndexPage = () => {
  return (
	<>
    <IntroSection />
    <CompaniesSection />
    <ServicesSection />
    <TestimonialsSection />
    <FaqSection />
    <PortfolioSection />
    <ContactSection />
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
