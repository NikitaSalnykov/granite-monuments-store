import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../../Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function AdminRoute({ children }) {
  const user = useSelector(getUser);
  const isLoading = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoading ? (
        user.role === 'admin' ? (
          children
        ) : (
          <Navigate to="/login" />
        )
      ) : (
        <Loader />
      )}
    </>
  );
}
