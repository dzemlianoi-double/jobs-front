import React, { Component } from 'react';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import { connect } from 'react-redux';
import { addReceiveData, finishLoading } from './pages/contacts/actions/index';
import { addReceiveDataLastVacancies } from './pages/vacancies/actions/index';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    addReceiveData: PropTypes.func.isRequired,
    addReceiveDataLastVacancies: PropTypes.func.isRequired,
    finishLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.addReceiveData();
    this.props.addReceiveDataLastVacancies();
    this.props.finishLoading();
  }

  render () {
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

function mapPropsToDispatch(dispatch) {
  return {
    addReceiveData: () => dispatch(addReceiveData),
    addReceiveDataLastVacancies: () => dispatch(addReceiveDataLastVacancies),
    finishLoading: () => dispatch(finishLoading)
  };
}

function select(store) {
  return {
    loading: store.contacts.loading,
  };
}

export default connect(select, mapPropsToDispatch)(App);
