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

  const { user, setUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIng] = useState(false);
  const history = useHistory();


  const loadUserInfo = () => MainApi
    .getInfo()
    .then(({ name, email }) => setUser(name, email))
    .catch((err) => console.log(err));

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      MainApi.setToken(token);
      MoviesApi.setToken(token);
      setIsLoggedIng(true);
      loadUserInfo();
      history.push(paths.movies);
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
        setIsLoggedIng(true);
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
    localStorage.setItem('token',);
    MainApi.removeToken();
    MoviesApi.removeToken();
    setIsLoggedIng(false);
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
        <Route path={paths.register}>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path={paths.login}>
          <Login handleLogin={handleLogin} />
        </Route>
        <ProtectedRoute path={paths.profile}
          component={Profile}
          isLoggedIn={isLoggedIn}
          logout={logout} />
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
