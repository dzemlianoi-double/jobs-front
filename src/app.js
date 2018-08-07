import React, { Component } from 'react';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import { connect } from 'react-redux';
import { addReceiveData } from './pages/contacts/actions/index';
import PropTypes from 'prop-types';
import Spinner from './layout/spinner';

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
      return <Spinner />
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
