import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateFilters } from '../../actions';

import 'react-input-range/lib/css/index.css';
import FilterSalary from './FilterSalary';
import FilterExperience from './FilterExperience';
import FilterSex from './FilterSex';
import FilterCountry from './FilterCountry';
import FilterService from './FilterService';
import FilterAge from './FilterAge';

class Filters extends Component {
  static propTypes = {
    vacancies: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    onFilterUpdate: PropTypes.func.isRequired
  }

  render(){
    const { salary_min, salary_max, age_min, age_max, experience_max, country_list } = this.props.filters.default;
    const { onFilterUpdate } = this.props;
    
    return (
      <div className='col-md-3 padding-0'>
        <div className='mu-filter'>
          <div className="row">
            <div className="col-md-12">
              <FilterSalary 
                salary_min={salary_min}
                salary_max={salary_max}
                onFilterUpdate={onFilterUpdate}
              />
              <FilterExperience
                experience_max={experience_max}
                onFilterUpdate={onFilterUpdate}
              />
              <FilterSex
                onFilterUpdate={onFilterUpdate}
              />
              <FilterAge 
                age_min={age_min}
                age_max={age_max}
                onFilterUpdate={onFilterUpdate}
              />
              <FilterCountry
                country_list={country_list}
                onFilterUpdate={onFilterUpdate}
              />
              <FilterService />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    filters: state.vacancies.filters,
    vacancies: state.vacancies.list
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    onFilterUpdate: (changedData) =>  dispatch(updateFilters(changedData))
  };
}


export default connect(select, mapPropsToDispatch)(Filters);

