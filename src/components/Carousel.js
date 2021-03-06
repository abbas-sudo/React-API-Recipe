import React from "react"


function Banner() {
      return ( 
        <div className="banner">
        <div className="hero-text">
          <h1>Your Favorite Food, on the way!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, 
            ante nec hendrerit blandit, neque mauris eleifend odio, nec mollis dolor urna nec neque.</p>
          <form classname="d-flex ">
            <input type="text" classname="form-control w-50" placeholder="Enter Delivery Address" />
            <button classname="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      )
}

export default Banner