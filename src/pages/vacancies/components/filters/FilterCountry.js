import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
 
const defaultOption = { value: null, label: 'Любая' };

export default class FilterCountry extends Component {
  static propTypes = {
    onFilterUpdate: PropTypes.func.isRequired,
    country_list: PropTypes.array.isRequired
  }

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  onCountryUpdate = () => {
    this.props.onFilterUpdate({ country_name: this.state.selectedOption.value });
  }

  get options() {
    return [defaultOption, ...this.props.country_list];
  }

  render() {
    const { selectedOption } = this.state;
 
    return (
      <div className="filter-country-block">
        <p>Страна</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-country">
              <Select className="mt-10"
                value={selectedOption}
                onChange={this.handleChange}
                options={this.options}
              />
              <div className="row">
                <div className="col-md-12 apply">
                  <button onClick={this.onCountryUpdate}>Применить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}