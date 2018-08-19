import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import _ from 'lodash';

import FilterButton from './FilterButton';

export default class FilterCountry extends Component {
  static propTypes = {
    onFilterUpdate: PropTypes.func.isRequired,
    specialities_list: PropTypes.array.isRequired
  }

  state = {
    selectedOptions: [],
    isUpdated: false
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions: selectedOptions, isUpdated: false });
  }

  onSpecialityUpdate = () => {
    this.setState({ isUpdated: true });
    this.props.onFilterUpdate({ specialities_list: _.map(this.state.selectedOptions, 'value') });
  }

  get options() {
    return this.props.specialities_list;
  }

  render() {
    return (
      <div className="filter-service-block">
        <p>Специальность</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-service">
              <Select
                className="mt-10 basic-multi-select"
                isMulti
                onChange={this.handleChange}
                options={this.options}
                placeholder="Выберите специальность..."
              />
              <FilterButton
                isDisabled={this.state.isUpdated}
                action={this.onSpecialityUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}