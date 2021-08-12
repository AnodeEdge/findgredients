import logo from './logo.svg';
import './App.css';
import { getRecipes } from './helpers/requestHandlers';
import IngredientSearch from './components/ingredient-search/IngredientSearch';
import Footer from './components/footer/Footer'
import React, { useState } from 'react';

const testParams = { q: "coffee" }

function App() {
  const [searchValues, setSearchValues] = useState('')


  return (
    <div className="App">
      <IngredientSearch
        setSearchValues={setSearchValues}
        searchValues={searchValues}>
      </IngredientSearch>
      {console.log(searchValues)}
      <button onClick={() => console.log(getRecipes({q: searchValues}))}></button>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
