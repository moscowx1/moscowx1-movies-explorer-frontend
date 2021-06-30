import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from "react";


import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import SavedMovies from '../Movies/SavedMovies.js';
import AllMovies from '../Movies/AllMovies.js';
import Register from '../Register/';
import Login from '../Login';
import Profile from '../Profile';
import NotFound from '../Errors/NotFound';
import Menu from '../Menu';
import ProtectedRoute from '../ProtectedRoute';

import paths from '../../utils/constants/paths';

import './index.css';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => setIsMenuOpened(true);
  const closeMenu = () => setIsMenuOpened(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (
    <div className='app'>
      <Header handleMenuClick={openMenu} />
      <Switch>
        <ProtectedRoute path={paths.savedMovies}
          component={SavedMovies}
          isLoggedIn={isLoggedIn} />
        <ProtectedRoute path={paths.movies}
          component={AllMovies}
          isLoggedIn={isLoggedIn} />
        <Route path={paths.register}>
          <Register />
        </Route>
        <Route path={paths.login}>
          <Login />
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
