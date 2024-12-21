import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../features/home/screens/HomeScreen';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
