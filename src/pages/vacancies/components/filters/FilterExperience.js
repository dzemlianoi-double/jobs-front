import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import FilterButton from './FilterButton';

export default class FilterExperience extends Component {
  static propTypes = {
    experience_max: PropTypes.number.isRequired,
    onFilterUpdate: PropTypes.func.isRequired,
  }
  
  state = {
    isUpdated: false,
    experience: 0
  };

  onExperienceUpdate = () => {
    this.setState({ isUpdated: true });
    this.props.onFilterUpdate({ experience: this.state.experience });
  }

  changeValue = (experience) => {
    this.setState({ experience, isUpdated: false });
  }

  render(){
    
    return (
      <div className="filter-experience-block">
        <p>Опыт Работы</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-experience">
              <span>не более</span>
              <input readOnly value={this.state.experience} className="text-center" />
              <span>лет</span>
              <div className="row">
                <div className="col-md-12 mt-15">
                  <InputRange
                    maxValue={this.props.experience_max}
                    value={this.state.experience}
                    onChange={this.changeValue} 
                  />
                </div>
              </div>
              <FilterButton
                isDisabled={this.state.isUpdated}
                action={this.onExperienceUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}