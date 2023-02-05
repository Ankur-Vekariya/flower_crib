import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Card from '../components/Card';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchCard}>
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Basic CardView Example</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchCard}>
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Basic CardView Example</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchCard}>
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Basic CardView Example</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#FAD6A5',
    height: '100%',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  touchCard: {
    marginBottom: 20,
  },
  card: {
    // height: 50,
    width: '100%',
    backgroundColor: '#7B8FA1',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});

export default Home;
