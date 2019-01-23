import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navigation from './Components/Navigation';
import Error from './Components/Error';

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
<div>
<Navigation></Navigation>
<Switch>
          <Route path="/" component={Home} exact ></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route  component={Error}></Route>
        </Switch>
        
</div>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
