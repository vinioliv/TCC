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

import Feather from 'react-native-vector-icons/Feather';


import HomeScreen from './pages/main';
import MypageScreen from './pages/signIn';
import SearchScreen from './pages/search'
 



const MainTabs =  createBottomTabNavigator({
    HOME: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor }) => (
          <Feather size={20} color={tintColor} name="home" /> 
        )
      },     
    },
    Buscar: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ tintColor }) => (
          <Feather size={20} color={tintColor} name="search" /> 
        )
      },
    },
    Carrinho: {
        screen: MypageScreen,
        navigationOptions: {
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ tintColor }) => (
            <Feather size={20} color={tintColor} name="shopping-cart" /> 
          )
        },
      },
    Perfil: {
      screen: MypageScreen,
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ tintColor }) => (
          <Feather size={20} color={tintColor} name="user" /> 
        )
      },
    },
    Menu: {
        screen: MypageScreen,
        navigationOptions: {
          tabBarLabel: 'Menu',
          tabBarIcon: ({ tintColor }) => (
            <Feather size={20} color={tintColor} name="menu" /> 
          )
        },
        
    },   
    
  },
  {
    order: ['HOME', 'Buscar','Carrinho','Perfil','Menu'],
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#FF6969',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    },
  },
  
  
  );

  
 const RoutesCtn = createAppContainer(MainTabs);

 export default RoutesCtn;
 