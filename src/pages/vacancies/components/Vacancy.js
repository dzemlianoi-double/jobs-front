import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import _ from 'lodash';

export default class Vacancy extends Component {
  static propTypes = {
    vacancy: PropTypes.shape({
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
      sex: PropTypes.oneOf(['Any', 'Male', 'Female', 'Family']).isRequired
    })
  }

  get experience() {
    const { experience } = this.props.vacancy;
    return experience == 0 ? 'Опыт работы не важен' : `Опыт работы от ${experience} лет`;
  }

  get sex() {
    switch(this.props.vacancy.sex) {
    case('Male'):
      return 'Мужской';
    case('Female'):
      return 'Женский';
    case('Family'):
      return 'Семейная пара';
    default:
      return 'Не имеет значения'; 
    }
  }

  render(){
    const { title, country_name, city, info, salary_min, specialities, is_hot, created_at,
      age_min, age_max, arrive_date } = this.props.vacancy;

    return (
      <div className="row">
        <div className='col-md-12 padding-30'>
          <div className={`row mu-vacancy ${is_hot && 'vacancy-hot'}`}>
            <div className="col-md-9">
              <p className="title-vacancy">
                <span>{title}</span>
              </p>
              <p className="title-company">{!!specialities && _.map(specialities, 'title').join(', ')}</p>
              <p className="desc">
                {_.truncate(info, { length: 200 })}
                <a href="#">Полное описание</a>
              </p>
              <p className="date-added m-b-3">
                <span>Дата заезда: </span>
                <Moment format="DD.MM.YYYY">{arrive_date}</Moment>
              </p>
              <p className="date-added">
                <span>Добавлено: </span>
                <Moment format="DD.MM.YYYY">{created_at}</Moment>
              </p>
            </div>
            <div className="col-md-3">
              <p className="salary">{salary_min} грн</p>
              <div className="city">
                <span>{country_name}, {city}</span>
                <div>
                  <i className="fa fa-child fs-17 mr-2 color-strong-blue-2"></i>
                  <span>{this.experience}</span>
                </div>
                <div>
                  <i className="fa fa-venus-mars fs-17 mr-1 color-strong-blue-2"></i>
                  <span>{this.sex}</span>
                </div>
                <div>
                  <i className="fa fa-user-times fs-17 mr-1 color-strong-blue-2"></i>
                  <span>{age_min} - {age_max} лет</span>
                </div>
              </div>
              <a href="#" className="send-friend">Предложить другу</a>
              <button>Откликнуться</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
