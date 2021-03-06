import React from "react"

function Categories2() {
      return ( 
          <div id="categories">
              <div className="container text-center my-5">
                        <h1>Recipes By Categories</h1>
                        <hr className="w-50 mx-auto"/>
              </div>

              <div className="container categories text-center">
              <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img src="https://static.toiimg.com/thumb/54673639.cms?imgsize=497063&width=800&height=800" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Chicken Recipes</h5>
              <p className="card-text">This is a short card.</p> 
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spinach-meatballs-broccolini-garlic-bread-1599499991.jpg?crop=0.383xw:0.575xh;0.571xw,0&resize=640:*" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Veg Recipes</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps4271_MC163887D03_24_4b.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fruit Recipes</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-drinks-1584113861.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Drinking Recipes</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
      </div>

              </div>
          </div>
          
      )
}
export default Categories2 