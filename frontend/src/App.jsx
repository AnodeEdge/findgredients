import './App.css';
import Footer from './components/footer/Footer'
import React, { useState } from 'react';
import Recipe from './components/pages/recipe-page/Recipe'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/home-page/HomePage';
import SearchPage from './components/pages/search-page/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import { useEffect } from 'react';


function App() {
  const [searchValues, setSearchValues] = useState('')
  const [results, setResults] = useState(JSON.parse(sessionStorage.getItem('results')))
  const [selectedRecipe, setSelectedRecipe] = useState(sessionStorage.getItem('selectedRecipe'))
  const [prevResults, setPrevResults] = useState(JSON.parse(sessionStorage.getItem('prevResults')))

  const appendPrevResults = (results) => {
    //append results to end of prevResults state

    if (prevResults == null || prevResults.length == 0) {
      setPrevResults([results])
    } else {
      setPrevResults(currentState => [...currentState, results]) }
    }
  

  const removeLastPrevResult = () => {
    //if no prev results, do nothing, else remove last inserted result
    const array = prevResults
    const currentResults = array.pop()
    // console.log("this is the array:" + array)
    // console.log("This is the results=" + JSON.stringify(currentResults))
    setPrevResults(array)
    return currentResults
  }

  useEffect(() => {
  // Used for react state session storage
    sessionStorage.setItem('results', JSON.stringify(results))
    sessionStorage.setItem('selectedRecipe', selectedRecipe)
    sessionStorage.setItem('prevResults', JSON.stringify(prevResults))
  }, [results, selectedRecipe, prevResults])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <HomePage
              searchValues={searchValues}
              setSearchValues={setSearchValues}
              results={results}
              setResults={setResults} />
          </Route>
          <Route path="/search">
            <SearchPage
              searchValues={searchValues}
              setSearchValues={setSearchValues}
              results={results}
              setResults={setResults}
              setSelectedRecipe={setSelectedRecipe} 
              appendPrevResults={appendPrevResults}
              removeLastPrevResult={removeLastPrevResult} 
              setPrevResults={setPrevResults}
              hasPrevResults={prevResults == null || prevResults.length == 0 ? false : true}/>
          </Route>
          <Route path="/recipe">
            { selectedRecipe ? <Recipe 
              results={results}
              selectedRecipe = {selectedRecipe} /> : "not loaded" }
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
