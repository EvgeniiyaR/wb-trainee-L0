const form = document.querySelector('#form-submit');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const innNumber = document.querySelector('#inn-number');

const validateForm = (e) => {
  e.preventDefault();
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    innNumber: innNumber.value
  };

  if (formData.firstName === '') {
    const error = firstName.parentElement.querySelector('.main__input-text');
    error.classList.add('main__input-text_type_error');
    firstName.classList.add('main__input_type_error');
    error.textContent = 'Укажите имя';
  }

  if (formData.lastName === '') {
    const error = lastName.parentElement.querySelector('.main__input-text');
    error.classList.add('main__input-text_type_error');
    lastName.classList.add('main__input_type_error');
    error.textContent = 'Введите фамилию';
  }

  if (formData.email === '') {
    const error = email.parentElement.querySelector('.main__input-text');
    error.classList.add('main__input-text_type_error');
    email.classList.add('main__input_type_error');
    error.textContent = 'Укажите электронную почту';
  }

  if (formData.phoneNumber === '') {
    const error = phoneNumber.parentElement.querySelector('.main__input-text');
    error.classList.add('main__input-text_type_error');
    phoneNumber.classList.add('main__input_type_error');
    error.textContent = 'Укажите номер телефона';
  }

  if (formData.innNumber === '') {
    const error = innNumber.parentElement.querySelector('.main__input-text');
    error.classList.add('main__input-text_type_error');
    innNumber.classList.add('main__input_type_error');
    error.textContent = 'Укажите ИНН';
  }
};

const validateFirstName = (e) => {
  const value = e.target.value;
  const error = e.target.parentElement.querySelector('.main__input-text');
  const input = e.target;

  if (value) {
    error.textContent = '';
    error.classList.remove('main__input-text_type_error');
    input.classList.remove('main__input_type_error');
  }
};

const formatName = (e) => {
  const value = e.target.value;
  const error = e.target.parentElement.querySelector('.main__input-text');
  const input = e.target;

  if (error.classList.contains('main__input-text_type_error')) {
    if (value !== '') {
      error.textContent = '';
      input.classList.remove('main__input_type_error');
      error.classList.remove('main__input-text_type_error');
    }
  }
};

const validateLastName = (e) => {
  const value = e.target.value;
  const error = e.target.parentElement.querySelector('.main__input-text');

  if (value) {
    error.textContent = '';
  }
};

const validateEmail = (e) => {
  const target = e.target;
  const value = e.target.value;
  const error = e.target.parentElement.querySelector('.main__input-text');
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (pattern.test(value) || value === '') {
    error.textContent = '';
    error.classList.remove('main__input-text_type_error');
    target.classList.remove('main__input_type_error');
  } else {
    error.textContent = 'Проверьте адрес электронной почты';
    error.classList.add('main__input-text_type_error');
    target.classList.add('main__input_type_error');
  }
};

const formatEmail = (e) => {
  const target = e.target;
  const input = e.target.value;
  const error = e.target.parentElement.querySelector('.main__input-text');
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (error.classList.contains('main__input-text_type_error')) {
    if (pattern.test(input) || input === '') {
      error.textContent = '';
      target.classList.remove('main__input_type_error');
      error.classList.remove('main__input-text_type_error');
    } else {
      error.textContent = 'Проверьте адрес электронной почты';
      error.classList.add('main__input-text_type_error');
      target.classList.add('main__input_type_error');
    }
  }
};

