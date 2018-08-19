import React, { Component } from 'react';
import office from '../../../assets/images/office.jpg';

export default class WhoWe extends Component {
  render() {
    return(
      <section className='mu-about'>
        <div className="horizontal-line"></div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='mu-about-area'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='mu-title'>
                      <h2>Кто мы</h2>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='mu-about-left'>
                      <img src={office} alt='office' />
                    </div>
                  </div>  
                  <div className='col-md-6'>
                    <div className='mu-about-right'>
                      <ul>
                        <li>
                          <h3>Наша Миссия</h3>
                          <p> 
                            Помогать настоящим специалистам своего дела находить комфортное место для работы
                          </p>
                        </li>
                        <li>
                          <h3>Наша Цель</h3>
                          <p>
                            Сделать процесс трудоустройства специалистов простым и как для работника, так и для работодателя
                          </p>
                        </li>
                        <li>
                          <h3>Наши ценности</h3>
                          <p>
                            Открытость к общению и вопросам
                            Честность перед собой и другими.
                            Ответственность за каждого специалиста.
                            Развитие себя как компании, клиентов и рынка в целом
                          </p>
                        </li>
                      </ul>
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