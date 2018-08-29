import React from 'react';
import CounterSection from './CounterSection';

import T from '../../../../store/translations';

const Counter = () => {
  return (
    <section className="mb-100 mb-100" id="mu-counter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-counter-area">
              <div className="mu-counter-block">
                <div className="row">
                  <CounterSection text={
                    <div>
                      {T.translate('counter.experience')}
                    </div>
                  } to={4} faClassName={'clock-o'} />
                  <CounterSection text={
                    <div>
                      {T.translate('counter.action')}<br/>
                      {T.translate('counter.vacancy')}
                    </div>
                  } to={364} faClassName={'suitcase'} />
                  <CounterSection text={
                    <div>
                      {T.translate('counter.expert')}<br/>
                      {T.translate('counter.received')}<br/>
                      {T.translate('counter.work')}
                    </div>
                  } to={104} faClassName={'user'}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
