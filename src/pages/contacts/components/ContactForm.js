import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../vacancies/components/form/renderField';


class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit } className="contact-form">
        <div className="form-group mb-30 cont-inputs">
          <span className="titles-input">Имя</span>
          <Field
            label=""
            className="form-control"
            component={renderField}
            type="text"
            name="name"
            placeholder=""
          />
        </div>
        <div className="form-group mb-30 cont-inputs">
          <span className="titles-input">Email</span>
          <Field
            label=""
            className="form-control"
            component={renderField}
            type="text"
            name="email"
            placeholder=""
          />
        </div>
        <div className="form-group mb-30 cont-inputs">
          <span className="titles-input">Номер телефона</span>
          <Field
            label=""
            className="form-control"
            component={renderField}
            type="text"
            name="phone_number"
            placeholder=""
          />
        </div>
        <div className="form-group mb-30 cont-inputs">
          <span className="titles-input">Дополнительная информация</span>
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
              Отправить
              <span className="ml-1 fa fa-long-arrow-right"></span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'contacts' })(ContactForm);
