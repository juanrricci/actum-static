import React from 'react';

import Img2 from "../../assets/images/companies/company-teatro_san_martin.jpg";

export default function CompaniesSection() {
    return <>
    <section id="companies" className="companies">
        <div className="container">
            <div className="row text-center">
                <h4 className="fw-bold lead mb-3">Confían en nosotros</h4>
                <div className="heading-line mb-5"></div>
            </div>
        </div>
        {/* <!-- START THE COMPANIES CONTENT --> */}
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="companies__logo-box shadow-sm">
                        <img src={Img2} alt="Teatro San Martín" title="Teatro San Martín Logo" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}