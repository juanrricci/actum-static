import React from 'react';
import { Link } from 'gatsby';

import ActumBrand from "../assets/images/actum_brand61.png";

export default function Navbar() {
    return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top menu shadow">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={ActumBrand} alt="" width="300" className="d-inline-block align-text-top" />
            </Link>  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/essays">Ensayos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/conversations">Conversatorios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Acceder</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
}