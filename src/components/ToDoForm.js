import React, { Component } from 'react';

import { addTodo } from '../redux/actions/todos.actions'
import { connect } from 'react-redux';

import { Form } from 'react-bootstrap';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {value} = this.state;
        this.props.addTodo({value});
        this.props.hide()
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({value})
    }

    render() { 
        return ( 
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="FormContent">
                        <Form.Label>To Do</Form.Label>
                        <Form.Control type="text" name="value" onChange={this.handleChange} placeholder="What to do?"/>
                    </Form.Group>
                    <Form.Group controlId="FormSubmit">
                        <Form.Control type="submit" name="submit" className="btn btn-primary" value="Save"/>
                    </Form.Group>
                </Form>
            </>
         );
    }
}

const mapDispatchToProps = {
    addTodo
}
 
export default connect(null, mapDispatchToProps)(ToDoForm);