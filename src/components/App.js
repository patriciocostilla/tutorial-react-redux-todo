import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ToDoList from '../views/ToDoList';
import Home from '../views/Home';
import Navbar from './Navbar';
import Login from '../views/Login'


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={ToDoList}/>
          <Route path="/login" component={Login} />

          <Route render={() => {return (<p>404 not found</p>)}} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
