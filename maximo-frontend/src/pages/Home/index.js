import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);

  const navigation = useNavigation();

  function navigateToDetails(task) {
    navigation.navigate('Details', { task });
  }

  async function loadTasks() {
    const response = await api.get('tasks');

    setTasks(response.data);
    setTotal(response.headers['x-total-count']);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Ajude, Somos o Máximo!</Text>

      <FlatList
        data={tasks}
        style={styles.incidentList}
        keyExtractor={task => String(task.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item: task }) => (
          <View style={styles.incident}>
            <View style={styles.incidentHeader}>
              <Text style={styles.incidentProperty}>Nome:</Text>
              <Text style={styles.incidentProperty}>Torre 2</Text>
            </View>
            <Text style={styles.incidentValue}>{task.name}</Text>

            <Text style={styles.incidentProperty}>Titulo:</Text>
            <Text style={styles.incidentValue}>{task.title}</Text>

            <Text style={styles.incidentProperty}>O que você precisa?:</Text>
            <Text style={styles.incidentValue}>{task.description}</Text>

            <TouchableOpacity style={styles.detailsButton}
              onPress={() => navigateToDetails(task)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#4682B4" />
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}