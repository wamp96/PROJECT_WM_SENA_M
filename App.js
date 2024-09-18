import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import User from './src/screens/User';
import UserDetail from './src/screens/UserDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>   
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;