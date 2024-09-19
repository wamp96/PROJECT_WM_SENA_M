import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const Home = () => {
  // Datos simulados para el gráfico
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  // Datos simulados para las actividades recientes
  const recentActivities = [
    { id: 1, title: 'Nueva venta', description: 'Venta de producto A', amount: '$100' },
    { id: 2, title: 'Nuevo cliente', description: 'Cliente B se registró', amount: '' },
    { id: 3, title: 'Actualización de inventario', description: 'Se agregaron 50 unidades', amount: '' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Ventas</Title>
            <Paragraph>$10,500</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Clientes</Title>
            <Paragraph>250</Paragraph>
          </Card.Content>
        </Card>
      </View>

      <Card style={styles.chartCard}>
        <Card.Content>
          <Title>Ventas mensuales</Title>
          <LineChart
            data={data}
            width={Dimensions.get("window").width - 60}
            height={220}
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </Card.Content>
      </Card>

      <Card style={styles.activityCard}>
        <Card.Content>
          <Title>Actividades recientes</Title>
          {recentActivities.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text>{activity.description}</Text>
              {activity.amount && <Text style={styles.activityAmount}>{activity.amount}</Text>}
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  card: {
    width: '48%',
  },
  chartCard: {
    margin: 16,
  },
  activityCard: {
    margin: 16,
  },
  activityItem: {
    marginBottom: 12,
  },
  activityTitle: {
    fontWeight: 'bold',
  },
  activityAmount: {
    color: 'green',
  },
});

export default Home;