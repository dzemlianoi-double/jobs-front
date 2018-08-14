import React from 'react';
import CounterSection from './CounterSection';

const Counter = () => {
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
                    <CounterSection text={'Года Опыта'} to={4} faClassName={'clock-o'} />
                    <CounterSection text={'Активных вакансии'} to={364} faClassName={'suitcase'} />
                    <CounterSection text={'Специалиста получивших работу'} to={104} faClassName={'user'}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
