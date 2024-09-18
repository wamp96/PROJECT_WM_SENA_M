import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name= "Home" component={Home}/>
        <Stack.Screen name= "Login" component={Login}/>
    </Stack.Navigator>
  );
}