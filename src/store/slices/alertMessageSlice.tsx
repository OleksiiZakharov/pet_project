import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  status: string | undefined;
  message: string | undefined;
}

const initialState: IInitialState = {
  status: undefined,
  message: undefined,
};

const alertMessageSlice = createSlice({
  name: 'alertMessage',
  initialState,
  reducers: {
    alertMessageSet: (state, { payload }) => {
      const { status, message } = payload;
      state.status = status ? status : undefined;
      state.message = message ? message.toString() : undefined;
    },
  },
});

const { actions, reducer } = alertMessageSlice;

export default reducer;
export const { alertMessageSet } = actions;
