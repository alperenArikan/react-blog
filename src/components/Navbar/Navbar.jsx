import React from 'react';
import {Link} from "@reach/router"
const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-info text-primary py-5 d-flex align-items-center">
                <div className="container-md">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <div className="d-flex flex-column p-0">
                            <div className="d-flex justify-content-start border-primary border-bottom border-2">
                                <p className="m-0 logo-top ">ROOM</p>
                            </div>
                            <div className="d-flex justify-content-end  p-0 ">
                                <p className="ps-5 m-0 logo-bottom fw-bold">DESIGN INTERIOR</p>
                            </div>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link to="/" className="nav-link fw-bold">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/compose" className="nav-link fw-bold">Post Something</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>




    );
}

export default Navbar;
