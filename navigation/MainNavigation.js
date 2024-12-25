import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../features/home/screens/HomeScreen';
import DonationScreen from '../features/home/screens/DonationScreen';
import Login from '../features/auth/screens/Login';
import Registration from '../features/auth/screens/Registration';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Donation} component={DonationScreen} />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
