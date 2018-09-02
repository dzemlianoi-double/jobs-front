import React from 'react';

import T from '../../../store/translations';
import office from '../../../assets/images/office.jpg';

const WhoWe = () => {
  return(
    <section className='mu-about mt-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='mu-about-area'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='mu-title'>
                    <h2>{T.translate('who_we.caption_whowe')}</h2>
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
                        <h3>{T.translate('who_we.our_mission')}</h3>
                        <T.p text="who_we.text_mission" />
                      </li>
                      <li>
                        <h3>{T.translate('who_we.our_goal')}</h3>
                        <T.p text="who_we.text_goal" />
                      </li>
                      <li>
                        <h3>{T.translate('who_we.our_values')}</h3>
                        <T.p text="who_we.text_values_1" />
                        <T.p text="who_we.text_values_2" />
                        <T.p text="who_we.text_values_3" />
                        <T.p text="who_we.text_values_4" />
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
};

export default WhoWe;