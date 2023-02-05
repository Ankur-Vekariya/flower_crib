import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const Register = (props) => {
  console.log('props', props);
  const [userName, setUserName] = useState('ankur');
  return (
    <>
      {/* <StatusBar /> */}
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/3129492.jpg')} />
        <Text style={styles.title}>Please Register</Text>
        <Text style={styles.message}>to connect with us</Text>
        <Text style={styles.inputLabel}>First Name</Text>

        <TextInput style={styles.input} onChangeText={(text) => setUserName(text)} value={userName} />
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput style={styles.input} onChangeText={(text) => setUserName(text)} value={userName} />
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} onChangeText={(text) => setUserName(text)} value={userName} />
        <Text style={styles.inputLabel}>Address</Text>
        <TextInput style={styles.input} onChangeText={(text) => setUserName(text)} value={userName} />
        <TouchableOpacity style={styles.saveButton} onPress={() => console.log(userName)}>
          <Text>Save</Text>
        </TouchableOpacity>
        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 10 }}>
          <Text>Don't have account? </Text>
          <TouchableOpacity style={styles.registerButton} onPress={() => console.log(userName)}>
            <Text style={styles.registerButton}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
    width: '60%',
    height: '20%',
  },
  inputLabel: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: '700',
    color: '#567189',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#567189',
  },
  message: {
    fontSize: 20,
    fontWeight: '200',
    color: '#567189',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10,
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#567189',
    borderRadius: 10,
    width: '80%',
    height: 40,
    alignItems: 'center',
    paddingVertical: 10,
  },
  message: {
    fontSize: 15,
    fontWeight: '100',
    color: '#567189',
  },
  registerButton: {
    color: '#567189',
  },
});

export default Register;
