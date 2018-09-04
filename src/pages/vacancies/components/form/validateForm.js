export const validate = values => {
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
