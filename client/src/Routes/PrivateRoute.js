import {
  Outlet,
  Navigate
} from 'react-router-dom';

function getToken() {
  const token = localStorage.getItem('UserInfo');
  if( token !== null ) {
    if( token === undefined ) {
      return false
    } else {
      return true
    }
  }
  return false
}
const PrivateRoute = () => {
  const tokenvalue = getToken();
  return tokenvalue ? (<Outlet />) : (<Navigate to='/admin' />)
}

export default PrivateRoute;