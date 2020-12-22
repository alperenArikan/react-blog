import React from 'react';
import {Link} from "@reach/router"
const Footer = () => {
    return (
        <React.Fragment>
            <footer className="py-5">
                <div className="container-md">
                    <div className="row text-center text-md-start">
                        <div className="col-12 col-md-6 mb-3 ">
                            
                            <Link className="navbar-brand d-flex align-items-center" to="/" >
                                <div className="d-flex flex-column p-0">
                                    <div className="d-flex justify-content-start border-primary border-bottom border-2">
                                        <p className="m-0 logo-top ">ROOM</p>
                                    </div>
                                    <div className="d-flex justify-content-end  p-0 ">
                                        <p className="ps-5 m-0 logo-bottom fw-bold">DESIGN INTERIOR</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 pt-4">
                            <h4>Get in touch</h4>
                            <p className="text-muted">rommdesign@gmail.com</p>
                            <p className="text-muted">+3 777 00 00 </p>
                        </div>
                    </div>
                    <div className="row mt-5 text-center text-md-start ">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start py-3">
                            <span className="me-2"><i className="fab fa-twitter"></i></span>
                            <span  className="me-2"><i className="fab fa-google"></i></span>
                            <span  className="me-2"><i className="fab fa-facebook-f"></i></span>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center py-2">
                            <ul className="list-unstyled d-flex mx-auto mx-md-0 ">
                                <li className="nav-item">
                                <Link to="/" className="nav-link fw-bold text-secondary">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/compose" className="nav-link fw-bold  text-secondary">Post Something</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
