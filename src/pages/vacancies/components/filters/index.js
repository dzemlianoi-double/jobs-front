import React from 'react';
import PropTypes from 'prop-types';

import 'react-input-range/lib/css/index.css';
import FilterSalary from './FilterSalary';
import FilterExperience from './FilterExperience';
import FilterSex from './FilterSex';
import FilterCountry from './FilterCountry';
import FilterService from './FilterService';
import FilterAge from './FilterAge';
import UsedFilters from './UsedFilters';

const propTypes = {
  vacancies: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  onFilterUpdate: PropTypes.func.isRequired,
  onResetAllFilters: PropTypes.func.isRequired,
  
};

const Filters = ({ onFilterUpdate, onResetAllFilters, filters }) =>  {
  const { salary_min, salary_max, age_min, age_max, experience_max, country_list, specialities_list } = filters.default;
  
  return (
    <div className='col-md-3 padding-0'>
      <div className='mu-filter'>
        <div className="row">
          <div className="col-md-12">
            <UsedFilters 
              filters={filters.used}
              onResetAllFilters={onResetAllFilters}
              cancelFilter={onFilterUpdate}
            />
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
            <FilterService
              specialities_list={specialities_list}
              onFilterUpdate={onFilterUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = propTypes;

export default Filters;


