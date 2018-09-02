import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import T from '../../../../store/translations';
import renderField from './renderField';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Обязательное к заполнению';
  } else if (values.name.length > 15) {
    errors.name = 'Длина имени не должна превышать 15 символов';
  }
  if (!values.email) {
    errors.email = 'Обязательное к заполнению';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Не верный email';
  }
  if (!values.phone_number) {
    errors.phone_number = 'Обязательное к заполнению';
  } else if (!/^\+380\d{2}\d{3}\d{2}\d{2}$/i.test(values.phone_number)) {
    errors.phone_number = 'Не верный номер телефона';
  }
  return errors;
};

class VacancyForm extends Component {
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
              placeholder="Иван Рубан"
              type="text"
            />
          </div>
          <div className="form-group">
            <Field
              name="phone_number"
              label={T.translate('vacancy_form.phone')}
              placeholder="+380хх-ххх-хх-хх"
              component={renderField}
              type="text"
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

export default reduxForm({ form: 'vacancy', validate })(VacancyForm);