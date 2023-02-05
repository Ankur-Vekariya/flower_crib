import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome again!</Text>
        <Image style={styles.tinyLogo} source={require('../assets/welcome.jpg')} />
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FAD6A5',
    height: '100%',
    width: '100%',
  },
  tinyLogo: {
    borderWidth: 2,
    borderRadius: 10,
    width: '80%',
    height: '50%',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#567189',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: '200',
    color: '#567189',
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#567189',
    borderRadius: 10,
    width: '80%',
    height: 50,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#567189',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '100',
    color: '#FAD6A5',
  },
  registerButton: {
    color: '#567189',
  },
});

export default Welcome;
