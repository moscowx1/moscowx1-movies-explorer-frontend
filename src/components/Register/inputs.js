const inputs = [
  {
    name: 'name',
    caption: 'Имя',
    attr: {
      type: 'text',
      placeholder: 'имя',
      required: 'required',
      minLength: 2,
      pattern: '^[a-zA-zа-яА-Я ]*$',
    },
  },
  {
    name: 'email',
    caption: 'E-mail',
    attr: {
      placeholder: 'E-mail',
      type: 'email',
      required: 'required',
      minLength: 2,
    }
  },
  {
    name: 'password',
    caption: 'Пароль',
    attr: {
      placeholder: 'пароль',
      type: 'password',
      required: 'required',
      minLength: 2,
    }
  },
];

export default inputs;
