import React from 'react';

import { Link } from 'react-router-dom';
import T from '../../../store/translations';

const WhoWe = () => {
  return(
    <section className='mu-about mt-80 mb-50'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='mu-about-area'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='mu-title'>
                    <h2>{T.translate('who_we.caption_whowe')}</h2>
                    <p className="we-title">{T.translate('who_we.our_headline')}</p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className="img-nakaz"></div>
                    </div>
                  </div>
                  <div className='mu-about-left mt-25'>
                    <ul>
                      <li>
                        <h3>{T.translate('who_we.we_provide')}</h3>
                        <T.p text="who_we.provide_values_1" />
                        <T.p text="who_we.provide_values_2" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='mu-about-right'>
                        <ul>
                          <li>
                            <h3>{T.translate('who_we.our_benefits')}</h3>
                            <T.p text="who_we.benefits_values_1" />
                            <T.p text="who_we.benefits_values_2" />
                            <T.p text="who_we.benefits_values_3" />
                            <T.p text="who_we.benefits_values_4" />
                          </li>
                          <li>
                            <h3>{T.translate('who_we.our_mission')}</h3>
                            <T.p text="who_we.mission_value" />
                          </li>
                          <li>
                            <h3>{T.translate('who_we.our_goal')}</h3>
                            <T.p text="who_we.goal_values" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className="img-certificate"></div>
                      <div className='mu-about-left mt-25'>
                        <ul>
                          <li>
                            <h3>{T.translate('who_we.we_offer')}</h3>
                            <T.p text="who_we.offer_value" />
                            <T.span text="who_we.offer_package_value_1" />
                            <T.span text="who_we.more" />
                            <Link className="display-inline" to="/service/26"> {T.translate('who_we.packege_profi')}</Link>
                            <p>
                              <T.span text="who_we.offer_package_value_2" />
                              <Link className="display-inline" to="/service/25"> {T.translate('who_we.packege_biometric_passport')}</Link>
                            </p>
                            <T.span text="who_we.offer_package_value_3" />
                            <T.span text="who_we.more" />
                            <Link className="display-inline" to="/service/2"> {T.translate('who_we.packege_standart')}</Link>
                          </li>
                        </ul>
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
  );
};

export default WhoWe;
