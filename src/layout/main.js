import React, { Component } from 'react';
import Home from './home';
import AboutUs from './about-us';
import Services from './services';
import Portfolio from './portfolio';
import { Route } from 'react-router-dom';
import routes from '../config/internal_routes';

class Main extends Component {
  render() {
    return (
      <main>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.about_us} component={AboutUs}/>
        <Route exact path={routes.services} component={Services}/>
        <Route exact path={routes.contacts} component={Portfolio}/>
      </main>
    );
  }
}

export default Main;
