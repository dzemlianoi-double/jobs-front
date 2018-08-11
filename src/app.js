import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import Spinner from './layout/spinner';
import { receiveBasicData } from './pages/basic/actions/index';

class App extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    receiveBasicData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.receiveBasicData();
  }

  render () {
    if (this.props.loading) return <Spinner/>;
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
    receiveBasicData: () => dispatch(receiveBasicData())
  };
}

function select(store) {
  return {
    loading: store.basic.loading,
  };
}

export default withRouter(connect(select, mapPropsToDispatch)(App));
