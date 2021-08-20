import React, { useEffect, useState } from "react"
import Image from 'react-bootstrap/Image'

function Recipe(props) {
    const [recipeData, setRecipeData] = useState(props.recipeData)

    useEffect(() => {
        setRecipeData(props.recipeData)
    }, [props])

    const displayIngredients = () => {
        recipeData.recipe.ingredients.map((ingredient) => {
            return (
                <li>
                    {ingredient.text}
                    {console.log(ingredient.text)}
                </li>
            )
        })
    }

    return (
        <div>
            {console.log(props)}
            {recipeData.recipe.label}
            {/* show title */}
            <Image src={recipeData.recipe.image} />
            {/* show image */}
            <ul>{displayIngredients()}</ul>
            {/* show ingredient list */}

            {/* show nutrition */}

            {/* show link to preparation source website */}
        </div>
    )
}

export default Recipe