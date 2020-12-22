import React from 'react';

const Jumbotron = () => {
    return (
        <React.Fragment>
            <header className="header d-flex align-items-center mb-5" id="blog-header">
                <div className="container-md py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="header-card p-5 mt-3 mt-5">
                                <h1 className="mb-3 mb-md-4">
                                    Blog
                                </h1>

                                <p className="mb-3 mb-md-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt velit alias aliquam, neque dicta aut inventore consequuntur totam iste!
                                    aliquam, neque dicta aut inventore consequuntur totam iste!
                                </p>

                                <button className="btn btn-outline-primary btn-lg rounded-0">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Jumbotron;
