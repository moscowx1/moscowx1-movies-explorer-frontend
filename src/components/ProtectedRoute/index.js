import { Route, Redirect } from 'react-router-dom';

import paths from '../../utils/constants/paths';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        () => props.isloggedIn ? <Component {...props} /> : <Redirect to={paths.signIn} />
      }
    </Route>
  )
}

export default ProtectedRoute;