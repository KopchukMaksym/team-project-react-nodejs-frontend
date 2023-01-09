import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friendsData: [],
  isLoading: false,
  error: false,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    getFriendsFetch: state => {
      state.isLoading = true;
    },
    getFriendsSuccess: (state, { payload }) => {
      state.friendsData = payload;
      state.isLoading = false;
      state.error = false;
    },
    getFriendsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getFriendsFetch, getFriendsSuccess, getFriendsFailure } =
  friendsSlice.actions;

export default friendsSlice.reducer;
