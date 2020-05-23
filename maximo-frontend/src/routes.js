import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Details from './pages/Details';
import MyTasks from './pages/MyTasks';
import NewTasks from './pages/NewTasks';

function Drawers() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Meus Pedidos" component={MyTasks} />
      <Drawer.Screen name="Novos Pedidos" component={NewTasks} />
    </Drawer.Navigator>
  )
}


export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Signin" component={Signin} />
        <AppStack.Screen name="Signup" component={Signup} />
        <AppStack.Screen name="Home" component={Drawers} />
        <AppStack.Screen name="Details" component={Details} />
      </AppStack.Navigator>
      
    </NavigationContainer>
    
  );

  
}
