import React, { Component } from 'react';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import T from 'i18n-react';
import translations from './translations/ru.json';

export default class App extends Component {
  componentDidMount() {
    T.setTexts(translations);
  }

  render () {
    return (
      <div>
        <T.span text="hello"></T.span>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
