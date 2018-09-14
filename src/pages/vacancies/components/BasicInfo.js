import React from 'react';
import PropTypes from 'prop-types';
import T from '../../../store/translations';
import Sorting from './Sorting';

const propTypes = {
  count: PropTypes.number.isRequired,
  averageSalary: PropTypes.number.isRequired,
  changeOrder: PropTypes.func.isRequired,
  order: PropTypes.string
};

const BasicInfo = ({count, averageSalary, order, changeOrder}) => {
  return (
    <div className = "row" >
      <div className='col-md-12 mu-vacancies-list'>
        <div className="how-vacancies">
          <T.span text="vacancies.found" className="city-work mr-15"/>
          <span>
            <span className="mean-works"><b>{count}</b> {T.translate('vacancies.vacancies')}</span>
            <span className="mean-salary"><b>{averageSalary} {T.translate('vacancies.valuta_uah')}</b> {T.translate('vacancies.mean_salary')}</span>
          </span>
          <Sorting order={order} changeOrder={changeOrder} />
        </div>
      </div>
    </div >
  );
};

BasicInfo.propTypes = propTypes;

export default BasicInfo;
