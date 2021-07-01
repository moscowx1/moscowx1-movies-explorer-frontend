import { Route, Redirect } from 'react-router-dom';

import paths from '../../utils/constants/paths';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        () => props.isLoggedIn ? <Component {...props} /> : <Redirect to={paths.login} />
      }
    </Route>
  )
}

export default ProtectedRoute;