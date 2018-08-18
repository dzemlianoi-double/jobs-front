import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import internal_routes from '../config/internal_routes';

import Home from '../pages/home/components/Root';
import AboutUs from '../pages/about_us/components/Root';
import Vacancies from '../pages/vacancies/components/Root';
import Services from '../pages/services/components/Root';
import Contacts from '../pages/contacts/components/Root';
import NotFound from '../pages/NotFound';
import Vacancy from '../pages/vacancy/Root';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path={internal_routes.home} component={Home} />
          <Route exact path={internal_routes.about_us} component={AboutUs} />
          <Route exact path={internal_routes.vacancies} component={Vacancies} />
          <Route exact path={internal_routes.services} component={Services} />
          <Route exact path={internal_routes.contacts} component={Contacts} />
          <Route exact path={internal_routes.vacancy} component={Vacancy} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Main;
