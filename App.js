import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      usuario: [],
      url: 'http://192.168.1.19:8080/api/users' // Cambia esto a la IP del servidor en red si usas un dispositivo físico
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    this.setState({ loading: true });
    fetch(this.state.url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          usuario: response.users,
          loading: false
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.usuario}
          keyExtractor={item => item.User_id.toString()} // Asegúrate de que 'id' existe en los datos de usuario
          renderItem={({ item }) => <Text>{item.User_nombre}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
