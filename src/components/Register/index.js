import Form from '../Form';

import paths from "../../utils/constants/paths";

import './index.css';

const Register = () => {
  const inputs = [
    {
      name: 'E-mail',
      attr: {
        placeholder: 'E-mail',
        type: 'email',
        required: 'required',
      }
    },
    {
      name: 'password',
      attr: {
        placeholder: 'пароль',
        type: 'password',
        required : 'required',
      }
    },
  ];

  const link = {
    link: paths.signUp,
    text: 'Войти'
  }

  return (
    <section className="register">
      <Form name='register'
            inputs={ inputs }
            submit='Регистрация'
            caption='Ещё не зарегистрированы?'
            link={ link }/>
    </section>
  );
};

export default Register;
