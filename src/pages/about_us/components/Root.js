import React, { Component } from 'react';

import WhoWe from '../../home/components/WhoWe';
import T from '../../../store/translations';

import '../../../assets/styles/_about-us.scss';
import MetaTitle from '../../utils/components/MetaTitle';

export default class AboutUs extends Component {
  render () {
    return (
      <section className="part-about-us">
        <MetaTitle title="about_us" />
        <div className="container-fluid">
          <div className="row">
            <div className="col back-img">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <h1 className="title-about-company">{T.translate('about_us.about_company')}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col who-are-we">
                    <span>
                      {T.translate('about_us.who_are_we')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WhoWe />
          <div className="container">
            <div className="row text-company-pluses">
              <div className="col-12 col-sm-6">
                <div className="row">
                  <div className="col col-sm-12 text-center fs-21">
                    <strong>
                      {T.translate('about_us.pluses_title')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="row">
                  <div className="col-2 col-sm-2"></div>
                  <div className="col-10 col-sm-10">
                    <ul className="about-us-pluses">
                      <div className="row">
                        <div className="col-2 col-sm-1"><i className="fa fa-check-circle"></i></div>
                        <div className="col-10 col-sm-11"><li>{T.translate('about_us.plus_checked_vacancy')}</li></div>
                      </div>
                      <div className="row">
                        <div className="col-2 col-sm-1"><i className="fa fa-check-circle"></i></div>
                        <div className="col-10 col-sm-11"><li>{T.translate('about_us.plus_real_propose')}</li></div>
                      </div>
                      <div className="row">
                        <div className="col-2 col-sm-1"><i className="fa fa-check-circle"></i></div>
                        <div className="col-10 col-sm-11"><li>{T.translate('about_us.plus_real_employers')}</li></div>
                      </div>
                      <div className="row">
                        <div className="col-2 col-sm-1"><i className="fa fa-check-circle"></i></div>
                        <div className="col-10 col-sm-11"><li>{T.translate('about_us.plus_eco_time_money')}</li></div>
                      </div>
                    </ul>
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
