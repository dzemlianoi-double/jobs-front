import React, { Component } from 'react';
import CountTo from 'react-count-to';

export default class Counter extends Component {
  render() {
    const fn = value => <span>{value}</span>;
    return (
        <div>
          
          <section className="mt-75" id="mu-counter">
          <div className="horizontal-line-about"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="mu-counter-area">
                    <div className="mu-counter-block">
                      <div className="row">
                        <div className="col-md-3 col-sm-6">
                          <div className="mu-single-counter">
                            <span className="fa fa-suitcase"></span>
                            <div className="mu-single-counter-content">
                              <CountTo to={1234} speed={5000}>{fn}</CountTo>
                              {/* <div className="counter-value" data-count="250">0</div> */}
                              <h5 className="mu-counter-name">Project</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="mu-single-counter">
                            <span className="fa fa-user"></span>
                            <div className="mu-single-counter-content">
                              <CountTo to={1234} speed={5000}>{fn}</CountTo>
                              {/* <div className="counter-value" data-count="56">0</div> */}
                              <h5 className="mu-counter-name">Clients</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="mu-single-counter">
                            <span className="fa fa-coffee"></span>
                            <div className="mu-single-counter-content">
                              <CountTo to={1234} speed={5000}>{fn}</CountTo>
                              {/* <div className="counter-value" data-count="15">0</div> */}
                              <h5 className="mu-counter-name">Stuff</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="mu-single-counter">
                            <span className="fa fa-clock-o"></span>
                            <div className="mu-single-counter-content">
                              <CountTo to={1234} speed={5000}>{fn}</CountTo>

                              {/* <div className="counter-value" data-count="290">0</div> */}
                              <h5 className="mu-counter-name">Day</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}
