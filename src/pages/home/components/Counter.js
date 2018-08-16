import React from 'react';
import CounterSection from './CounterSection';

const Counter = () => {
  return (
    <div>
      <section className="mt-75 mu-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-counter-area">
                <div className="mu-counter-block">
                  <div className="row">
                    <CounterSection text={<div>Года Опыта</div>} to={4} faClassName={'clock-o'} />
                    <CounterSection text={<div>Активных <br/> вакансии</div>} to={364} faClassName={'suitcase'} />
                    <CounterSection text={<div>Специалиста <br /> получивших <br /> работу</div>} to={104} faClassName={'user'}  />
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
