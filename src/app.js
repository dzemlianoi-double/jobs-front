import React, { Component } from 'react'
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
