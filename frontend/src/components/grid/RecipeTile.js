import React from "react";
import { Card, Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import { isPropertySignature } from "typescript";

function RecipeTile(props) {

    const history = useHistory()

    const handleClick = (evt) => {
        props.setSelectedRecipe(props.id, history.push("/recipe"))
    }

    return (
        <>
            <Card style={{ width: '18rem' }} >
                <div onClick={handleClick}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </div>
            </Card>
            {/* <img src={props.image} /> */}
        </>
    )
}

export default RecipeTile