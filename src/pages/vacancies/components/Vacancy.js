import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ShareButtons from './ShareButtons';
import Only from '../../basic/components/Only';
import internal_routes from '../../../config/internal_routes';
import T from '../../../store/translations';
import default_img from '../../../assets/images/worker_logo.png';

export default class Vacancy extends Component {
  static propTypes = {
    openVacancyModal: PropTypes.func.isRequired,
    closeVacancyModal: PropTypes.func.isRequired,
    vacancy: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      country_name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      salary_min: PropTypes.number.isRequired,
      specialities: PropTypes.array.isRequired,
      is_hot: PropTypes.bool.isRequired,
      created_at: PropTypes.isRequired,
      age_min: PropTypes.number.isRequired,
      age_max: PropTypes.number.isRequired,
      experience: PropTypes.number.isRequired,
      arrive_date: PropTypes.string.isRequired,
      main_photo: PropTypes.string.isRequired,
      sex: PropTypes.oneOf(['Any', 'Male', 'Female', 'Family']).isRequired
    })
  }

  state = {
    modalVacancy: {}
  }

  get experience() {
    const { experience } = this.props.vacancy;
    return experience ? `Опыт работы от ${experience} лет`: 'Опыт работы не важен';
  }

  get sex() {
    switch(this.props.vacancy.sex) {
    case('Male'): return 'Мужской';
    case('Female'): return 'Женский';
    case('Family'): return 'Семейная пара';
    default: return 'Не имеет значения';
    }
  }

  openModal = () => {
    this.props.openVacancyModal(this.props.vacancy);
  }

  render(){
    const { id, title, country_name, city, info, salary_min, specialities, is_hot, created_at, main_photo,
      age_min, age_max, arrive_date } = this.props.vacancy;

    return (
      <div className="row">
        <div className='col-md-12 padding-30'>
          <div className={`row mu-vacancy ${is_hot && 'vacancy-hot'}`}>
            <div className="hot-img"></div>
            <Only if={!main_photo} skipDiv>
              <div className="col-md-3 wrapper-image-vacancy-noimg">
                <div className="icon-noimg-vacancy">
                  <img className="img-responsive vacancy-photo" src={default_img} />
                </div>
              </div>
            </Only>
            <Only if={main_photo} skipDiv>
              <div className="col-md-3 wrapper-image-vacancy">
                <div>
                  <img className="img-responsive vacancy-photo" src={main_photo} />
                </div>
              </div>
            </Only>
            <div className="col-md-5">
              <Link to={internal_routes.vacancy(id)}>
                <p className="title-vacancy">
                  <span>{title}</span>
                </p>
                <Only if={specialities.length != 0}>
                  <p className="title-company">{specialities && _.map(specialities, 'title').join(', ')}</p>
                </Only>
                <p className="desc">
                  {_.truncate(info, { length: 200 })}
                  {T.translate('vacancy.full_description')}
                </p>
                <Only if={!!arrive_date} skipDiv>
                  <p className="date-added m-b-3">
                    <T.span text="vacancy.arrival_date:" />
                    {arrive_date && <Moment format="DD.MM.YYYY">{arrive_date}</Moment>}
                  </p>
                </Only>
                <p className="date-added">
                  <T.span text="vacancy.added_by:" />
                  <Moment format="DD.MM.YYYY">{created_at}</Moment>
                </p>
              </Link>
              <ShareButtons vacancy={this.props.vacancy}/>
            </div>
            <div className="col-md-4">
              <Link to={internal_routes.vacancy(id)}>
                <p className="salary">{salary_min} {T.translate('vacancy.valuta_uah')}</p>
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
                    <span>{age_min} - {age_max} {T.translate('vacancy.years')}</span>
                  </div>
                </div>
              </Link>
              <button onClick={this.openModal}>{T.translate('vacancy.respond')}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
