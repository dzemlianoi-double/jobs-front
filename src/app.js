import React, { Component } from 'react';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import { connect } from 'react-redux';
import { addReceiveData } from './pages/contacts/actions/index';

class App extends Component {
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
