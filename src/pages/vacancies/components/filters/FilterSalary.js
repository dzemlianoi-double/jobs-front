import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import FilterButton from './FilterButton';
import T from '../../../../store/translations';
import Only from '../../../basic/components/Only';

export default class FilterSalary extends Component {
  static propTypes = {
    salary_min: PropTypes.number.isRequired,
    salary_max: PropTypes.number.isRequired,
    onFilterUpdate: PropTypes.func.isRequired,
  }

  state = {
    isUpdated: false,
    value: {
      min: this.props.salary_min,
      max: this.props.salary_max,
    }
  };

  onSalaryUpdate = () => {
    const { min, max } = this.state.value;
    this.setState({ isUpdated: true });

    this.props.onFilterUpdate({ salary_min: min, salary_max: max });
  }

  changeValue = (value) => {
    this.setState({ value, isUpdated: false });
  }

  resetValue = () => {
    const { salary_max, salary_min } = this.props;
    this.props.onFilterUpdate({ salary_min: salary_min, salary_max: salary_max });
    this.setState({ isUpdated: false });
  }

  render() {
    const { salary_min, salary_max } = this.props;
    return (
      <div className="filter-salary">
        <T.p text="vacancies.salary" />
        <div className="block-salary">
          <div className="row">
            <div className="col-md-12 mb-10 btn-reset-filter">
              <Only if={this.state.isUpdated} skipDiv>
                <button onClick={this.resetValue}>сбросить фильтр</button>
              </Only>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input value={this.state.value.min || this.props.salary_min} />
            </div>
            <div className="col-md-6">
              <input value={this.state.value.max || this.props.salary_max} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-25">
              <InputRange
                maxValue={salary_max}
                minValue={salary_min}
                value={this.state.value}
                onChange={this.changeValue} />
            </div>
          </div>
          <FilterButton
            isDisabled={this.state.isUpdated}
            action={this.onSalaryUpdate}
          />
        </div>
      </div>
    );
  }
}