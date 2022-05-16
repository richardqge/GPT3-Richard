
import React from 'react'

import { Component } from 'react'
import Display from './Display'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import logo_home from '../shopify-home.png'
import logo_gpt from '../GPT.png'



class Home extends Component {

    render() {

        return (

            <div>

                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo_gpt}
                                alt="Shopify OPT-3 Project" />

                        </Carousel.Item>
                    </Carousel>

                    <br />
                    <h1 class="text-success">My Shopify Front-End Internship Challenge</h1>
                    <br />
                    <h3 >GPT-3 is a powerful AI model created by OpenAI. It can process plain text prompts and produce outputs that are hard to distinguish from human writing. Check out some examples of what it can do! GPT-3 can be accessed through a public API that includes a generous amount of free credits. </h3>
                    <br />

                    <Row>
                        <Col>
                            <Display header="💊Red Pill💊"
                                title="Symbolizing Truth"
                                text="See what the team @OpenAI has been coming up with!"
                                theLink="/red-pill"

                            />

                        </Col>

                        <Col>
                            <Display header="🔷  Blue Pill 🔷"
                                title="Symbolizing Continuity "
                                text="Friendly AI that benefits humanity as a whole."
                                theLink="/blue-pill" />
                        </Col>
                    </Row>


                </Container>

            </div>

        )

    }

}

export default Home