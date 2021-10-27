import React, { useState } from "react"
import IngredientSearch from "../../ingredient-search/IngredientSearch"
import { getRecipes, getNextRecipes, clean } from '../../../helpers/requestHandlers';
import RecipeGrid from "../../grid/RecipeGrid";
import HealthLabelsDropdown from "../../dropdown/HealthLabelsDropdown";
import DietLabelDropdown from "../../dropdown/DietLabelDropdown";

function SearchPage(props) {
  const hasNext = props.results._links.next ? true : false
  const [healthLabels, setHealthLabels] = useState({health: ""})
  const [dietLabel, setDietLabel] = useState({diet: ""})


  const handleSubmit = async () => {
    const queryParams = {
      ...{ q: props.searchValues }, 
      ...healthLabels, 
      ...dietLabel
    }
    // console.log(queryParams)
    const result = await getRecipes(queryParams)
    console.log(result)
    props.setPrevResults(null)
    props.setResults(result)
  }

  const handleNext = async () => {
    const next = await getNextRecipes(props.results._links.next.href)
    // console.log(next)
    props.appendPrevResults(props.results)
    props.setResults(next)
    
  }

  const handlePrev = () => {
    props.setResults(props.removeLastPrevResult())
  }

  return (
    <>
      <IngredientSearch
        setSearchValues={props.setSearchValues}
        searchValues={props.searchValues} />
      <HealthLabelsDropdown setHealthLabels={setHealthLabels}></HealthLabelsDropdown>
      <DietLabelDropdown setDietLabel={setDietLabel}></DietLabelDropdown>
      <button onClick={handleSubmit}>Apply Changes</button>
      <RecipeGrid
        recipeData={props.results}
        setSelectedRecipe={props.setSelectedRecipe} />
      {props.hasPrevResults ? <button onClick={handlePrev}>Prev</button> : null }
      {hasNext ? <button onClick={handleNext}>Next</button> : null}
    </>
  )
}

export default SearchPage

// {props.results.hits ? <Recipe recipeData={props.results.hits[0]} /> : "Not Loaded"}