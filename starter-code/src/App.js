import React, { Component } from 'react';
import './App.css';
import CountryList from "./components/CountryList";
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path={'/countryList'} component={CountryList}/> 
          <Route path={"/countryList/:countryName"} component={CountryList}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
