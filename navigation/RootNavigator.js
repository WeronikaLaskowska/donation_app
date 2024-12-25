import {AuthNavigator, MainNavigation} from './MainNavigation';
import {useSelector} from 'react-redux';
export const RootNavigation = () => {
  const user = useSelector(state => state.user);

  return user.isLoggedIn ? <MainNavigation /> : <AuthNavigator />;
};
