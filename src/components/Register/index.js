import Form from '../Form';

import inputs from './inputs';
import paths from '../../utils/constants/paths';

import './index.css';

const Register = ({ handleRegister }) => {
  const link = {
    link: paths.login,
    text: 'Войти'
  }

  return (
    <section className='register'>
      <Form name='register'
        inputs={inputs}
        submitTxt='Регистрация'
        submit={handleRegister}
        caption='Уже зарегистрированы?'
        link={link} />
    </section>
  );
};

export default Register;
