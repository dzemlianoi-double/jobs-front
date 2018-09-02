import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Iframe from 'react-iframe';

import InfoVacancy from './InfoVacancy';
import { requestVacancy } from '../vacancies/actions';
import Only from '../basic/components/Only';

class Vacancy extends Component {
  static propTypes = {
    requestVacancy: PropTypes.func.isRequired,
    currentVacancy: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      country_name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      salary_min: PropTypes.number.isRequired,
      video_url: PropTypes.string.isRequired,
      specialities: PropTypes.array.isRequired,
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
    const { title, country_name, city, info, salary_min, video_url, specialities, age_min, age_max, main_photo } = this.props.currentVacancy;
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
                      <InfoVacancy 
                        country_name={country_name}
                        city={city}
                        salary_min={salary_min}
                        age_min={age_min}
                        age_max={age_max}
                        sex={this.sex}
                        experience={this.experience}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 mt-25">
                      <div className="about-vacancy">
                        <p><b>Описание вакансии:</b></p>
                        <p className="info-vacancy">{info}</p>
                      </div>
                    </div>
                  </div>
                  <Only if={!!video_url} skipDiv>
                    <div className="row">
                      <div className="col-md-12">
                        <Iframe url={ video_url }
                          height="500px"
                          id="myId"
                          className="iframe-video"
                          display="initial"
                          position="relative"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </Only>
                </div>
              </div>
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
