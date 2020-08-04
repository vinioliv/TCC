import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Main from '../pages/main';
import Login from '../pages/signIn';

const mainNavigation = createBottomTabNavigator({
  Login,
  Main,
});

export default createAppContainer(mainNavigation);