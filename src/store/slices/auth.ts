import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

export interface IUser {
  name: string;
}

interface IAuth {
  user: IUser | null;
}

const initialState: IAuth = {
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const userSelector = (state: RootState) => ({
  user: state.auth.user,
});

// Reducer
export default slice.reducer;

// Actions
export const { setUser } = slice.actions;
