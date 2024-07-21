import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUser,
  getRefresh,
} from '../../Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function AdminRoute({ children }) {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefresh = useSelector(getRefresh);

  const isLoading = !user && !isLoggedIn && isRefresh;

  if (isLoading) {
    return <Loader />;
  }
  if (isLoggedIn && user.role === 'admin') {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
