import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import _ from 'lodash';

export default class FilterCountry extends Component {
  static propTypes = {
    onFilterUpdate: PropTypes.func.isRequired,
    specialities_list: PropTypes.array.isRequired
  }

  state = {
    selectedOptions: [],
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions: selectedOptions });
  }

  onSpecialityUpdate = () => {
    this.props.onFilterUpdate({ specialities_list: _.map(this.state.selectedOptions, 'value') });
  }

  get options() {
    return this.props.specialities_list;
  }

  render() {
    return (
      <div className="filter-country-block">
        <p>Специальность</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-country">
              <Select
                className="mt-10 basic-multi-select"
                isMulti
                onChange={this.handleChange}
                options={this.options}
                placeholder="Выберите специальность..."
              />
              <div className="row">
                <div className="col-md-12 apply">
                  <button onClick={this.onSpecialityUpdate}>Применить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}