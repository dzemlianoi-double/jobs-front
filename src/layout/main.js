import React, { Component } from 'react';
import Home from './home';
import AboutUs from './about-us';
import Services from './services';
import Portfolio from './portfolio';
import { Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path='/about-us' component={AboutUs}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/portfolio' component={Portfolio}/>
      </main>
    );
  }
}

export default Main;
