import React from "react"

function Categories() {
      return ( 
          <div className="py-5 bg-dark text-white" id="trending">
              <div className="container text-center ">
                        <h1>Featured Categories</h1>
                        <hr className="w-50 mx-auto"/>
              </div>

              <div className="container-fluid categories text-center text-white pt-5">
              <div className="row row-cols-1 row-cols-md-4 g-4 h-50">
        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
          <div className="h-100 featured">
            <img src="https://static.toiimg.com/thumb/54673639.cms?imgsize=497063&width=800&height=800" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Chicken Recipes</h5>
              <p className="card-text">This is a short card.</p> 
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
          <div className="h-100 featured">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Home Cuisine</h5>
              <p className="card-text">This is a short card.</p> 
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
          <div className="h-100 featured">
            <img src="https://thewanderlustkitchen.com/wp-content/uploads/2016/07/vegetarian-chinese-dinner-party.jpg" className="card-img-top" alt="..." />
            <div className="card-body" >
              <h5 className="card-title">Chinese Recipes</h5>
              <p className="card-text">This is a short card.</p> 
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
          <div className=" h-100 featured">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spinach-meatballs-broccolini-garlic-bread-1599499991.jpg?crop=0.383xw:0.575xh;0.571xw,0&resize=640:*" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Veg Recipes</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
          <div className=" h-100 featured">
            <img src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps4271_MC163887D03_24_4b.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fruit Recipes</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
      </div>

              </div>
          </div>
          
      )
}
export default Categories 