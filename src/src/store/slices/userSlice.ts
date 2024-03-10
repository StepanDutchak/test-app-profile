import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserDataResponse} from '../../types/store';

const initialMovieState: IUserDataResponse = {
  user: {
    id: 0,
    name: '',
    fullName: '',
    rating: 0,
    reviews: 0,
    followers: 0,
    following: 0,
  },
};

const userSlice = createSlice({
  name: 'movie',
  initialState: initialMovieState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserDataResponse>) => {
      state.user = action.payload.user;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
