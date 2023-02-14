import { Route, Routes, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Market } from '../pages/Market';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const PageRoutes = () => {
  const { login } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Market />} />

        <Route
          path="login"
          element={!login ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="registration"
          element={!login ? <Registration /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Container>
  );
};
