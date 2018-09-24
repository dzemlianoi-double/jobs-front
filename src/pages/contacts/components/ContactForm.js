import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../vacancies/components/form/renderField';
import T from '../../../store/translations';

import { validateForm } from '../../utils/components/validateForm';

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit } className="contact-form">
        <div className="form-group mb-30 cont-inputs">
          <span className="titles-input">{T.translate('contacts_form.name')}</span>
          <Field
            label=""
            className="form-control"
            component={renderField}
            type="text"
            name="name"
            placeholder=""
            validate={[validateForm.isRequired, validateForm.maxLength15]}
          />
        </div>
        <div className="form-group mb-30 cont-inputs">
          <span className="titles-input">{T.translate('contacts_form.email')}</span>
          <Field
            label=""
            className="form-control"
            component={renderField}
            type="text"
            name="email"
            placeholder=""
            validate={[validateForm.isRequired, validateForm.isValidEmail]}
          />
        </div>
        <div className="form-group mb-30 cont-inputs">
          <span className="titles-input">{T.translate('contacts_form.phone')}</span>
          <Field
            label=""
            className="form-control"
            component={renderField}
            type="text"
            name="phone_number"
            placeholder=""
            validate={[validateForm.isRequired, validateForm.isValidNumber]}
          />
        </div>
        <div className="form-group mb-30 cont-inputs">
          <span className="titles-input">{T.translate('contacts_form.information')}</span>
          <Field
            className="form-control"
            component="textarea"
            rows="6"
            type="text"
            name="text"
            placeholder=""
          />
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button type="submit" className="btn-contact-form-send">
              {T.translate('contacts_form.send')}
              <span className="ml-1 fa fa-long-arrow-right"></span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'contacts' })(ContactForm);
