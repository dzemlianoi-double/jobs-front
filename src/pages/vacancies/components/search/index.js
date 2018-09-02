import React, { Component } from 'react';
import SearchAutosuggestions from './SearchAutosuggestions';
import T from '../../../../store/translations';

export default class Search extends Component {
  render(){
    return (
      <div className='row'>
        <div className='col-md-12 mu-vacancies-search'>
          <div className="vacancy-label inline-block">
            <T.span text="vacancies.vacancy" />
            <SearchAutosuggestions {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

