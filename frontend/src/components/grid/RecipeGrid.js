import React from 'react'
import RecipeTile from './RecipeTile'
import './grid-style.css'

function RecipeGrid(props){
    
    const renderGrid = () => {
        if (props.recipeData) {
            return props.recipeData.hits.map((element, index) => { return (
                <RecipeTile 
                key={element.recipe.uri} 
                image={element.recipe.image}
                title={element.recipe.label}
                id={index}
                setSelectedRecipe={props.setSelectedRecipe}
                ></RecipeTile>)
            })
        }
        return ""
    }

    return(
        <div className="flex-container">
        {renderGrid()}
        </div>
    )
}

export default RecipeGrid