import React, { Component } from 'react';
import house from '../../assets/images/house_1.jpg';

export default class Vacancy extends Component {
  render () {
    return (
      <section className='mu-vacancies'>
        <div className='container mt-50 mb-50'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='row info-vacancy'>
                <div className='col-md-12 padding-0'>
                  <div className="vacancy">
                    <p className="title-vacancy">Фрезеровщик 3 разряда</p>
                    <p className="title-company">Токарь, Фрезеровщик, Филантроп</p>
                    <div className="row">
                      <div className="col-md-7 mt-10">
                        <img src={house} />
                      </div>
                      <div className="col-md-5 mt-10">
                        <div className="conditions">
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-money fs-17 mr-2 color-strong-blue-2" aria-hidden="true"></i>
                                Заработная плата:
                              </div>
                              <div className="col-md-6 info">100500</div>
                            </div>
                          </div>
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-map-pin fs-17 mr-2 color-strong-blue-2" aria-hidden="true"></i>
                                Страна:
                              </div>
                              <div className="col-md-6 info">Нигерия</div>
                            </div>
                          </div>
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-venus-mars fs-17 mr-2 color-strong-blue-2"></i>
                                Пол:
                              </div>
                              <div className="col-md-6 info">не имеет значение</div>
                            </div>
                          </div>
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-user-times fs-17 mr-2 color-strong-blue-2"></i>
                                Возраст:
                              </div>
                              <div className="col-md-6 info">20 - 65 лет</div>
                            </div>
                          </div>
                          <div className="wrapper-info">
                            <div className="row">
                              <div className="col-md-6 info">
                                <i className="fa fa-child fs-17 mr-2 color-strong-blue-2"></i>
                                Опыт работы:
                              </div>
                              <div className="col-md-6 info">от 2 лет</div>
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
                        <p>
                            В небольшую аптеку на неполный рабочий день требуется уборщица.
                        </p>
                        <p>
                            Рабочее время - утро или вечер - по согласованию.В режиме убрали и ушли. 
                        </p>
                        <p>
                            Требования: без возрастных ограничений, при отсутствии серьезных проблем со здоровьем.
                        </p>
                        <p>
                            Условия работы: ЗП выплачиваем вовремя, порядочность гарантируем.
                        </p>
                        <p>
                            Телефон: 095−146−30−07, 098−070−75−08
                        </p>
                        <p>
                            Контактное лицо: Ольга Алексеевна 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}