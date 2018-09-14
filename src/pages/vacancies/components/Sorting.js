import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import _ from 'lodash';

const options = [
  { value: 'hot', label: 'Гарячие вначале' },
  { value: 'date', label: 'По дате добавления' },
  { value: 'salary', label: 'По Заработной плате' },
  { value: 'name_asc', label: 'По Названию(А - Я)' },
  { value: 'name_desc', label: 'По Названию(Я - А)' }
];

export default class Sorting extends Component {
  static propTypes = {
    changeOrder: PropTypes.func.isRequired,
    order: PropTypes.string
  }
  
  state = {
    selectedOption: options[0]
  }

  handleChange = (option) => {
    this.props.changeOrder(option.value);
    this.setState({ selectedOption: _.find(options, ['value', option]) });
  }

  render() {
    return (
      <p className="sort-block">
        <span className="fs-20 mr-15">Сортировать по:</span>
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </p>
    );
  }
}
