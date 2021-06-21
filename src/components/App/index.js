import {Route, Switch, Redirect} from 'react-router-dom';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Movies from '../SavedMovies/';
import Register from '../Register/';
import Login from '../Login';
import Profile from '../Profile';
import NotFound from '../Errors/NotFound';

import paths from '../../utils/constants/paths';

import './index.css';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path={ paths.movies }>
          <Movies/>
        </Route>
        <Route path={ paths.signIn }>
          <Register/>
        </Route>
        <Route path={ paths.signUp }>
          <Login/>
        </Route>
        <Route path={ paths.profile }>
          <Profile/>
        </Route>
        <Route path={ paths.main } exact={true}>
          <Main/>
        </Route>
        <Route path={ paths.notFound }>
          <NotFound/>
        </Route>
        <Redirect to={ paths.notFound }/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
