import React, { Component } from 'react';
import '../../../assets/styles/_spinner.scss';

export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner-wrapper">
        <div className="spinner-content">
          <p>Загрузка ...</p>
          <div className="loading">
            <div className="l1"></div>
            <div className="l2"></div>
            <div className="l3"></div>
          </div>
        </div>
      </div>
    );
  }
}
