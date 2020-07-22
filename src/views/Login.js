import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import {login} from '../redux/actions/user.actions'

class Login extends Component {
    state = { 
        username:'',
        password:''
     }

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() { 
        return ( 
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="FormUser">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" onChange={this.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group controlId="FormPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" name="password" onChange={this.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group controlId="FormSubmit">
                        <Form.Control type="submit" name="submit" className="btn btn-primary" value="Login"/>
                </Form.Group>
            </Form>
         );
    }
}

const mapDispatchToProps = {
    login,
}
 
export default Login;