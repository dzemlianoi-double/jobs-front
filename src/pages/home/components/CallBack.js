import React from 'react';
import internal_routes from '../../../config/internal_routes';
import { Link } from 'react-router-dom';

import T from '../../../store/translations';

const CallBack = () => {
  return (
    <div id="mu-call-to-action" className="mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-call-to-action-area">
              <div className="mu-call-to-action-left">
                <h2>{T.translate('callback.caption_callback')}</h2>
                <T.p text="callback.text"/>
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


