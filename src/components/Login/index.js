import Form from '../Form';

import inputs from './inputs'
import paths from '../../utils/constants/paths';

import './index.css';

const Login = ({ handleLogin }) => {
  const link = {
    link: paths.register,
    text: 'Регистрация'
  }

  return (
    <section className="login">
      <Form name='login'
        inputs={inputs}
        submit={handleLogin}
        submitTxt='Зарегестрироваться'
        caption='Ещё не зарегистрированы'
        link={link} />
    </section>
  );
};

export default Login;
