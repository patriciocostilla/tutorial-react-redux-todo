import React, { Component } from 'react';
import {connect} from 'react-redux'

import {ListGroup, Row, Col} from 'react-bootstrap'

import ToDoModal from '../components/ToDoModal';

// Redux actions
import {getTodos} from '../redux/actions/todos.actions'

class ToDoList extends Component {
    state = {  }

    item(todo) {
        return (
            <ListGroup.Item key={todo.id}>{todo.value}</ListGroup.Item>
        )
    }

    componentDidMount() {
        this.props.getTodos()
    }

    render() { 
        return ( 
            <>
            <Row className="align-items-center">
                <Col xs={12} sm={9}><h1>To Do List</h1></Col>
                <Col xs={12} sm={3}>
                    <ToDoModal></ToDoModal>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <ListGroup>
                        {this.props.todos.map(this.item)}
                    </ListGroup>  
                </Col>
            </Row>
        
            </>
         );
    }
}

function mapStateToProps(state) {
    const {todos} = state;
    return {
        todos
    }
}

const mapDispatchToProps = {
    getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);