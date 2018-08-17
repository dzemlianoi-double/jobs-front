import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { requestVacancies } from '../actions';
import Search from './Search';
import Filters from './filters';
import Vacancy from './Vacancy';
import BasicInfo from './BasicInfo';

class Vacancies extends Component {
  static propTypes = {
    requestVacancies: PropTypes.func.isRequired,
    vacancies: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.requestVacancies();
  }

  get averageSalary() {
    return _.meanBy(this.props.vacancies, (vacancy) => vacancy.salary_min);
  }

  filterSalary = (vacancies) => {
    const {salary_min, salary_max} = this.props.filters;

    if (salary_max !== null && salary_min !== null){
      return _.filter(vacancies, (vacancy) => vacancy.salary_min >= salary_min && vacancy.salary_min <= salary_max);
    }else {
      return vacancies;
    }
  }

  filterAge = (vacancies) => {
    const { age_min, age_max } = this.props.filters;

    if (age_min !== null && age_max !== null) {
      return _.filter(vacancies, (vacancy) => {
        let age_min_is_between_range = vacancy.age_min >= age_min && vacancy.age_min <= age_max;
        let age_max_is_between_range = vacancy.age_max >= age_min && vacancy.age_max <= age_max;
        return age_min_is_between_range || age_max_is_between_range;
      });
    } else {
      return vacancies;
    }
  }


  filterExperience = (vacancies) => {
    const { experience } = this.props.filters;

    if (experience !== null) {
      return _.filter(vacancies, (vacancy) => vacancy.experience <= experience);
    } else {
      return vacancies;
    }
  }

  get filteredVacancies(){
    let vacanciesBySalary = this.filterSalary(this.props.vacancies);
    let vacanciesByExperience = this.filterExperience(vacanciesBySalary);
    let vacanciesByAge = this.filterAge(vacanciesByExperience);
    return vacanciesByAge;
  }

  render () {
    return (
      <section className='mu-vacancies'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='mu-vacancies-area'>
                <Search />
                <div className='row main'>
                  <Filters />
                  <div className='col-md-9 padding-0'>
                    <BasicInfo count={this.filteredVacancies.length} averageSalary={this.averageSalary || 0} />
                    {this.filteredVacancies.map((vacancy => <Vacancy key={vacancy.id} vacancy={vacancy} />))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
      </section>
    );
  }
}

function select(store) {
  return {
    vacancies: store.vacancies.list,
    filters: store.vacancies.filters.used
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    requestVacancies: () => dispatch(requestVacancies())
  };
}

export default connect(select, mapPropsToDispatch)(Vacancies);