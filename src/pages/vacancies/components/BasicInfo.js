import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BasicInfo extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    averageSalary: PropTypes.number.isRequired,
  }
  render(){
    return (
      <div className = "row" >
        <div className='col-md-12 mu-vacancies-list'>
          <div className="how-vacancies">
            <p className="city-work">Найдено:</p>
            <p>
              <span className="mean-works"><b>{this.props.count}</b> вакансий</span>
              <span className="mean-salary"><b>{this.props.averageSalary} грн</b> средняя заработная плата</span>
            </p>
          </div>
        </div>
      </div >
    );
  }
}
