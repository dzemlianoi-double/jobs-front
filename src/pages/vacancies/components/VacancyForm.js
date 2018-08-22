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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="phone_number">Телефон</label>
          <Field name="phone_number" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="text">Дополнительная информация</label>
          <Field name="text" component="input" />
        </div>
        <button type="submit">Отправить</button>
      </form>
    );
  }  
}

export default reduxForm({ form: 'vacancy' })(VacancyForm);
