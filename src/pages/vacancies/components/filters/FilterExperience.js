import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import FilterButton from './FilterButton';
import T from '../../../../store/translations';
import Only from '../../../basic/components/Only';

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

  resetValue = () => {
    const { experience_max } = this.props;
    this.props.onFilterUpdate({ experience_max: experience_max });
    this.setState({ isUpdated: false });
  }

  render(){
    
    return (
      <div className="filter-experience-block">
        <T.p text="vacancies.age" />
        <div className="row">
          <div className="col-md-12">
            <div className="filter-experience">
              <div className="row">
                <div className="col-md-12 mb-10 btn-reset-filter">
                  <Only if={this.state.isUpdated} skipDiv>
                    <button onClick={this.resetValue}>сбросить фильтр</button>
                  </Only>
                </div>
              </div>
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