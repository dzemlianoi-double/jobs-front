import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import FilterButton from './FilterButton';
import T from '../../../../store/translations';

export default class FilterAge extends Component {
  static propTypes = {
    age_min: PropTypes.number,
    age_max: PropTypes.number,
    onFilterUpdate: PropTypes.func.isRequired,
  }

  state = {
    isUpdated: false,
    value: {
      min: this.props.age_min,
      max: this.props.age_max
    }
  }

  onAgeUpdate = () => {
    const { min, max } = this.state.value;
    this.setState({ isUpdated: true });

    this.props.onFilterUpdate({ age_min: min, age_max: max });
  }

  changeValue = (value) => {
    this.setState({ value, isUpdated: false });
  }

  render(){
    const { age_min, age_max } = this.props;

    return (
      <div className="filter-age-block">
        <T.p text="vacancies.age" />
        <div className="filter-age">
          <div className="row">
            <div className="col-md-6">
              <input value={this.state.value.min || age_min}/>
            </div>
            <div className="col-md-6">
              <input value={this.state.value.max || age_max}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-25">
              <InputRange
                maxValue={age_max}
                minValue={age_min}
                value={this.state.value}
                onChange={this.changeValue} />
            </div>
          </div>
          <FilterButton
            isDisabled={this.state.isUpdated}
            action={this.onAgeUpdate}
          />
        </div>
      </div>
    );
  }
}