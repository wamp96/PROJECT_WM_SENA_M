import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import User from './src/screens/User';
import UserDetail from './src/screens/UserDetail';
import Request from './src/screens/Request';
import RequestDetail from './src/screens/RequestDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
}

function RequestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Request" component={Request} />
      <Stack.Screen name="RequestDetail" component={RequestDetail} />
    </Stack.Navigator>
  );
}

function MainTabs({ handleLogout }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'UserStack') {
            iconName = 'person';
          } else if (route.name === 'RequestStack') {
            iconName = 'document-text';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerRight: () => (
          <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
            <Text style={{ color: '#007AFF' }}>Logout</Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen 
        name="UserStack" 
        component={UserStack} 
        options={{ title: 'Users' }}
      />
      <Tab.Screen 
        name="RequestStack" 
        component={RequestStack} 
        options={{ title: 'Requests' }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} onLogin={() => setIsAuthenticated(true)} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="MainTabs">
            {(props) => <MainTabs {...props} handleLogout={handleLogout} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;