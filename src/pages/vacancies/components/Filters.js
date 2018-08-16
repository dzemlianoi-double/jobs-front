import React, { Component } from 'react';
import 'react-input-range/lib/css/index.css';
import FilterSalary from './FilterSalary';
import FilterExperience from './FilterExperience';
import FilterSex from './FilterSex';
import FilterCountry from './FilterCountry';
import FilterService from './FilterService';

export default class Filters extends Component {
  render(){
    return (
      <div className='col-md-3 padding-0'>
        <div className='mu-filter'>
          <div className="row">
            <div className="col-md-12">
              <FilterSalary />
              <FilterExperience />
              <FilterSex />
              <FilterCountry />
              <FilterService />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