let formattedValuePhoneNumber = '';
const formatPhoneNumber = (e) => {
  const target = e.target;
  const input = e.target.value.replace(/\D/g, '');
  const error = e.target.parentElement.querySelector('.main__input-text');
  const pattern = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/;

  if (input.length === 1) {
    formattedValuePhoneNumber += '+7 ' + input.slice(input.length - 1, input.length);
  } else if (input.length > 2 && input.length < 12 && e.target.value.length <=16) {
    formattedValuePhoneNumber += input.slice(input.length - 1, input.length);
    if (input.length === 4) {
      formattedValuePhoneNumber += ' ';
    } else if (input.length > 4) {
      if (input.length === 7) {
        formattedValuePhoneNumber += '-';
      } else if (input.length === 9) {
        formattedValuePhoneNumber += '-';
      }
    }
  }

  if (error.classList.contains('main__input-text_type_error')) {
    if (pattern.test(formattedValuePhoneNumber) || input === '') {
      error.textContent = '';
      target.classList.remove('main__input_type_error');
      error.classList.remove('main__input-text_type_error');
    } else {
      error.textContent = 'Формат: +7 999 999-99-99';
      error.classList.add('main__input-text_type_error');
      target.classList.add('main__input_type_error');
    }
  }
  e.target.value = formattedValuePhoneNumber;
};

const validatePhoneNumber = (e) => {
  const target = e.target;
  const value = e.target.value;
  const error = e.target.parentElement.querySelector('.main__input-text');
  const pattern = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/;

  if (pattern.test(value) || value === '') {
    error.textContent = '';
    error.classList.remove('main__input-text_type_error');
    target.classList.remove('main__input_type_error');
  } else {
    error.textContent = 'Формат: +7 999 999-99-99';
    error.classList.add('main__input-text_type_error');
    target.classList.add('main__input_type_error');
  }
};

const validateInnNumber = (e) => {
  const target = e.target;
  const value = e.target.value;
  const error = e.target.parentElement.querySelector('.main__input-text');
  const pattern = /\d/g;

  if ((pattern.test(value) && value.length === 14) || value === '') {
    error.textContent = '';
    error.classList.remove('main__input-text_type_error');
    target.classList.remove('main__input_type_error');
  } else {
    error.textContent = 'Проверьте ИНН';
    error.classList.add('main__input-text_type_error');
    target.classList.add('main__input_type_error');
  }
};

let formattedValueInnNumber = '';
const formatInnNumber = (e) => {
  const target = e.target;
  const input = e.target.value.replace(/\D/g, '');
  const error = e.target.parentElement.querySelector('.main__input-text');
  const pattern = /\d/g;

  if (input.length >= 15) {
    formattedValueInnNumber += '';
  } else {
    formattedValueInnNumber = input;
  }
  if (error.classList.contains('main__input-text_type_error')) {
    if ((pattern.test(formattedValueInnNumber) && formattedValueInnNumber.length === 14) || formattedValueInnNumber === '') {
      error.textContent = '';
      error.classList.remove('main__input-text_type_error');
      target.classList.remove('main__input_type_error');
    } else {
      error.textContent = 'Проверьте ИНН';
      error.classList.add('main__input-text_type_error');
      target.classList.add('main__input_type_error');
    }
  }
  e.target.value = formattedValueInnNumber;
};

const preventNonNumeric = (e) => {
  let count = 1;
  if (e.key === 'Backspace') {
    if (phoneNumber.value.length === 7 || phoneNumber.value.length === 11 || phoneNumber.value.length === 14) {
      count = 2;
    }
    phoneNumber.value = phoneNumber.value.slice(0, formattedValuePhoneNumber.length - count);
    formattedValuePhoneNumber = phoneNumber.value;
    e.preventDefault();
  }
};

form.addEventListener('submit', validateForm);
firstName.addEventListener('blur', validateFirstName);
firstName.addEventListener('input', formatName);
lastName.addEventListener('blur', validateLastName);
lastName.addEventListener('input', formatName);
email.addEventListener('blur', validateEmail);
email.addEventListener('input', formatEmail);
phoneNumber.addEventListener('blur', validatePhoneNumber);
phoneNumber.addEventListener('input', formatPhoneNumber);
phoneNumber.addEventListener('keydown', preventNonNumeric);
innNumber.addEventListener('blur', validateInnNumber);
innNumber.addEventListener('input', formatInnNumber);
