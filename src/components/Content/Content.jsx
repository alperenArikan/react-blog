import React from 'react';

const Content = ({children}) => {

    return (
        <React.Fragment>
    <main>
      <div className="container">
        <div className="row">
        {children}

      </div>
        </div>

    </main>
        </React.Fragment>
    );
}

export default Content;
