import axios from 'axios';

export const LoginService = {
  async login(login: string, password: string) {
    return await axios.post(
      '/auth/login',
      {
        login,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  },
  async registration(login: string, password: string, email: string) {
    return await axios.post(
      '/auth/registration',
      {
        login,
        password,
        email,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  },
};
