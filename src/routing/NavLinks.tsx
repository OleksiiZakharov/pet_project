import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { userClear } from '../store/slices/userSlice';

export const NavLinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { login } = useSelector((state: RootState) => state.user);

  const logoutHandler = () => {
    dispatch(userClear());
    navigate('/');
  };

  return (
    <>
      <Link to="/">
        <div className={pathname === '/' ? 'active' : ''}>Main</div>
      </Link>

      {login ? (
        <>
          <Link to="#" onClick={logoutHandler}>
            <div>Logout</div>
          </Link>
        </>
      ) : null}

      {!login ? (
        <>
          <Link to="/login">
            <div className={pathname === '/login' ? 'active' : ''}>Login</div>
          </Link>
        </>
      ) : null}
    </>
  );
};
