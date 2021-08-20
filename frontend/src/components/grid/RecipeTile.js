import React from "react";
import { Card, Button } from "react-bootstrap"

function RecipeTile(props) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            {/* <img src={props.image} /> */}
        </>
    )
}

export default RecipeTile