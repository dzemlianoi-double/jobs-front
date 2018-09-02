import React from 'react';
import T from '../../store/translations';

const InfoVacancy = ({ country_name, city, salary_min, age_min, age_max, experience, sex }) => {
  return (
    <div className="col-md-5 mt-10">
      <div className="conditions">
        <div className="wrapper-info">
          <div className="row">
            <div className="col-md-6 info">
              <i className="fa fa-money fs-17 mr-2 color-strong-blue-2" aria-hidden="true"></i>
              {T.translate('vacancy.salary')}
            </div>
            <div className="col-md-6 info">{salary_min} {T.translate('vacancy.icon_uah')}</div>
          </div>
        </div>
        <div className="wrapper-info">
          <div className="row">
            <div className="col-md-6 info">
              <i className="fa fa-map-pin fs-17 mr-2 color-strong-blue-2" aria-hidden="true"></i>
              {T.translate('vacancy.country')}
            </div>
            <div className="col-md-6 info">{country_name}, {city}</div>
          </div>
        </div>
        <div className="wrapper-info">
          <div className="row">
            <div className="col-md-6 info">
              <i className="fa fa-venus-mars fs-17 mr-2 color-strong-blue-2"></i>
              {T.translate('vacancy.sex')}              
            </div>
            <div className="col-md-6 info">{sex}</div>
          </div>
        </div>
        <div className="wrapper-info">
          <div className="row">
            <div className="col-md-6 info">
              <i className="fa fa-user-times fs-17 mr-2 color-strong-blue-2"></i>
              {T.translate('vacancy.age')}
            </div>
            <div className="col-md-6 info">{age_min} - {age_max} {T.translate('vacancy.years')}</div>
          </div>
        </div>
        <div className="wrapper-info">
          <div className="row">
            <div className="col-md-6 info">
              <i className="fa fa-child fs-17 mr-2 color-strong-blue-2"></i>
              {T.translate('vacancy.experience')}
            </div>
            <div className="col-md-6 info">{experience}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-25 text-center">
            <button className="btn-contacts">{T.translate('vacancy.respond')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoVacancy;
