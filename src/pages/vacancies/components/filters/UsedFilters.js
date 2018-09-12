import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Only from '../../../basic/components/Only';
import T from '../../../../store/translations';


export default class UsedFilters extends Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    onResetAllFilters: PropTypes.func.isRequired,
    cancelFilter: PropTypes.func.isRequired
  }

  hasSomeFiltersOn = () => {
    const { salary_min, salary_max, age_min, age_max, specialities_list, country_name, sex_list, experience } = this.props.filters;
    const filters = [salary_min, salary_max, age_min, age_max, specialities_list, country_name, sex_list, experience];
    return filters.some((filter) => filter && String(filter));
  }

  get choosenSexes() {
    return this.props.filters.sex_list.map((sex) => T.translate(`vacancies.filters.sex.${sex.toLowerCase()}`)).join(', ');
  }

  onCancelSalaryFilter = () => {
    return this.props.cancelFilter({ salary_max: null, salary_min: null });
  }

  onCancelExperienceFilter = () => {
    return this.props.cancelFilter({ experience: null });
  }

  onCancelSexFilter = () => {
    return this.props.cancelFilter({ sex: [] });
  }

  onCancelAgeFilter = () => {
    return this.props.cancelFilter({ age_min: null, age_max: null});
  }

  onCancelCountryNameFilter = () => {
    return this.props.cancelFilter({ country_name: null });
  }

  onCancelSpecialitiesListFilter = () => {
    return this.props.cancelFilter({ specialities_list: [] });
  }

  render() {
    const { salary_min, salary_max, age_min, age_max, specialities_list, country_name, sex_list, experience } = this.props.filters;

    return (
      <div className="filter-block">
        <p>Примененные фильтры</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter">
              <Only if={this.hasSomeFiltersOn()}>
                <ul className="filter-list">
                  <Only if={salary_min && salary_max}>
                    <li>
                      <span>Зарплата: <b>{salary_min}</b>-<b>{salary_max}</b> грн</span>
                      <span onClick={this.onCancelSalaryFilter}>x</span>
                    </li>
                  </Only>
                  <Only if={experience}>
                    <li>
                      <span>Опыт работы: от <b>{experience}</b> лет</span>
                      <span onClick={this.onCancelExperienceFilter}>x</span>
                    </li>
                  </Only>
                  <Only if={sex_list.length}>
                    <li>
                      <span>Пол: <b>{this.choosenSexes}</b></span>
                      <span onClick={this.onCancelSexFilter}>x</span>
                    </li>
                  </Only>
                  <Only if={age_min && age_max}>
                    <li>
                      <span>Возраст: <b>{age_min}</b>-<b>{age_max}</b></span>
                      <span onClick={this.onCancelAgeFilter}>x</span>
                    </li>
                  </Only>
                  <Only if={country_name}>
                    <li>
                      <span>Cтрана: <b>{country_name}</b></span>
                      <span onClick={this.onCancelCountryNameFilter}>x</span>
                    </li>
                  </Only>
                  <Only if={specialities_list.length}>
                    <li>
                      <span>Cпециальность: <b>{specialities_list.join(', ')}</b></span>
                      <span onClick={this.onCancelSpecialitiesListFilter}>x</span>
                    </li>
                  </Only>
                </ul>
                <span onClick={this.props.onResetAllFilters}>Сбросить все фильтра</span>
              </Only>
              <Only if={!this.hasSomeFiltersOn()}>
                <span>Нет выбранных фильтров</span>
              </Only>
            </div>
          </div>
        </div>
      </div>
    );
  }
}