import React from 'react'

const Recipe= ({title,calories,image}) => {
    return(
    
        <div className="col-lg-4 col-sm-3">
        <div className="card" style={{width: '18rem'}}>
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