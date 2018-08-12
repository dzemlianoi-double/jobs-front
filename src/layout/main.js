import React, { Component } from 'react';
import Home from '../pages/home/components/home';
import WhoWe from '../pages/home/components/WhoWe';
import Services from './services';
import Contacts from './contacts';
import NotFound from './not-found';
import { Route, Switch } from 'react-router-dom';
import internal_routes from '../config/internal_routes';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path={internal_routes.home} component={Home} />
          <Route exact path={internal_routes.who_we} component={WhoWe} />
          <Route exact path={internal_routes.services} component={Services} />
          <Route exact path={internal_routes.contacts} component={Contacts} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Main;
