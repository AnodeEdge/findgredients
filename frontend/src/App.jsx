import './App.css';
import { getRecipes } from './helpers/requestHandlers';
import IngredientSearch from './components/ingredient-search/IngredientSearch';
import Footer from './components/footer/Footer'
import React, { useState } from 'react';
import RecipeGrid from './components/grid/RecipeGrid';
import Recipe from './components/recipe-page/Recipe'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchValues, setSearchValues] = useState('')
  const [results, setResults] = useState('')

  const handleClick = async () => {
    const result = await getRecipes({q: searchValues})
    console.log(result)
    setResults(result)
  }

  return (
    <div className="App">
      <IngredientSearch
        setSearchValues={setSearchValues}
        searchValues={searchValues}>
      </IngredientSearch>
      <button onClick={handleClick}>Submit</button>
      {/* {JSON.stringify(results.hits)} */}
      <RecipeGrid recipeData={results}></RecipeGrid>
      {results.hits ? <Recipe recipeData={results.hits[0]}></Recipe> : "Not Loaded"}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
