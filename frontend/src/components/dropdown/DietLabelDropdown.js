import React from "react"
import Select from "react-select"


const dietOptions = [
    { value: 'balanced', label: 'Balanced'},
    { value: 'high-fiber', label: 'High fiber'},
    { value: 'high-protein', label: 'High protein'},
    { value: 'low-carb', label: "Low carbs"},
    { value: 'low-fat', label: "Low fat"},
    { value: 'low-sodium', label: 'Low sodium'}
]

function DietLabelDropdown(props) {
    const handleChange = (selectedOptions) => {
        const options = []
        for (const element of selectedOptions) {
            options.push(element.value)
        }
        props.setDietLabel({diet: options})
    }

    return (
        <>
            <Select placeholder={"Diet-labels"} isMulti={true} options={dietOptions} onChange={handleChange} />
        </>
    )
}

export default DietLabelDropdown