import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RequestDetail = ({ route }) => {
  const { request } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Request Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Request Number:</Text>
          <Text style={styles.value}>{request.Request_numero}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.value}>{request.Request_title}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{request.Request_description}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{request.Request_fecha}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>User ID:</Text>
          <Text style={styles.value}>{request.User_fk}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Status ID:</Text>
          <Text style={styles.value}>{request.Request_status_fk}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Created At:</Text>
          <Text style={styles.value}>{request.create_at}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Updated At:</Text>
          <Text style={styles.value}>{request.update_at || 'Not updated'}</Text>
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
    width: 150,
    color: '#666',
  },
  value: {
    flex: 1,
    color: '#333',
  },
});

export default RequestDetail;
