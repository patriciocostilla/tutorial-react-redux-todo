import React, { Component } from 'react';

import {Navbar} from 'react-bootstrap';

class MyNavbar extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>To Do App</Navbar.Brand>
            </Navbar>
         );
    }
}
 
export default MyNavbar;