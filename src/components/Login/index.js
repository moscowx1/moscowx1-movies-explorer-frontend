import Form from '../Form';

import paths from '../../utils/constants/paths';

import './index.css';

const Login = () => {
  const inputs = [
    {
      name: 'email',
      caption: 'E-mail',
      attr: {
        placeholder: 'e-mail',
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
      }
    },
  ];

  const link = {
    link: paths.register,
    text: 'Войти'
  }

  return (
    <section className="login">
      <Form name='login'
        inputs={inputs}
        submitTxt='Зарегестрироваться'
        caption='Уже зарегистрированы?'
        link={link} />
    </section>
  );
};

export default Login;
