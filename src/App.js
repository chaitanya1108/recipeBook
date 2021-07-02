import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const APP_ID = '1a7e5744';
  const APP_KEY = 'fd6ba6b1d176cee0c7cfe3ea190c55aa';

  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]= useState('');
  const [query, setQuery]= useState('chicken');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
    setRecipes(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  };
  
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <Form inline onSubmit={getSearch}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={updateSearch} />
        <Button type="submit">search</Button>
      </Form>
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
