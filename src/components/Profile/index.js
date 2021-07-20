import { UserContext } from '../../context/userContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import paths from '../../utils/constants/paths';
import MainApi from '../../utils/api/MainApi';

import './index.css';
import isEmail from 'validator/es/lib/isEmail';

const Profile = ({ logout }) => {
  const { user } = useContext(UserContext);

  const history = useHistory();

  const [email, setEmail] = useState(user.email);
  const [isEmailValid, setEmailValidity] = useState(true);

  const [name, setName] = useState(user.name);
  const [isNameValid, setNameValidity] = useState(true);

  const isUserInfoChanged = () => name !== user.name || email !== user.email;

  const handleLogout = (evt) => {
    logout();
    history.push(paths.main);
  }

  const handleNameChange = (evt) => {
    const value = evt.target.value;
    const valid = evt.target.validity.valid;
    setName(value);
    setNameValidity(valid);
  }

  const handleEmailChange = (evt) => {
    const value = evt.target.value;
    const valid = evt.target.validity.valid;
    setEmail(value);
    setEmailValidity(valid);
  }

  const handleChange = (evt) => {
    evt.preventDefault();
    MainApi
      .updateMe({ name, email })
      .then(() => alert('Успешно'))
      .catch(() => alert('Ошибка'));
  }

  return (
    <section className='profile'>
      <form className='profile__content'
        onSubmit={handleChange}>
        <h2 className='profile__title'>{`Привет, ${name}!`}</h2>
        <div className='profile__desc'>
          <p>Имя</p>
          <input className='profile__input'
            type='text'
            minLength={2}
            required={true}
            defaultValue={user.name}
            onChange={handleNameChange} />
        </div>
        <div className='profile__desc'>
          <p>E-mail</p>
          <input className='profile__input'
            type='email'
            required={true}
            minLength={2}
            defaultValue={user.email}
            onChange={handleEmailChange} />
        </div>
        <div className='profile__buttons'>
          <input className='profile__button'
            type='submit'
            disabled={!isNameValid || !isEmailValid || !isUserInfoChanged()}
            value='Редактировать' />
          <button className='profile__button profile__button_exit'
            onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;