import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, Image, Text, TextInput, 
TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function NewTasks() {
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
       <View style={styles.header}>
        <Image source={logo} />
      </View>

      <Text style={styles.title}>Cadastrar novo pedido</Text>
        
        <ScrollView style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          >
        <View style={styles.form}>
          <Text style={styles.label}>Titulo do pedido</Text>
          <TextInput
          style={styles.input}
          multiline={false}
          numberOfLines={1}
          placeholder="Mercado, fármacia"
          placeholderTextColor="#999"
          />

          <Text style={styles.label}>O que você precisa:</Text>
          <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={2}
          placeholder="Comprar mistura"
          placeholderTextColor="#999"
          />

          <Text style={styles.label}>Detalhes do pedido</Text>
          <TextInput
          style={styles.textArea} 
          multiline={true}
          numberOfLines={4}
          placeholder="Meio Kilo de carne moida..."
          placeholderTextColor="#999"
          />

          <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
          
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}