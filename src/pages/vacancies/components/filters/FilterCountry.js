import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import FilterButton from './FilterButton';
import T from '../../../../store/translations';

const defaultOption = { value: null, label: 'Любая' };

export default class FilterCountry extends Component {
  static propTypes = {
    onFilterUpdate: PropTypes.func.isRequired,
    country_list: PropTypes.array.isRequired
  }

  state = {
    isUpdated: false,
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption, isUpdated: false });
  }

  onCountryUpdate = () => {
    this.setState({ isUpdated: true });
    this.props.onFilterUpdate({ country_name: this.state.selectedOption.value });
  }

  get options() {
    return [defaultOption, ...this.props.country_list];
  }

  render() {
    const { selectedOption } = this.state;
 
    return (
      <div className="filter-country-block">
        <T.p text="vacancies.country"/>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-country fs-07r">
              <Select className="mt-10"
                value={selectedOption}
                onChange={this.handleChange}
                options={this.options}
                placeholder={T.translate('vacancies.select_country')}
              />
              <FilterButton
                isDisabled={this.state.isUpdated}
                action={this.onCountryUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}