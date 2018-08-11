import React, { Component } from 'react';

export default class NotFound extends Component {
  render () {
    return (
      <main>
        <section className="mu-error">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-error-area">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mu-title">
                        <h2>Oops! This page could not be found!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.</p>
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
                    <a href="#" className="mu-back-to-home">Back to home <span className="fa fa-long-arrow-right"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
