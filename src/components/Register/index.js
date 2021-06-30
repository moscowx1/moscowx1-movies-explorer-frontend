import { useHistory } from 'react-router-dom';

import Form from '../Form';

import inputs from './inputs';
import paths from '../../utils/constants/paths';
import authApi from '../../utils/api/authApi';

import './index.css';

const Register = () => {
  const history = useHistory();

  const link = {
    link: paths.login,
    text: 'Войти'
  }

  const register = (inputs) => {
    const email = inputs['email'];
    const pwd = inputs['password'];
    const name = inputs['name'];

    authApi
      .register(name, email, pwd)
      .then((res) => {
        //TODO: add userCtx
        history.push(paths.movies);
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка при регистрации');
      });
  }

  return (
    <section className='register'>
      <Form name='register'
        inputs={inputs}
        submitTxt='Регистрация'
        submit={register}
        caption='Ещё не зарегистрированы?'
        link={link} />
    </section>
  );
};

export default Register;
