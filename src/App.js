import '../src/sass/style.css';
import React from 'react'
import Navbar from "./components/Navbar"
import Banner from "./components/Carousel"
import Query from "./components/Query";
import Contain from "./components/Contain";
import Footer from "./components/Footer"
import { Component } from 'react';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isNotSearching: true
    };
  }

  render(){ 
    let { isNotSearching } = this.state;
    const buttonHit = this.state.isNotSearching ? "Search" : "Home";
    return(
    <>
    <Navbar />
    <Banner />

    {isNotSearching ? <Contain /> : <Query />}
    <button className="compButton" onClick={()=>{
      this.setState({isNotSearching: !this.state.isNotSearching});
    }}>{buttonHit} 
    </button>

    <Footer />
    </>
  );
}
}
export default App;