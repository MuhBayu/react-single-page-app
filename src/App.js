import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Typograph from "./components/Typograph";
import Grid from "./components/Grid";
import Dialog from "./components/Dialog";
import './App.css';
import Simplebar from './components/layouts/Simplebar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Simplebar/>
          <Route exact path="/" component={Home}/>
          <Route path="/collection" component={Collection}/>
          <Route path="/grid" component={Grid}/>
          <Route path="/dialog" component={Dialog}/>
          <Route path="/typograph" component={Typograph}/>
        </div>
       </HashRouter>
    );
  }
}

export default App;
