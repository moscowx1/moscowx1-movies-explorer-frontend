import isEmail from 'validator/es/lib/isEmail';

const validate = (inputInfo) => {
  const {
    type = 'text',
    minLength = 0,
    maxLength = Number.MAX_VALUE,
    pattern } = inputInfo.attributes;

  const { value } = inputInfo;

  if (value.length < minLength) {
    return `Длина должна быть больше чем ${minLength}`;
  }

  if (value.length > maxLength) {
    return `Длина должна быть меньше чем ${maxLength}`;
  }

  if (pattern && !(new RegExp(pattern).test(value))) {
    return 'Значение не соответсвует шаблону';
  }

  if (type === 'email' && !isEmail(value)) {
    return 'E-mail не соответсвует шаблону';
  }

  return '';
};

export default validate;
