import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name= 'Home' component={Home}/>
        <Tab.Screen name= 'Login' component={Login}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
    </Tab.Navigator>
  )
}