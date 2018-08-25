import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import Spinner from './pages/basic/components/Spinner';
import { receiveBasicData } from './pages/basic/actions/index';

class App extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    phone_numbers: PropTypes.object.isRequired,
    social_links: PropTypes.object.isRequired,
    addresses: PropTypes.object.isRequired,
    emails: PropTypes.array.isRequired,
    vacancies: PropTypes.array.isRequired,
    receiveBasicData: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.receiveBasicData();
  }

  render () {
    const { loading, emails, phone_numbers, social_links, vacancies, addresses} = this.props;
    
    if (loading) return <Spinner/>;
    return(
      <div>
        <Header
          phone_numbers={phone_numbers}
          addresses={addresses}
        />
        <Main />
        <Footer
          emails={emails}
          phone_numbers={phone_numbers}
          social_links={social_links}
          addresses={addresses}
          vacancies={vacancies}
          loading={loading}
        />
      </div>
    );
  }
}

function mapPropsToDispatch(dispatch) {
  return {
    receiveBasicData: () => dispatch(receiveBasicData())
  };
}

function select(store) {
  return {
    emails: store.basic.emails,
    phone_numbers: store.basic.phone_numbers,
    social_links: store.basic.social_links,
    coordinates: store.basic.coordinates,
    addresses: store.basic.addresses,
    vacancies: store.basic.last_vacancies,
    loading: store.basic.loading,
  };
}

export default withRouter(connect(select, mapPropsToDispatch)(App));
