import React, { Component } from 'react';

export default class Search extends Component {
  render(){
    return (
      <div className='row'>
        <div className='col-md-12 mu-vacancies-search'>
          <span>Вакансия</span>
          <input />
          <button className="ml-25 btn btn-lg">Найти</button>
        </div>
      </div>
    );
  }
}
