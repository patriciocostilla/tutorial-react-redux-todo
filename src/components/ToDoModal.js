import React, { Component } from 'react';

import {Modal, Button} from 'react-bootstrap';

import ToDoForm from './ToDoForm';

class ToDoModal extends Component {
    state = { 
        show: false
     }
    
    constructor(props) {
        super(props)

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow = () => {this.setState({show: true})};
    handleHide = () => {this.setState({show: false})}


    render() { 
        return ( 
            <>
            <Button className="float-right" onClick={this.handleShow}>Add</Button>
            <Modal show={this.state.show} onHide={this.handleHide}>
                <Modal.Header closeButton>
                    Add a ToDo
                </Modal.Header>
                <Modal.Body>
                    <ToDoForm hide={this.handleHide}></ToDoForm>
                </Modal.Body>
            </Modal>
            </>
         );
    }
}
 
export default ToDoModal;