import React, { Component } from 'react'
import { Container, Row, Col, Input, Button } from 'mdbreact';

export class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }
  render() {
    return (
    <Container>
        <Row>
            <Col md="6" className="mx-auto">
                <form onSubmit="login()">
                    <p className="display-4 h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                        <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                        <Input label="Type your password" icon="lock" group type="password" validate/>
                    </div>
                    <div className="text-center">
                        <Button>Login</Button>
                    </div>
                    <div className="text-center">
                        <Button></Button>
                    </div>
                </form>
            </Col>
        </Row>
    </Container>
    )
  }
}

export default Login
