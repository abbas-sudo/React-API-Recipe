import React,{useEffect, useState} from 'react'
import Recipe from "./Recipe";

const Query = ()=> {
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
      setSearch('');
    }
  
    return (
      <>
  
      <div className="container-fluid text-center my-5">
      <form className="d-flex my-5" onSubmit={getSearch}>
              <input type="text" className="form-control w-25 searchForm " placeholder="Search Recipes" onChange={updateSearch} />
              <button className="btn btn-primary ">Search</button>
            </form>
        <h1>Searched Content</h1>
        <hr className="w-50 mx-auto"/>
      </div>
  
      <div className="container mx-auto ">
      <div className="row" style={{marginLeft:70}}>
      {recipes.map(recipe => (
              <Recipe 
              key = {recipe.recipe.image}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              title={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              />
            ))}
      </div>
      </div>
      </>
    )
  }
  
  export default Query;