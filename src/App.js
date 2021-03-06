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

  const [counter, setCounter] = useState(0);

  const [recipes, setRecipes] = useState([]);

  useEffect(()=> {
    getRecipe();
  },[])

  const getRecipe = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  return (
    <>
    <Navbar />
    <Banner />
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