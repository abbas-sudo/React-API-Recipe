import React from 'react'

const Recipe= ({title,calories,image,ingredients}) => {
    return(
    
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="card my-2" style={{width: '18rem'}}>
        <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {title} </h5>
              <p className="card-text">{calories}</p>
              <ul>
         {ingredients.map(ingredient =>  (
           <li>{ingredient.text}</li>
         ))}
       </ul>
              <a href="#" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add To Favorite</a>

                       </div>
                       </div>

    </div>
    );
}


export default Recipe