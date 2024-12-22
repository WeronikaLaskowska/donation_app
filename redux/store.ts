import User from './reducers/User';
import {combineReducers} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import Categories from './reducers/Categories';
import {UserObj} from '../models/user';
import {CategoryItem} from '../models/category';
import Donations from './reducers/Donations';
import {DonationObj} from '../models/donation';

export interface RootState {
  user: UserObj;
  categories: {
    categories: CategoryItem[];
    selectedCategoryId: number;
  };
  donations: {
    donations: DonationObj[];
    selectedDonationId: number;
  };
}

const rootReducer = combineReducers({
  categories: Categories,
  user: User,
  donations: Donations,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
  },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  //   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export const persistor = persistStore(store);
