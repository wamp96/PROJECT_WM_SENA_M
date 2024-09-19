import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}/>
        <Stack.Screen name= "Login" component={Login}/>
        <Drawer.Screen name='Settings' component={SettingsScreen}/>

    </Drawer.Navigator>
  )
}