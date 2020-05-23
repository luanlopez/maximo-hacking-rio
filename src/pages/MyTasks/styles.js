import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  title: {
    fontSize: 25,
    marginBottom: 16,
    marginTop: 30,
    color: '#4682B4',
    fontWeight: 'bold',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 20,
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

})