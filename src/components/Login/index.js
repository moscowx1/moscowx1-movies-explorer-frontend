import Form from '../Form';

import paths from '../../utils/constants/paths';

import './index.css';

const Login = () => {
  const inputs = [
    {
      type: 'text',
      name: 'Имя',
    },
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
    link: paths.signIn,
    text: 'Войти'
  }

  return (
    <section className="login">
      <Form name='login'
            inputs={ inputs }
            submit='Зарегестрироваться'
            caption='Уже зарегистрированы?'
            link={ link }/>
    </section>
  );
};

export default Login;
