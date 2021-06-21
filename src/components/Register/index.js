import Form from '../Form';

import paths from "../../utils/constants/paths";

import './index.css';

const Register = () => {
  const inputs = [
    {
      type: 'email',
      name: 'E-mail',
    },
    {
      type: 'password',
      name: 'password'
    }
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
