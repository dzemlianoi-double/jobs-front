import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

export default class FilterExperience extends Component {
  static propTypes = {
    experience_max: PropTypes.number.isRequired,
    onFilterUpdate: PropTypes.func.isRequired,
  }
  
  state = {
    experience: 0
  };

  onExperienceUpdate = () => {
    this.props.onFilterUpdate({ experience: this.state.experience });
  }

  render(){
    
    return (
      <div className="filter-experience-block">
        <p>Опыт Работы</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-experience">
              <span>не более</span>
              <input readOnly value={this.state.experience} />
              <span>лет</span>
              <div className="row">
                <div className="col-md-12 mt-15">
                  <InputRange
                    maxValue={this.props.experience_max}
                    value={this.state.experience}
                    onChange={experience => this.setState({ experience })} 
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 apply">
                  <button onClick={this.onExperienceUpdate}>Применить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}