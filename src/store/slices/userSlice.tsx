import { createSlice } from '@reduxjs/toolkit';
import { browserStorage } from '../../service/browserStorage.service';

const initialState = {
  id: +browserStorage.get('id'),
  login: browserStorage.get('login'),
  token: browserStorage.get('token'),
  cash: +browserStorage.get('cash'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userUpdate: (state, { payload }) => {
      const { id, login, token, cash } = payload;
      if (id && Number.isInteger(id) && id > 0) {
        state.id = id;
        browserStorage.set('id', id);
      }
      if (login) {
        state.login = login.toString();
        browserStorage.set('login', login);
      }
      if (token) {
        state.token = token.toString();
        browserStorage.set('token', token);
      }
      if (cash && Number.isInteger(cash) && cash >= 0) {
        state.cash = cash;
        browserStorage.set('cash', cash);
      }
    },
    userClear: (state) => {
      state.id = 0;
      state.login = '';
      state.token = '';
      state.cash = 0;
      browserStorage.clear();
    },
  },
});

const { actions, reducer } = userSlice;

export default reducer;
export const { userUpdate, userClear } = actions;
