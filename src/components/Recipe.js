import React from 'react'

const Recipe= ({title,calories,image}) => {
    return(
    
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="card my-2" style={{width: '18rem'}}>
        <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {title} </h5>
              <p className="card-text">{calories}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
    </div>
    );
}


export default Recipe