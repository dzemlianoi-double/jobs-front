import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderField from '../vacancies/components/form/renderField';

import T from '../../store/translations';
import { validateForm } from '../utils/components/validateForm';

class ServiceForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit} className="modal-form-respond mt-15">
          <div className="form-group">
            <Field
              name="name"
              label={T.translate('vacancy_form.name')}
              component={renderField}
              placeholder="Ваше Имя"
              type="text"
              validate={[validateForm.isRequired, validateForm.maxLength15]}
            />
          </div>
          <div className="form-group">
            <Field
              name="phone_number"
              label={T.translate('vacancy_form.phone')}
              placeholder="+380хх-ххх-хх-хх"
              component={renderField}
              type="text"
              validate={[validateForm.isRequired, validateForm.isValidNumber]}
            />
          </div>
          <div className="form-group">
            <Field
              name="email"
              id="InputEmail"
              className="form-control"
              placeholder="Email"
              component={renderField}
              type="email"
              label={T.translate('vacancy_form.email')}
              validate={[validateForm.isRequired, validateForm.isValidEmail]}
            />
          </div>
          <div className="form-group">
            <label>{T.translate('vacancy_form.information')}</label>
            <Field
              name="text"
              className="form-control"
              component="textarea"
            />
          </div>
          <div className="horizontal-line"></div>
          <button type="submit">{T.translate('vacancy_form.send')}
            <span className="ml-1 fa fa-long-arrow-right"></span>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'services' })(ServiceForm);
