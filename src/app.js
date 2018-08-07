import React, { Component } from 'react';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import { connect } from 'react-redux';
import { addReceiveData } from './pages/contacts/actions/index';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    addReceiveData: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.addReceiveData();
  }

  render () {
    return (
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
    addReceiveData: () => dispatch(addReceiveData)
  };
}


export default connect(null, mapPropsToDispatch)(App);
