import './App.css';
import '../src/sass/style.css';
import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Banner from "./components/Carousel"
import Recipe from "./components/Recipe";
import Categories from "./components/Categories"
import Categories2 from "./components/Categories2"
import Categories3 from "./components/Categories3"
import Footer from "./components/Footer"

const App = ()=> {
  const APP_ID = "f8ffc051";
  const APP_KEY = "629fb9a6692081ba80d2c80bff09f4e3";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState((""));
  const [query, setQuery] = useState((""));
  

  useEffect(()=> {
    getRecipe();
  },[query])

  const getRecipe = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value); 
    console.log(search);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <>
    <Navbar />
    <Banner />

    <div className="container-fluid text-center my-5">
    <form className="d-flex " onSubmit={getSearch}>
            <input type="text" className="form-control w-25" placeholder="Search Recipes" onChange={updateSearch} />
            <button className="btn btn-primary">Search</button>
          </form>
      <h1>Searched Content</h1>
      <hr className="w-50 mx-auto"/>
    </div>

    <div className="container mx-auto ">
    <div className="row" style={{marginLeft:70}}>
    {recipes.map(recipe => (
            <Recipe 
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            title={recipe.recipe.label}
            />
          ))}
    </div>
    </div>

    <Categories />
    <Categories2 />
    <Categories3 />
    <Footer />
    </>
  )
}

export default App;