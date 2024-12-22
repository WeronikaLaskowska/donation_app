import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../features/home/screens/HomeScreen';
import DonationScreen from '../features/home/screens/DonationScreen';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Donation} component={DonationScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
