import React, { useState } from "react";
import IngredientSearch from "../../ingredient-search/IngredientSearch";
import { getRecipes } from '../../../helpers/requestHandlers';
import {useHistory} from 'react-router-dom'
import RecipeGrid from "../../grid/RecipeGrid";
import Recipe from "../../pages/recipe-page/Recipe"

function HomePage(props) {

    const history = useHistory()

    const handleClick = async () => {
        const result = await getRecipes({ q: props.searchValues })
        console.log(result)
        props.setResults(result)
        history.push("/search")
    }

    return (
        <>
            <IngredientSearch
                setSearchValues={props.setSearchValues}
                searchValues={props.searchValues} />
            <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default HomePage