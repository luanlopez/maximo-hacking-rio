import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput,
TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Signin({ navigation }) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  //   useEffect(() => {
  //     AsyncStorage.getItem('userId').then(user => {
  //        if (user) {
  //           navigation.navigate('Home')
  //        } 
  //     })
  // }, [])


  async function handleLogin() {
    
    // const data = {
    //     email,
    //     senha
    // },

    // const response = await api.post('session', data)

    // await AsyncStorage.setItem('userId', response.data.id)
    // await AsyncStorage.setItem('userName', response.data.name)

    navigation.navigate('Home');

  };


  function navigateToSignup() {
    navigation.navigate('Signup')
  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image source={logo} />
      <Text style={styles.title}>Faça seu login</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#666699"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="senha"
          placeholderTextColor="#666699"
          autoCapitalize="none"
          autoCorrect={false}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSignup} style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}
          >cadastre-se</Text>
          <Feather name="arrow-right" size={20} color="#4682B4" />
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
}