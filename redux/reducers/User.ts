import {createSlice} from '@reduxjs/toolkit';

export const User = createSlice({
  name: 'user',
  initialState: {
    profileImage:
      'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
  },
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    updateToken: (state, action) => {
      console.log('token update...');
      return {...state, ...{token: action.payload}};
    },
    resetToInitialState: () => {
      return {
        profileImage:
          'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
      };
    },
  },
});

export const {resetToInitialState, logIn, updateToken} = User.actions;
export default User.reducer;
