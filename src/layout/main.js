import React, { Component } from 'react';
import Home from './home';
import AboutUs from './about-us';
import Services from './services';
import Portfolio from './portfolio';
import NotFound from './not-found';
import { Route, Switch } from 'react-router-dom';
import internal_routes from '../config/internal_routes';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path={internal_routes.home} component={Home} />
          <Route exact path={internal_routes.about_us} component={AboutUs} />
          <Route exact path={internal_routes.services} component={Services} />
          <Route exact path={internal_routes.contacts} component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Main;
