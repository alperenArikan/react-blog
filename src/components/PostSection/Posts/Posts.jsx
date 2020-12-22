import React from 'react';
import {Link} from "@reach/router"
const Posts = ({x}) => {
    return (
        <React.Fragment>
                <div  className="card mb-4">
                <img src={x.data().file} className="card-img-top" alt="placeholder" /> 
                <div className="card-body">
                  <h5 className="card-title">{x.data().title}</h5>
                  {/* <p className="card-text">{x.data().body.substr(0,60) + "..."}</p> */}
                  <br/>
                  <Link to={`post/${x.id}`}>
                  <button className="btn btn-outline-primary">
                    Read More...
                  </button>
                  </Link>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                  <small className="text-muted">{x.data().date}</small>
                  <small className="text-muted">{x.data().author}</small>
                </div>
              </div>
        </React.Fragment>
    );
}

export default Posts;
