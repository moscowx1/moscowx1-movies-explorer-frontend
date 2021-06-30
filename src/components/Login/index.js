import { useHistory } from 'react-router';

import Form from '../Form';

import inputs from './inputs'
import paths from '../../utils/constants/paths';
import authApi from '../../utils/api/authApi';

import './index.css';

const Login = () => {
  const history = useHistory();

  const link = {
    link: paths.register,
    text: 'Регистрация'
  }

  const login = (inputs) => {
    const email = inputs['email'];
    const pwd = inputs['password'];

    authApi
      .login(email, pwd)
      .then((res) => {
        history.push(paths.movies);
      })
      .catch(err => console.log(err));
  };

  return (
    <section className="login">
      <Form name='login'
        inputs={inputs}
        submit={login}
        submitTxt='Зарегестрироваться'
        caption='Уже зарегистрированы?'
        link={link} />
    </section>
  );
};

export default Login;
