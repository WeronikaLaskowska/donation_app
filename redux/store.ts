import User from './reducers/User';
import {combineReducers} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';

export interface RootState {
  user: {
    firstName: string;
    lastName: string;
    id: number;
  };
}

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
