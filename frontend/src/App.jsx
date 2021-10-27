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
import LoginModal from './components/login/LoginModal'
import LogoutModal from './components/login/LogoutModal'
import TopNav from './components/navigation/TopNav'
import FirstSearch from './components/pages/search-page/FirstSearch';
import FavoritesPage from './components/pages/favorites-page/FavoritesPage';
import AltFavoritesPage from './components/pages/favorites-page/AltFavoritesPage';

function App() {
  const [searchValues, setSearchValues] = useState('')
  const [results, setResults] = useState(JSON.parse(sessionStorage.getItem('results')))
  const [selectedRecipe, setSelectedRecipe] = useState(sessionStorage.getItem('selectedRecipe'))
  const [prevResults, setPrevResults] = useState(JSON.parse(sessionStorage.getItem('prevResults')))
  const [jsonWebToken, setJWT] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")
  const [showLogout, setShowLogout] = useState(false)

  const appendPrevResults = (results) => {
    //append results to end of prevResults state

    if (prevResults == null || prevResults.length == 0) {
      setPrevResults([results])
    } else {
      setPrevResults(currentState => [...currentState, results])
    }
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
    sessionStorage.setItem('jwt', jsonWebToken)
  }, [results, selectedRecipe, prevResults, jsonWebToken])

  return (
    <div className="App">
      <Router>
        <LoginModal
          jwt={jsonWebToken}
          setJWT={setJWT}
          setEmail={setEmail} 
          show={showModal}
          setShow={setShowModal}
          isLogin={false}/>
        <LogoutModal 
          setJWT={setJWT}
          setEmail={setEmail} 
          setShow={setShowLogout}
          show={showLogout}
        />
        <TopNav
          setPrevResults={setPrevResults}
          setResults={setResults}
          setShowModal={setShowModal}
          setShowLogout={setShowLogout}
          jwt={jsonWebToken}
        />
        <Switch>
          <Route exact path="/" >
            <HomePage
              searchValues={searchValues}
              setSearchValues={setSearchValues}
              results={results}
              setResults={setResults} />
          </Route>
          <Route exact path="/search" >
            <FirstSearch
              searchValues={searchValues}
              setSearchValues={setSearchValues}
              results={results}
              setResults={setResults} />
          </Route>
          <Route path="/searchlist">
            <SearchPage
              searchValues={searchValues}
              setSearchValues={setSearchValues}
              results={results}
              setResults={setResults}
              setSelectedRecipe={setSelectedRecipe}
              appendPrevResults={appendPrevResults}
              removeLastPrevResult={removeLastPrevResult}
              setPrevResults={setPrevResults}
              hasPrevResults={prevResults == null || prevResults.length == 0 ? false : true} />
          </Route>
          <Route path="/recipe">
            {selectedRecipe ? <Recipe
              results={results}
              selectedRecipe={selectedRecipe} /> : "not loaded"}
          </Route>
            <Route path="/favorites">
              {jsonWebToken ? 
                <FavoritesPage /> :
                <AltFavoritesPage />
              }
            </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
