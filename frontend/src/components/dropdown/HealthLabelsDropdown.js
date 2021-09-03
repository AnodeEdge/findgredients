import React from "react";
import Select from "react-select"


const healthOptions = [
    { value: 'vegan', label: 'Vegan'},
    { value: 'vegetarian', label: 'Vegetarian'},
    { value: 'peanut-free', label: 'Peanut free'},
    { value: 'tree-nut-free', label: "Tree nut free"},
    { value: 'alcohol-free', label: "Alcohol free"},
    { value: 'gluten-free', label: 'Gluten free'}
]


function HealthLabelsDropdown(props) {

    const handleChange = (selectedOptions) => {
        const options = []
        for (const element of selectedOptions) {
            options.push(element.value)
        }
        props.setHealthLabels({health: options})
    }

    return (
        <>
            <Select placeholder={"Health-label"} isMulti={true} options={healthOptions} onChange={handleChange} />
        </>
    )
}

export default HealthLabelsDropdown
