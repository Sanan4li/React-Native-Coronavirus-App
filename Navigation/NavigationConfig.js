import React from "react";
import {
    SafeAreaView, View, Text,StyleSheet,ScrollView
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createDrawerNavigator ,DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FavScreen from "../Screens/FavScreen";
import HomeScreen from "../Screens/HomeScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import CartScreen from "../Screens/CartScreen";
import AboutScreen from "../Screens/AboutScreen";
const defaultOptionsForStack =  {
    defaultNavigationOptions: {
       
    headerStyle: {
        backgroundColor: '#023953',
        elevation: 0,
        shadowOpacity: 0,
        height:50,
        
    },
    headerTitleAlign: 'center',
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
         fontSize:18,
       
    }
}   
      
  };

   const CategoriesStack = createStackNavigator({
      Categories : {
          screen : CategoriesScreen,
          navigationOptions : {
            headerTitle : "Your Country"
        }
      },
    //   CategoriesProducts : {
    //       screen : CategoriesProductsScreen,
          
   

  }, defaultOptionsForStack
  
  );     

  const HomeStack = createStackNavigator({
   
    Home : {
        screen : HomeScreen,
        navigationOptions : {
          headerTitle : "World Updates"
      }
    },
    About : {
        screen : AboutScreen, 
        
    },
    // Cart : {
    //     screen : CartScreen
    // }

}, defaultOptionsForStack

);     


const FavStack = createStackNavigator({
   
    FavScreen : {
        screen : FavScreen,
        navigationOptions : {
          headerTitle : "Search Country"
      }
    },

//     Cart : {
//         screen : CartScreen
//     }

}, defaultOptionsForStack

);     


const CartStack = createStackNavigator({
   
    Cart : {
        screen : CartScreen,
        navigationOptions:{
            headerTitle : "Symptoms and Precautions"
        }
    },
    
      

}, defaultOptionsForStack

);     
const DevStack = createStackNavigator({
   
    About : {
        screen : AboutScreen,
        navigationOptions:{
            headerTitle : "About Developer"
        }
    },
    
      

}, defaultOptionsForStack

);




  const TabNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return   <Icon name="globe-americas" size={20} color={tintColor} />
               }
        }
    },  
    
    
    Categories: {
        screen :  CategoriesStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
             return   <Icon name="flag" size={20} color={tintColor} />
            }
                
            },
        
        
    },
    
    "Favourites": {
    screen :  FavStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => { 
                return   <Icon name="search" size={20} color={tintColor} />
               }
    }
    },   
    Cart: {
        screen :  CartStack,
            navigationOptions : {
                tabBarIcon: ({ tintColor }) => {
                    return   <Foundation name="alert" size={20} color={tintColor} />
                   }
        }
        },
    Dev: {
            screen :  DevStack,
                navigationOptions : {
                    tabBarIcon: ({ tintColor }) => { 
                        return   <Icon name="info-circle" size={20} color={tintColor} />
                       }
            }
         },
  }, {
      tabBarOptions : {
        showLabel : false,
          activeTintColor : "#008fb3",
          inactiveTintColor : "#023953",
          tabStyle : {height : 50 , zIndex:99, borderColor:"white", borderTopWidth:0},
          labelStyle : {fontSize: 12, paddingTop:2,paddingBottom:3, fontFamily : "halfmoon_bold",},
      }
  }
  
  
  );

  const NavigationDrawer = createDrawerNavigator({
    Home: {
        screen : TabNavigator,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="home" size={20} color={tintColor} />
                   }
        }
        },
    Categories : {
        screen : CategoriesScreen,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="th-list" size={20} color={tintColor} />
                   }
        }
        },

    Favourites : {
        screen : FavScreen,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return    <Fontisto name="heart" size={20} color={tintColor} />
                   }
        }
        },
    Cart : {
        screen : CartScreen,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Icon name="shopping-cart" size={20} color={tintColor} />
                   }
        }
        },
    About : {
        screen : AboutScreen,
            navigationOptions : {
                drawerIcon: ({ tintColor }) => {
                    return   <Entypo name="info-with-circle" size={20} color={tintColor} />
                   }
        }
        },
  
    
    

    },
    {
        contentComponent: (props) => (
         <SafeAreaView>
             <View style={{height: 100,alignItems: 'center', justifyContent: 'center'}}>
     
               <Text style={{fontSize: 32}}>LOGO</Text>
             </View>
           <ScrollView>
             <DrawerItems {...props} />
           </ScrollView>
         </SafeAreaView>
        )
     });

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer ;











