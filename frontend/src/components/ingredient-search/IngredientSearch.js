import React from 'react';

function IngredientSearch(props) {

    const handleInput = (event) => {
        props.setSearchValues(event.target.value)
    }

    return (
        <input type="text"
            id="ingredient-search"
            placeholder="Recipe Search"
            name="ingredient-search" 
            onChange={handleInput}
            value={props.searchValues}>
        </input>
    )
}

export default IngredientSearch