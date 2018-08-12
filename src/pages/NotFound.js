import React, { Component } from 'react';

export default class NotFound extends Component {
  render () {
    return (
      <section className="mu-error">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-error-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>Упс! Этой страницы больше не существует</h2>
                      <p>Небольшая инфа</p>
                    </div>
                  </div>
                </div>
                <div className="mu-error-content">
                  <div className="mu-error-text">
                    <div className="mu-backdrop">
                      <p className="mu-text">404</p>
                      <div className="mu-overlay"></div>
                    </div>
                  </div>
                  <div className="mu-error-search">
                    <form className="mu-subscribe-form">
                      <input className="input-search" placeholder="Write your e-mail here" type="email" />
                      <button className="mu-subscribe-btn">Search</button>
                    </form>
                  </div>
                  <a href="#" className="mu-back-to-home">На главную<span className="fa fa-long-arrow-right"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
