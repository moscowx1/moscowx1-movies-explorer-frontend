import Form from '../Form';

import paths from '../../utils/constants/paths';

import './index.css';

const Login = () => {
  const inputs = [
    {
      name: 'Имя',
      attr: {
        type: 'text',
        placeholder: 'Имя',
        required: 'required',
        minLength: 2,
      },
    },
    {
      name: 'E-mail',
      attr: {
        placeholder: 'e-mail',
        type: 'email',
        required: 'required',
        minLength: 2,
      }
    },
    {
      name: 'password',
      attr: {
        placeholder: 'пароль',
        type: 'password',
        required: 'required',
      }
    },
  ];

  const link = {
    link: paths.signIn,
    text: 'Войти'
  }

  return (
    <section className="login">
      <Form name='login'
        inputs={inputs}
        submit='Зарегестрироваться'
        caption='Уже зарегистрированы?'
        link={link} />
    </section>
  );
};

export default Login;
