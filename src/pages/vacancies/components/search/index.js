import React, { Component } from 'react';
import SearchAutosuggestions from './SearchAutosuggestions';
import T from '../../../../store/translations';

export default class Search extends Component {
  render(){
    return (
      <div className='row'>
        <div className='col-md-12 mu-vacancies-search'>
          <div className="vacancy-label inline-block w-100">
            <T.span text="vacancies.vacancy" className="inline-block ml-40 mr-50" />
            <SearchAutosuggestions {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

