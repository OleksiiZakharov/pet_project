import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../service/login.service';
import { alertMessageSet } from '../store/slices/alertMessageSlice';
import { userUpdate } from '../store/slices/userSlice';

interface IAuthParams {
  login: string;
  password: string;
  email?: string;
}

const LoginApi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation(
    ['loginRequest'],
    ({ login, password }: IAuthParams) => LoginService.login(login, password),
    {
      onSuccess: ({ data }) => {
        dispatch(userUpdate(data));
        dispatch(alertMessageSet(data));
        if (!data.status) navigate('/');
      },
    }
  );
};

const RegistrationApi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation(
    ['registrationRequest'],
    ({ login, password, email }: IAuthParams) =>
      LoginService.registration(login, password, email!),
    {
      onSuccess: ({ data }) => {
        dispatch(userUpdate(data));
        dispatch(alertMessageSet(data));
        navigate('/');
      },
    }
  );
};

export { LoginApi, RegistrationApi };
