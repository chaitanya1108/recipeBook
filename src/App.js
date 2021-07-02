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

  useEffect(() => {
    getRecipes();
  },[]);

  const getRecipes = async()=>{
    const response= await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
    setRecipes(data.hits)
  }

  return (
    <div className="App">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button type="submit">search</Button>
      </Form>
      {recipes.map(recipe=>(
        <Recipe/>
      ))}
    </div>
  );
}

export default App;
