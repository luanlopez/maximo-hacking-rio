import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, 
TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Signup({navigation}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function handleRegister() {

    const data = {
      name,
      email,
      senha,
    };

    try {
      const response = await api.post('users', data);

      alert(`Cadastrado com sucesso ${data.name}!`);

      navigation.navigate('Signin');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }
  }


  function navigateToSignin() {

    navigation.navigate('Signin')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image source={logo} />
      <Text style={styles.title}>Faça seu Cadastro</Text>

      <View style={styles.form}>
      <TextInput 
          style={styles.input}
          placeholder="nome"
          placeholderTextColor="#666699"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />

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
          placeholder="senha"
          placeholderTextColor="#666699"
          autoCapitalize="none"
          autoCorrect={false}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button}
          onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailsButton}
          onPress={navigateToSignin}>
          <Feather name="arrow-left" size={20} color="#4682B4" />
          <Text style={styles.detailsButtonText}>já tenho cadastro</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}