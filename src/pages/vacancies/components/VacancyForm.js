import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import T from '../../../store/translations';

class VacancyForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="modal-form-respond mt-15">
        <div className="form-group">
          <label htmlFor="InputName">{T.translate('vacancy_form.name')}</label>
          <Field id="InputName" name="name" className="form-control" placeholder="Иван Иванов" component="input" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="InputPhoneNumber">{T.translate('vacancy_form.phone')}</label>
          <Field id="InputPhoneNumber" name="phone_number" className="form-control" placeholder="+38ххх-ххх-хх-хх" component="input" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail">{T.translate('vacancy_form.email')}</label>
          <Field name="email" id="InputEmail" className="form-control" placeholder="Email" component="input" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="InputInfo">{T.translate('vacancy_form.information')}</label>
          <Field id="InputInfo" name="text" className="form-control" component="textarea" />
        </div>
        <div className="horizontal-line"></div>
        <button type="submit">{T.translate('vacancy_form.send')} 
          <span className="ml-1 fa fa-long-arrow-right"></span>
        </button>
      </form>
    );
  }  
}

export default reduxForm({ form: 'vacancy' })(VacancyForm);
