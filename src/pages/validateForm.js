export const validateForm = {
  
  isRequired: function(value) {
    return value ? undefined : 'Обязательное к заполнению';
  },

  maxLength15: function(value) {
    return (value.length < 15) ? undefined : 'Длина не должна превышать 15 символов';
  },

  isValidNumber: function(value) {
    return /^\+380\d{2}\d{3}\d{2}\d{2}$/i.test(value) ? undefined : 'Не верный номер телефона';
  },

  isValidEmail: function(value) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Не верный email';
  },

};
