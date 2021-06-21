import './index.css';

const Profile = () => {
  return (
    <section className='profile'>
      <div className='profile__content'>
        <h2 className='profile__title'>Привет, username!</h2>
        <div className='profile__desc'>
          <p>Имя</p>
          <p>Имя</p>
        </div>
        <div className='profile__desc'>
          <p>E-mail</p>
          <p>email@email.email</p>
        </div>
        <div className='profile__buttons'>
          <button className='profile__button'>Редактировать</button>
          <button className='profile__button profile__button_exit'>Выйти из аккаунта</button>
        </div>
      </div>
    </section>
  );
}

export default Profile;