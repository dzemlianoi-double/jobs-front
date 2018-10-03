import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import FilterButton from './FilterButton';
import T from '../../../../store/translations';

export default class FilterExperience extends Component {
  static propTypes = {
    experience_max: PropTypes.number,
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
      <div className="filter filter-experience-block mt-30">
        <T.p text="vacancies.experience" />
        <div className="row">
          <div className="col-md-12">
            <div className="filter-experience">
              <T.span text="vacancies.no_more" />
              <input readOnly value={this.state.experience} className="text-center" />
              <T.span text="vacancies.years" />
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