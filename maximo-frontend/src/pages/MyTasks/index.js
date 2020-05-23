import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';


import logo from '../../assets/logo.png';

import styles from './styles';

export default function MyTasks() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>

      <Text style={styles.title}>Meus Pedidos</Text>

      <View style={styles.incident}>
        <View style={styles.incidentHeader}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Titulo:</Text>
        <TouchableOpacity style={styles.deleteButton}
        onPress={() => {}}>
          <Feather name="trash-2" size={20} color='#ff0000' />
        </TouchableOpacity>
      </View>
        <Text style={styles.incidentValue}>Mercado</Text>

        <Text style={styles.incidentProperty}>O que você precisa?:</Text>
        <Text style={styles.incidentValue}>Comprar mistura</Text>
      </View>

    </View>
  )

}