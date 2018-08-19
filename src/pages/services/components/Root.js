import React, { Component } from 'react';

export default class Services extends Component {
  render () {
    return (
                
      <section id="mu-pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-pricing-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>Our Pricing Table</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis.</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mu-pricing-content">
                      <ul className="mu-pricing-table">
                        <li>
                          <div className="mu-pricing-single">
                            <div className="mu-pricing-single-icon">
                              <span className="fa fa-user"></span>
                            </div>
                            <div className="mu-pricing-single-title">
                              <h3>Рабочая виза и трудоустройство в Польше</h3>
                            </div>
                            <div className="mu-pricing-single-content">
                              <ul>
                                <li>Подбор вакансии. Рабочая виза. Трудоустройство. Дальнейшее сопровождение.</li>
                              </ul>
                            </div>
                            <div className="mu-single-pricebox">
                              <h4>29<span>грн</span></h4>
                            </div>
                            <a className="mu-buy-now-btn" href="#">Купить</a>
                          </div>
                        </li>
                        <li>
                          <div className="mu-pricing-single">
                            <div className="mu-pricing-single-icon">
                              <span className="fa fa-lock"></span>
                            </div>
                            <div className="mu-pricing-single-title">
                              <h3>Visa-work</h3>
                            </div>
                            <div className="mu-pricing-single-content">
                              <ul>
                                <li>Полный пакет документов для получения визы. Вакансия бесплатная.</li>
                              </ul>
                            </div>
                            <div className="mu-single-pricebox">
                              <h4>2500&#8372;<span></span></h4>
                            </div>
                            <a className="mu-buy-now-btn" href="#">Купить</a>
                          </div>
                        </li>
                        <li>
                          <div className="mu-pricing-single">
                            <div className="mu-pricing-single-icon">
                              <span className="fa fa-paper-plane"></span>
                            </div>
                            <div className="mu-pricing-single-title">
                              <h3>POLAND WORK</h3>
                            </div>
                            <div className="mu-pricing-single-content">
                              <ul>
                                <li>1.Приглашение 2.Страховка 3.Подбор вакансии 4.Анкета в визовый центр 5.Сопровождение</li>
                                <li>Срок оформления: 2-4 недели</li>
                              </ul>
                            </div>
                            <div className="mu-single-pricebox">
                              <h4>229₴</h4>
                            </div>
                            <a className="mu-buy-now-btn" href="#">Купить</a>
                          </div>
                        </li>
                      </ul>
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
