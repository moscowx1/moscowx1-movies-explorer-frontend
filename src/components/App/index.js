import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../Movies/SavedMovies.js';
import Register from '../Register/';
import Login from '../Login';
import Profile from '../Profile';
import NotFound from '../Errors/NotFound';
import Menu from '../Menu';
import ProtectedRoute from '../ProtectedRoute';

import { UserContext } from '../../context/userContext';
import paths from '../../utils/constants/paths';
import authApi from '../../utils/api/authApi';

import './index.css';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => setIsMenuOpened(true);
  const closeMenu = () => setIsMenuOpened(false);

  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const isLoggedIn = () => user !== {};


  const loadUserInfo = () => authApi
    .getInfo()
    .then(({ name, email }) => setUser(name, email))
    .catch((err) => console.log(err));

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      authApi.setToken(token);
      loadUserInfo();
    }
  }, []);

  const login = (email, password) =>
    authApi
      .login(email, password)
      .then(({ token }) => {
        token = `Bearer ${token}`;
        localStorage.setItem('token', token);
        authApi.setToken(token);
      });

  const handleLogin = ({ email, password }) => {
    login(email, password)
      .then(() => loadUserInfo)
      .then(() => history.push(paths.movies))
      .catch(() => alert('Ошибка при входе'));
  };

  const handleRegister = ({ name, email, password }) => {
    authApi
      .register(name, email, password)
      .then(() => login(name, password))
      .then(() => loadUserInfo)
      .then(() => history.push(paths.movies))
      .catch((err) => {
        console.log(err);
        alert('Ошибка при регистрации');
      });
  };

  return (
    <div className='app'>
      <Header handleMenuClick={openMenu} />
      <Switch>
        <ProtectedRoute path={paths.savedMovies}
          component={SavedMovies}
          isLoggedIn={isLoggedIn} />
        <ProtectedRoute path={paths.movies}
          component={Movies}
          isLoggedIn={isLoggedIn} />
        <Route path={paths.register}>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path={paths.login}>
          <Login handleLogin={handleLogin} />
        </Route>
        <ProtectedRoute path={paths.profile}
          component={Profile}
          isLoggedIn={isLoggedIn} />
        <Route path={paths.main} exact={true}>
          <Main />
        </Route>
        <Route path={paths.notFound}>
          <NotFound />
        </Route>
        <Redirect to={paths.notFound} />
      </Switch>
      <Menu isOpen={isMenuOpened}
        handleCloseClick={closeMenu} />
      <Footer />
    </div>
  );
}

export default App;
