import React from "react"
// import Recipe from "./Recipe";


function Banner() {
      return ( 
        <div className="banner">
        <div className="hero-text">
          <h1>Your Favorite Food, on the way!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, 
            ante nec hendrerit blandit, neque mauris eleifend odio, nec mollis dolor urna nec neque.</p>
          <form className="d-flex ">
            <input type="text" className="form-control w-50" placeholder="Enter Delivery Address" />
            <button className="btn btn-primary">Search</button>
          </form>
        </div>
          
      </div>
      )
}

export default Banner