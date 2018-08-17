import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

export default class FilterAge extends Component {
  static propTypes = {
    age_min: PropTypes.number.isRequired,
    age_max: PropTypes.number.isRequired,
    onFilterUpdate: PropTypes.func.isRequired,
  }

  state = {
    value: {
      min: this.props.age_min,
      max: this.props.age_max
    }
  }

  onSalaryUpdate = () => {
    const { min, max } = this.state.value;

    this.props.onFilterUpdate({ age_min: min, age_max: max });
  }

  render(){
    const { age_min, age_max } = this.props;

    return (
      <div className="filter-age-block">
        <p>Возраст</p>
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
                onChange={value => this.setState({ value })} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-25 apply">
              <button onClick={this.onSalaryUpdate}>Применить</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}