import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incidentProperty: {
    fontSize: 14,
    color: '#666699',
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#666699',
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4682B4',
    lineHeight: 30,
  },

  description: {
    fontSize: 15,
    color: '#666699',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
  },

  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34af23',
    borderRadius: 8,
    height: 50,
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 4,
  },
})