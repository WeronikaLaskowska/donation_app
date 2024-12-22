import {createSlice} from '@reduxjs/toolkit';

export const User = createSlice({
  name: 'user',
  initialState: {
    firstName: 'Weronika',
    lastName: 'Laskowska',
    id: 1,
  },
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateFirstName} = User.actions;
export default User.reducer;
