import React, { Component } from 'react';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import { connect } from 'react-redux';
import { addReceiveData } from './pages/contacts/actions/index';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    addReceiveData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.addReceiveData();
  }

  render () {
    if (this.props.loading) {
      return(
        <div className="text-center">
          <Loader type="Audio" color="#85c8fd" width="250px" height="500px" />
        </div>
      );
    } else {
      return(
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      );
    }
  }
}

function mapPropsToDispatch(dispatch) {
  return {
    addReceiveData: () => dispatch(addReceiveData)
  };
}

function select(store) {
  return {
    loading: store.contacts.loading,
  };
}

export default connect(select, mapPropsToDispatch)(App);
