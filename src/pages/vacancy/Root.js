import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { requestVacancy } from '../vacancies/actions';
import SliderLastVacancies from './SliderLastVacancies';

class Vacancy extends Component {
  static propTypes = {
    requestVacancy: PropTypes.func.isRequired,
    currentVacancy: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      country_name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      salary_min: PropTypes.string.isRequired,
      specialities: PropTypes.string.isRequired,
      is_hot: PropTypes.bool.isRequired,
      created_at: PropTypes.isRequired,
      age_min: PropTypes.number.isRequired,
      age_max: PropTypes.number.isRequired,
      experience: PropTypes.number.isRequired,
      arrive_date: PropTypes.string.isRequired,
      main_photo: PropTypes.string.isRequired,
      sex: PropTypes.oneOf(['Any', 'Male', 'Female', 'Family']).isRequired
    }),
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.requestVacancy(this.props.match.params.id);
  }

  get experience() {
    const { experience } = this.props.currentVacancy;
    return experience ? `Опыт работы от ${experience} лет` : 'Опыт работы не важен';
  }

  get sex() {
    switch (this.props.currentVacancy.sex) {
    case ('Male'): return 'Мужской';
    case ('Female'): return 'Женский';
    case ('Family'): return 'Семейная пара';
    default: return 'Не имеет значения';
    }
  }

  render() {
    const { title, country_name, city, info, salary_min, specialities, age_min, age_max, main_photo } = this.props.currentVacancy;

    return (
      <section className='mu-vacancies'>
        <div className='container mt-50 mb-50'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='row info-vacancy'>
                <div className='col-md-12 padding-0'>
                  <div className="vacancy">
                    <p className="title-vacancy">{title}</p>
                    <p className="title-company">{!!specialities && _.map(specialities, 'title').join(', ')}</p>
                    <div className="row">
                      <div className="col-md-7 mt-10">
                        <img src={main_photo} />
                      </div>
                      <div className="col-md-5 mt-10">
                        <div className="conditions">
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-money fs-17 mr-2 color-strong-blue-2" aria-hidden="true"></i>
                                Заработная плата:
                              </div>
                              <div className="col-md-6 info">{salary_min}</div>
                            </div>
                          </div>
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-map-pin fs-17 mr-2 color-strong-blue-2" aria-hidden="true"></i>
                                Страна:
                              </div>
                              <div className="col-md-6 info">{country_name}, {city}</div>
                            </div>
                          </div>
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-venus-mars fs-17 mr-2 color-strong-blue-2"></i>
                                Пол:
                              </div>
                              <div className="col-md-6 info">{this.sex}</div>
                            </div>
                          </div>
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-user-times fs-17 mr-2 color-strong-blue-2"></i>
                                Возраст:
                              </div>
                              <div className="col-md-6 info">{age_min} - {age_max} лет</div>
                            </div>
                          </div>
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-child fs-17 mr-2 color-strong-blue-2"></i>
                                Опыт работы:
                              </div>
                              <div className="col-md-6 info">{this.experience}</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 mt-25 text-center">
                              <button className="btn-contacts">Контакты</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-25">
                      <div className="about-vacancy">
                        <p>Описание вакансии:</p>
                        <p>{info}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <SliderLastVacancies />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function select(store) {
  return {
    currentVacancy: store.vacancies.currentVacancy
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    requestVacancy: (id) => dispatch(requestVacancy(id))
  };
}

export default connect(select, mapPropsToDispatch)(Vacancy);