import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UserDetail = ({ route }) => {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>User Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{`${user.User_nombre} ${user.User_apellido_paterno} ${user.User_apellido_materno}`}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Document:</Text>
          <Text style={styles.value}>{user.User_documento}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.User_correo}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user.User_telefono}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Role:</Text>
          <Text style={styles.value}>{user.Roles_fk}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{user.User_status_fk}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{user.City_fk}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Area:</Text>
          <Text style={styles.value}>{user.Area_fk}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Created:</Text>
          <Text style={styles.value}>{user.create_at}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Updated:</Text>
          <Text style={styles.value}>{user.update_at}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
    color: '#666',
  },
  value: {
    flex: 1,
    color: '#333',
  },
});

export default UserDetail;