import { UserContext } from '../../context/userContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import paths from '../../utils/constants/paths';
import MainApi from '../../utils/api/MainApi';

import './index.css';


const Profile = ({ logout }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isChangeDisabled, setIsChangeDisabled] = useState(true);

  const updateChangeState = () => setIsChangeDisabled(email === user.email && name === user.name);

  console.log(isChangeDisabled);
  const handleLogout = (evt) => {
    logout();
    history.push(paths.main);
  }

  const handleNameChange = (evt) => {
    setName(evt.target.value);
    updateChangeState();
  }

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
    updateChangeState();
  }

  const handleChange = (evt) => {
    MainApi
    .updateMe({ name, email })
    .then(() => updateChangeState())
    .catch(() => alert('Ошибка'));
  }

  return (
    <section className='profile'>
      <div className='profile__content'>
        <h2 className='profile__title'>{`Привет, ${user.name}!`}</h2>
        <div className='profile__desc'>
          <p>Имя</p>
          <input className='profile__input'
            type='text'
            defaultValue={user.name}
            onChange={handleNameChange} />
        </div>
        <div className='profile__desc'>
          <p>E-mail</p>
          <input className='profile__input'
            type='text'
            defaultValue={user.email}
            onChange={handleEmailChange} />
        </div>
        <div className='profile__buttons'>
          <button className='profile__button'
            disabled={isChangeDisabled}
            onClick={handleChange}>
            Редактировать
          </button>
          <button className='profile__button profile__button_exit'
            onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;