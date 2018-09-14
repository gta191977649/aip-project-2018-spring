import React from 'react';

import {Container, Row, Col} from 'mdbreact';

export class Home extends React.Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col md="6" className="mx-auto">
                        <h1 className="display-4 text-center">StoreApp</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home
