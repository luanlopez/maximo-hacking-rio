import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const task = route.params.task;
  const message = 'Olá Thiago, estou entrando em contato pois gostaria de ajudar indo no mercado para você'

  function navigateBack() {
    navigation.goBack()
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?=phone=5511948515720&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color='#4682B4' />
        </TouchableOpacity>

        <Image source={logo} />
      </View>

      <View style={styles.incident}>
        <View style={styles.incidentHeader}>
          <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Nome:</Text>
          <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Torre 2</Text>
        </View>
        <Text style={styles.incidentValue}>{task.name}</Text>

        <Text style={styles.incidentProperty}>Titulo:</Text>
        <Text style={styles.incidentValue}>{task.title}</Text>

        <Text style={styles.incidentProperty}>O que você precisa?:</Text>
        <Text style={styles.incidentValue}>{task.description}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.title}>Salve o dia!</Text>
        <Text style={styles.description}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
            <FontAwesome5 name="whatsapp" size={20} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}