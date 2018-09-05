import React, { Component } from 'react'
import {Container,Row, Col} from 'mdbreact';

export class Home extends Component {
  render() {
    return (
     <Container>
        <Row>
            <Col>
                <h1 className="display-4 h1">StoreApp</h1>
            </Col>
        </Row>
     </Container>
    )
  }
}

export default Home
