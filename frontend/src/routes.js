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
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Feather from 'react-native-vector-icons/Feather';

import {
   
  TouchableHighlight,
} from 'react-native';
import HomeScreen from './pages/main';
import MypageScreen from './pages/signIn';
import SearchScreen from './pages/search'
import Anuncio from './pages/anuncio'
import AnuncioReview from './pages/anuncio-reviews'
import AnunciosService from './pages/anuncio-servicos'
import SignUpAdress from './pages/signUpAdress/index'
import RegisterProcutService from './pages/registerProductService/index'
import SignIn from './pages/signIn/index'
import SingUp from './pages/signUp/index'
const MainTabs =  
createStackNavigator({
  SignIn,
  SingUp,
  SignUpAdress,
  RegisterProcutService,
  HomeScreen 
   :createBottomTabNavigator({
    HOME: {
      screen: createStackNavigator({
        HomeScreen,
        ANÚNCIO: {
          screen: createStackNavigator(
            {
              ANÚNCIO: {
                screen: createMaterialTopTabNavigator(
                  {
                    Anuncio,
                    AnunciosService,
                    AnuncioReview,
                    
                  },
                  {
                    navigationOptions: {
                      title: 'PEDIDOS',
                      headerTitleAlign: 'center',
                      headerTitleStyle: {
                        color: '#333'
                      },
                      headerStyle: {
                        shadowRadius: 0,
                        shadowOffset: { height: 0 }
                      }
                    },
                    tabBarOptions: {
                      labelStyle: {
                        color: '#333',
                        fontWeight: 'bold'
                      },
                      style: {
                        backgroundColor: '#FFF'
                      },
                      indicatorStyle: {
                        backgroundColor: '#F01'
                      }
                    }
                  }
                )
              }
            },
            {
              navigationOptions: {
                title: 'anúncio',                
                headerTitleAlign: 'right',
                headerStyle: {
                },
                 
                tabBarIcon: ({ tintColor }) => (
                  <MaterialIcons
                    name="assignment"
                    size={30}
                    color={ tintColor } />
                )
              }
            }
          )
        },

      },
      {
        navigationOptions: {
          tabBarLabel: 'HOME',
          header: null,
          tabBarIcon: ({ tintColor }) => (
            <Feather size={20} color={tintColor} name="home" /> 
          )
        },  
      }
      )
      
      
        
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
  ) 

}, {
  headerMode: 'none',
});



  
 const RoutesCtn = createAppContainer(MainTabs);

 export default RoutesCtn;
 