import React from 'react';

const HelperSection = () => {
    return (
        <React.Fragment>
        <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">
                <h5>Search</h5>
              </div>
              <div className="card-body">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                  <span className="input-group-btn">
                  <button type="button" className="btn btn-primary">Go!</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Categories</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>Item</li>
                      <li>Item</li>
                      <li>Item</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>Item</li>
                      <li>Item</li>
                      <li>Item</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    );
}

export default HelperSection;
