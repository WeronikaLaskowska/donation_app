import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

export const login = async (email: string, password: string) => {
  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    const token = await res.user.getIdToken();
    return {
      status: true,
      data: {
        token,
        displayName: res.user.displayName,
        email: res.user.email,
      },
    };
  } catch (error) {
    //@ts-ignore firebase error object has message field
    return {status: false, error: error.message};
  }
};

export const register = async (
  fullName: string,
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error: unknown) {
    //@ts-ignore firebase error object has code field
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email address is already in use!'};
    }
    //@ts-ignore firebase error object has code field
    if (error.code === 'auth/invalid-email') {
      return {error: 'That email address is invalid!'};
    }

    return {error: 'Something went wrong!'};
  }
};

export const logout = async () => auth().signOut();

export const checkToken = async () => {
  try {
    let response = await auth().currentUser?.getIdToken(true);
    store.dispatch(updateToken(response));
    return {status: true};
  } catch (error) {
    return error;
  }
};
