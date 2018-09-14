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
                <ul className="filter-list-used mb-15">
                  <Only if={salary_min && salary_max}>
                    <li>
                      <i className="fa fa-circle fs-7 color-strong-blue-2" aria-hidden="true"></i>
                      <span className="fs-15">{T.translate('filters_used.salary')}  <b>{salary_min}</b>-<b>{salary_max}</b> <T.span text="vacancy.icon_uah"/></span>
                      <i onClick={this.onCancelSalaryFilter} className="fa fa-times-circle color-strong-blue-2" aria-hidden="true"></i>
                    </li>
                  </Only>
                  <Only if={experience}>
                    <li>
                      <i className="fa fa-circle fs-7 color-strong-blue-2" aria-hidden="true"></i>
                      <span className="fs-15">{T.translate('filters_used.experience')}  {T.translate('filters_used.at')}  <b>{experience}</b> {T.translate('filters_used.years')} </span>
                      <i onClick={this.onCancelExperienceFilter} className="fa fa-times-circle color-strong-blue-2" aria-hidden="true"></i>
                    </li>
                  </Only>
                  <Only if={sex_list.length}>
                    <li>
                      <i className="fa fa-circle fs-7 color-strong-blue-2" aria-hidden="true"></i>
                      <span className="fs-15">{T.translate('filters_used.sex')}  <b>{this.choosenSexes}</b></span>
                      <i onClick={this.onCancelSexFilter} className="fa fa-times-circle color-strong-blue-2" aria-hidden="true"></i>
                    </li>
                  </Only>
                  <Only if={age_min && age_max}>
                    <li>
                      <i className="fa fa-circle fs-7 color-strong-blue-2" aria-hidden="true"></i>
                      <span className="fs-15">{T.translate('filters_used.age')}  <b>{age_min}</b>-<b>{age_max}</b></span>
                      <i onClick={this.onCancelAgeFilter} className="fa fa-times-circle color-strong-blue-2" aria-hidden="true"></i>
                    </li>
                  </Only>
                  <Only if={country_name}>
                    <li>
                      <i className="fa fa-circle fs-7 color-strong-blue-2" aria-hidden="true"></i>
                      <span className="fs-15">{T.translate('filters_used.country')}  <b>{country_name}</b></span>
                      <i onClick={this.onCancelCountryNameFilter} className="fa fa-times-circle color-strong-blue-2" aria-hidden="true"></i>
                    </li>
                  </Only>
                  <Only if={specialities_list.length}>
                    <li>
                      <i className="fa fa-circle fs-7 color-strong-blue-2" aria-hidden="true"></i>
                      <span className="fs-15">{T.translate('filters_used.specialities')}  <b>{specialities_list.join(', ')}</b></span>
                      <i onClick={this.onCancelSpecialitiesListFilter} className="fa fa-times-circle color-strong-blue-2" aria-hidden="true"></i>
                    </li>
                  </Only>
                </ul>
                <span className="reset-filters" onClick={this.props.onResetAllFilters}>{T.translate('filters_used.reset_filters')} </span>
              </Only>
              <Only if={!this.hasSomeFiltersOn()}>
                <span>{T.translate('filters_used.no_filters')} </span>
              </Only>
            </div>
          </div>
        </div>
      </div>
    );
  }
}