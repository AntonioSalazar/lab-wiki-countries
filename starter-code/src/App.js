import React, { Component } from 'react';
import './App.css';
import CountryList from "./components/CountryList";
import { Switch, Route } from "react-router-dom"
import CountryInfo from "./components/CountryInfo"

class App extends Component {
  render() {
    return (
      <div className="App">
      <CountryList />
        <Switch>
          <Route exact path={'/countryList'} component={CountryList}/> 
          <Route path={"/countryList/:countrycca3"} component={CountryInfo}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
