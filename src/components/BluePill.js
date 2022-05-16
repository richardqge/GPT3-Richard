
import { configure } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { Component } from 'react'

import { Container, Form, Button, Card } from 'react-bootstrap';

const { Configuration, OpenAIApi } = require("openai");



class BluePill extends Component {
    constructor() {
        super();
        this.state = {

            heading_list: [],
            response_list: [],

        }
    }

    setState(state) {
        //Add: LocalStorage
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);


    }
    componentWillMount() {
        localStorage.getItem('blue_heading_list') && this.setState({
            heading_list: JSON.parse(localStorage.getItem('blue_heading_list')),
            response_list: JSON.parse(localStorage.getItem('blue_response_list')),

        })
    }



    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('blue_heading_list', JSON.stringify(nextState.heading_list));
        localStorage.setItem('blue_response_list', JSON.stringify(nextState.response_list));

    }

    onFormSubmit = e => {



        //Prevent re-rendering
        e.preventDefault()

        //Collect info from FormData
        const formData = new FormData(e.target),

            //Get Object
            formDataObj = Object.fromEntries(formData.entries())

        //Run OpenAI function
        const configuration = new Configuration({

            apiKey: `${process.env.REACT_APP_GPT_API_KEY}`,

        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-curie-001", {
            prompt: 'Prompt: ' + formDataObj.productName,
            temperature: 0.8,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,

        })
            .then((response) => {
                this.setState(prevState => ({

                    heading_list: [...prevState.heading_list, 'Prompt: ' + formDataObj.productName],

                    response_list: [...prevState.response_list, 'Response: ' + response.data.choices[0].text]


                }))

            });

    };

    onTimeSubmit = async (e) => {
        e.preventDefault()
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_GPT_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion("text-davinci-002", {
            prompt: "def foo(n, k):\naccum = 0\nfor i in range(n):\n    for l in range(k):\n        accum += i\nreturn accum\n\"\"\"\nThe time complexity of this function is",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        });

        this.setState(prevState => ({

            heading_list: [...prevState.heading_list, 'Prompt: ' + "def foo(n, k):\naccum = 0\nfor i in range(n):\n    for l in range(k):\n        accum += i\nreturn accum\n\"\"\"\nThe time complexity of this function is"],

            response_list: [...prevState.response_list, 'Response: ' + response.data.choices[0].text]


        }))
    }





    render() {



        let heading = this.state.heading_list.map((head, index) => {

            const response_content = this.state.response_list[index];
            return (
                <Card>
                    <Card.Body>
                        <Card.Title><h4 class="text-secondary">{head}</h4></Card.Title>

                        <Card.Text>

                            <h4 class="text-success">
                                {response_content}
                            </h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })




        return (

            <div>
                <Container>
                    <br />
                    <br />
                    <h1> 🔷 Give our blue pill a try! 🔷</h1>

                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What can text-curie-001 do for you? Features quick preset and save on refresh! </Form.Label>
                            <Form.Control
                                type="text"
                                name="productName"
                                placeholder="Enter your desired query here" />
                            <Form.Text className="text-muted">
                                Feeling Lucky
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" size="lg" type="submit">
                            Proceed
                        </Button>
                    </Form>

                    <br />
                    <h3 class="text-secondary"> (Or try our preset to see what GPT-3 is capable of!)</h3>


                    <Form onSubmit={this.onTimeSubmit} inline>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                        </Form.Group>

                        <Button variant="success" size="lg" type="submit">
                            👨‍💻Validate my Time Complexity Knowledge!👩‍💻
                        </Button>
                    </Form>
                    <br />
                    <h1 class="text-primary">Responses</h1>

                    {heading}

                </Container>
                <br />
                <br />
                <br />
            </div>
        )

    }

}

export default BluePill









