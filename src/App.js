import React, { useEffect, useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const APP_ID = '1a7e5744';
  const APP_KEY = 'fd6ba6b1d176cee0c7cfe3ea190c55aa';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter]=useState(0);

  useEffect(() => {
    
  }, [counter]);

  return (
    <div className="App">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button type="submit">search</Button>
      </Form>
    </div>
  );
}

export default App;
