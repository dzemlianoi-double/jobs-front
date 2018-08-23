import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class VacancyForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="modal-form-respond mt-15">
        <div className="form-group">
          <label htmlFor="InputName">Имя:</label>
          <Field id="InputName" name="name" className="form-control" placeholder="Имя" component="input" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="InputPhoneNumber">Телефон:</label>
          <Field id="InputPhoneNumber" name="phone_number" className="form-control" placeholder="Телефон" component="input" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail">Email address</label>
          <Field name="email" id="InputEmail" className="form-control" placeholder="Email" component="input" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="InputInfo">Дополнительная информация:</label>
          <Field id="InputInfo" name="text" className="form-control" placeholder="Дополнительная информация" component="textarea" />
        </div>
        <div className="horizontal-line"></div>
        <button type="submit">Отправить 
          <span className="ml-1 fa fa-long-arrow-right"></span>
        </button>
      </form>
    );
  }  
}

export default reduxForm({ form: 'vacancy' })(VacancyForm);
