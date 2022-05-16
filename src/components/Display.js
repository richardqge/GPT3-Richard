import React from 'react'
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, Button, Nav } from 'react-bootstrap'

//Purpose: re-use this component
class Display extends Component {
    render() {
        const { header, title, text, theLink } = this.props

        return (
            <div>
                <Card>
                    <Card.Header>{header}</Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Nav.Link href={theLink}>
                        <Button variant="success" size="lg">Get Started</Button>
                    </Nav.Link>
                </Card>
            </div>
        )
    }
}

export default Display