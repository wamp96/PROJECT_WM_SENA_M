import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://skynetworkingsas.com/api/users');
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
      Alert.alert('Error', 'No se pudo obtener la lista de usuarios. Por favor, intente más tarde.');
    }
  };

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Por favor, ingrese su correo y contraseña');
      return;
    }

    setIsLoading(true);

    try {
      const user = users.find(u => u.User_correo === email);

      if (user) {
        // NOTA: Esta es una simulación de autenticación y NO es segura para producción
        // En un entorno real, deberías enviar las credenciales al servidor para su verificación
        const isPasswordValid = verifyPassword(password, user.User_password);

        if (isPasswordValid) {
          // Simular la generación de un token (en una aplicación real, esto se haría en el servidor)
          const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substr(2);
          await AsyncStorage.setItem('userToken', fakeToken);
          
          // Llamar a onLogin para actualizar el estado de autenticación
          onLogin();
        } else {
          Alert.alert('Error', 'Credenciales inválidas');
        }
      } else {
        Alert.alert('Error', 'Usuario no encontrado');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión. Por favor, intente de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  // Función para simular la verificación de contraseña
  const verifyPassword = (inputPassword, storedHash) => {
    // NOTA: Esta es una simulación y NO es segura para producción
    // En un entorno real, esta verificación se haría en el servidor
    
    // Verificamos que el hash comience con $2y$10$ (formato de bcrypt)
    if (!storedHash.startsWith('$2y$10$')) {
      return false;
    }

    // Simulamos una comparación de contraseña
    // En un entorno real, usaríamos bcrypt.compare o similar
    return inputPassword.length >= 8; // Ejemplo: consideramos válida si tiene al menos 8 caracteres
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a SkyNetworking</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        inputMode="email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: '#A0CFFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;