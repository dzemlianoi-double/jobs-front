import React from 'react';
import PropTypes from 'prop-types';
import T from '../../../store/translations';

const propTypes = {
  count: PropTypes.number.isRequired,
  averageSalary: PropTypes.number.isRequired
}

 const BasicInfo = ({count, averageSalary}) => {
    return (
      <div className = "row" >
        <div className='col-md-12 mu-vacancies-list'>
          <div className="how-vacancies">
            <T.p text="vacancies.found" className="city-work"/>
            <p>
              <span className="mean-works"><b>{count}</b> {T.translate('vacancies.vacancies')}</span>
              <span className="mean-salary"><b>{averageSalary} {T.translate('vacancies.valuta_uah')}</b> {T.translate('vacancies.mean_salary')}</span>
            </p>
          </div>
        </div>
      </div >
    );
  }

  BasicInfo.propTypes = propTypes;

export default BasicInfo;
