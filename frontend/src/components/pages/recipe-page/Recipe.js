import React, { useEffect, useState } from "react"
import Image from 'react-bootstrap/Image'

function Recipe(props) {
    const Data = props.results.hits[props.selectedRecipe]
    const recipeData = Data.recipe
    // intend on being able to change servings amount later
    const [servings, setServings] = useState(recipeData.yield)

    const displayIngredients = () => {
        return (recipeData.ingredientLines.map((ingredient, index) => {
            return (
                <li key={"ingredient" + index}>
                    {ingredient}
                </li>)
        }))
    }

    const displayNutrition = () => {
        const caloriesPerServing = Math.round(recipeData.calories / recipeData.yield)
        return (
            <>
                <li>
                    {"Calories per serving: " + caloriesPerServing}
                </li>
                <li>
                    {"Servings: " + servings}
                </li>
            </>
        )
    }

    const divideByServings = () => {

    }

    const displayDigest = () => {
        return (recipeData.digest.map((element) => {
            return (
                <li>{element.label + " " + element.total}
                    {element.sub ? element.sub.map((sub) => {
                        return (<li>{sub.label}</li>)
                    }) : null}
                </li>

            )
        }
        ))
    }

    return (
        <div>
            {console.log(recipeData)}
            {recipeData.label}
            {/* show title */}
            <Image src={recipeData.image} />
            {/* show image */}
            {displayIngredients()}
            {/* show ingredient list */}
            {displayNutrition()}
            {/* show nutrition */}
            {displayDigest()}
            {/* show link to preparation source website */}
            <a href={recipeData.url}>Preparation</a>
        </div>
    )
}

export default Recipe