import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './pages/component/hoc/form/Form';
import Display from './pages/component/hoc/display/Display';
import Update from './pages/component/hoc/update/Update';

const App = ()=> {
   return(
     <Switch>
     <Route path="/" component={Form} exact/>
     <Route path="/Display" component={Display} exact />
     <Route path="/Display/:id" component={Update} exact />
     </Switch>
     

   )
}

export default App;
