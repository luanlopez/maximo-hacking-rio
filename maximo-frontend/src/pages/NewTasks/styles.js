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

  scrollView:{
  },

  form: {
    padding: 24,
    alignSelf: 'stretch',
    // paddingHorizontal: 30,
    marginTop: 15,
    backgroundColor: '#fff',

  },

  label: {
    fontWeight: 'bold',
    color: '#666699',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 5,
  },

  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#444',
    height: 120,
    marginBottom: 20,
    borderRadius: 5,
  },


  button: {
    marginTop: 5,
    height: 50,
    backgroundColor: '#4682B4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})