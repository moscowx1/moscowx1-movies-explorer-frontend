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

import activeHeart from '../../images/activeHeart.svg';
import heart from '../../images/heart.svg';
import cross from '../../images/cross.svg';
import './index.css';
import { trimChar } from '../../utils/stringFuncs';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => setIsMenuOpened(true);
  const closeMenu = () => setIsMenuOpened(false);

  const { setUser } = useContext(UserContext);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

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
        .then(() => setLoggedIn(true))
        .then(() => history.goBack());
    }
  }, []);

  useEffect(() => {
    const allMoviesLocal = JSON.parse(localStorage.getItem('movies'));
    if (allMoviesLocal) {
      setAllMovies(allMoviesLocal);
    }

    const savedMoviesLocal = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMoviesLocal) {
      setSavedMovies(savedMoviesLocal);
    }
  }, []);

  const saveAllMovies = (movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
    setAllMovies(movies);
  }

  const likeMovie = (likedMovie) => {
    likedMovie.visible = true;
    likedMovie.btnImg = cross;
    saveSavedMovies([
      ...savedMovies,
      likedMovie
    ]);

    saveAllMovies(allMovies.map((movie) => {
      if (trimChar(likedMovie.movieId, '0') !== movie.id.toString()) {
        return movie;
      }

      movie._id = likedMovie._id;
      movie.isFavourite = true;
      movie.btnImg = activeHeart;
      return movie;
    }));
  }

  const dislikeMovie = (id) => {
    saveSavedMovies(savedMovies.filter(({ _id }) => _id !== id));

    saveAllMovies(allMovies.map((movie) => {
      if (id !== movie?._id?.toString()) {
        return movie;
      }

      movie._id = '';
      movie.isFavourite = false;
      movie.btnImg = heart;
      return movie;
    }));
  }

  const saveSavedMovies = (movies) => {
    localStorage.setItem('savedMovies', JSON.stringify(movies));
    setSavedMovies(movies);
  }

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
          savedMovies={savedMovies}
          saveSavedMovies={saveSavedMovies}
          dislikeMovie={dislikeMovie}
          isLoggedIn={isLoggedIn} />
        <ProtectedRoute path={paths.movies}
          component={AllMovies}
          allMovies={allMovies}
          saveAllMovies={saveAllMovies}
          likeMovie={likeMovie}
          dislikeMovie={dislikeMovie}
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
