import React from 'react';
import internal_routes from '../../../config/internal_routes';
import { Link } from 'react-router-dom';

const CallBack = () => {
  return (
    <div id="mu-call-to-action" className="mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-call-to-action-area">
              <div className="mu-call-to-action-left">
                <h2>Хотите личную консультацию или больше подробностей?</h2>
                <p>Оставьте заявку на странице контактов и наш менеджер наберет вас в течении очень короткого промежутка времени</p>
              </div>
              <Link to={internal_routes.contacts} className="mu-primary-btn mu-quote-btn">Контакты<i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBack;


