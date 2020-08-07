// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';

// import SignIn from './pages/signIn';
// // import SignUp from './pages/signUp';
// import Main from './pages/main';

// const Routes = createStackNavigator({
// SignIn,
// // SignUp,
// Main
// });

// const RoutesCtn = createAppContainer(Routes);

// export default RoutesCtn;

import React from 'react';
import { createAppContainer } from 'react-navigation';
 
import { createBottomTabNavigator } from 'react-navigation-tabs';


import HomeScreen from './pages/main';
import MypageScreen from './pages/signIn';
 

const MainTabs = createBottomTabNavigator({
    HOME: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'HOME',
      },
    },
    Buscar: {
      screen: MypageScreen,
      navigationOptions: {
        tabBarLabel: 'Buscar',
      },
    },
    Carrinho: {
        screen: MypageScreen,
        navigationOptions: {
          tabBarLabel: 'Carrinho',
        },
      },
    Perfil: {
      screen: MypageScreen,
      navigationOptions: {
        tabBarLabel: 'Perfil',
      },
    },
    Menu: {
        screen: MypageScreen,
        navigationOptions: {
          tabBarLabel: 'Menu',
        },
      },
  });
 const RoutesCtn = createAppContainer(MainTabs);

 export default RoutesCtn;
 