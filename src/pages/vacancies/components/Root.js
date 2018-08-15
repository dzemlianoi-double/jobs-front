import React, { Component } from 'react';

export default class Vacancies extends Component {
  render () {
    return (
      <section id='mu-vacancies'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='mu-vacancies-area'>
                <div className='row'>
                  <div className='col-md-12 mu-vacancies-search'>
                    <span>Вакансия</span>
                    <input />
                    <span>Регион</span>
                    <input />
                    <button className="ml-25 btn btn-lg">Найти</button>
                  </div>
                </div>
                <div className='row main'>
                  <div className='col-md-3 padding-0'>
                    <div className='mu-filter'>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="filter-salary">
                            <p>Заработная плата</p>
                            <div className="block-salary">
                              <div className="row">
                                <div className="col-md-6">
                                  <input />
                                </div>
                                <div className="col-md-6">
                                  <input />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="filter-experience-block">
                            <p>Опыт Работы</p>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="filter-experience">
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-9 padding-0'>
                    <div className="row">
                      <div className='col-md-12 mu-vacancies-list'>
                        <div className="how-vacancies">
                          <p className="city-work">Работа в Днепре</p>
                          <p>
                            <span className="mean-works"><b>4859</b> вакансий</span>
                            <span className="mean-salary"><b>100 000 грн</b> средняя заработная плата</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12 padding-30'>
                        <div className="row mu-vacancy">
                          <div className="col-md-9">
                            <p className="title-vacancy">
                              <span>PHP Developer</span>
                            </p>
                            <p className="title-company">Customer Accounts Orchestrator</p>
                            <p className="desc">Aut consectetur ad quasi consequatur vel voluptatibus labore iure quidem. Doloribus quia asperiores aut aut quia aut. Aut vel eaque omnis. Beatae voluptatem ullam mollitia natus aliquid. Numquam ducimus et quibusdam corporis eveniet eveniet. Recusandae aut aut et voluptatem assumenda corrupti quasi.
                              <a href="#">Полное описание</a>
                            </p>
                            <p className="date-added">Добавлено: 15.08.2018</p>
                          </div>
                          <div className="col-md-3">
                            <p className="salary">20000 грн</p>
                            <div className="city">
                              <span>Днепр</span>
                            </div>
                            <a href="#" className="send-friend">Предложить другу</a>
                            <button>Откликнуться</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
      </section>
    );
  }
}
