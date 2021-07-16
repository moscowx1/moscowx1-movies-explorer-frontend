import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import AllMovies from '../Movies/AllMovies.js';
import SavedMovies from '../Movies/SavedMovies.js';
import Register from '../Register/';
import Login from '../Login';
import Profile from '../Profile';
import NotFound from '../Errors/NotFound';
import Menu from '../Menu';
import ProtectedRoute from '../ProtectedRoute';

import { UserContext } from '../../context/userContext';
import paths from '../../utils/constants/paths';
import MainApi from '../../utils/api/MainApi';
import MoviesApi from '../../utils/api/MoviesApi';

import './index.css';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => setIsMenuOpened(true);
  const closeMenu = () => setIsMenuOpened(false);

  const { setUser } = useContext(UserContext);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  const loadUserInfo = () => MainApi
    .getInfo()
    .then(({ name, email }) => setUser(name, email));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      MainApi.setToken(token);
      MoviesApi.setToken(token);
      loadUserInfo()
        .then(() => setLoggedIn(true));
    }
  }, []);

  const login = (email, password) =>
    MainApi
      .login(email, password)
      .then(({ token }) => {
        token = `Bearer ${token}`;
        localStorage.setItem('token', token);
        MainApi.setToken(token);
        MoviesApi.setToken(token);
        setLoggedIn(true);
      });

  const handleLogin = ({ email, password }) => {
    login(email, password)
      .then(() => loadUserInfo)
      .then(() => history.push(paths.movies))
      .catch(() => alert('Ошибка при входе'));
  };

  const handleRegister = ({ name, email, password }) => {
    MainApi
      .register(name, email, password)
      .then(() => login(name, password))
      .then(() => loadUserInfo)
      .then(() => history.push(paths.movies))
      .catch((err) => {
        console.log(err);
        alert('Ошибка при регистрации');
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    MainApi.removeToken();
    MoviesApi.removeToken();
    setLoggedIn(false);
  };

  return (
    <div className='app'>
      <Header handleMenuClick={openMenu}
        isLoggedIn={isLoggedIn} />
      <Switch>
        <ProtectedRoute path={paths.savedMovies}
          component={SavedMovies}
          isLoggedIn={isLoggedIn} />
        <ProtectedRoute path={paths.movies}
          component={AllMovies}
          isLoggedIn={isLoggedIn} />
        <ProtectedRoute path={paths.profile}
          component={Profile}
          isLoggedIn={isLoggedIn}
          logout={logout} />
        <Route path={paths.main} exact={true}>
          <Main />
        </Route>
        <Route path={paths.register}>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path={paths.login}>
          <Login handleLogin={handleLogin} />
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
