// LoginStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    height: '100%',
    gap: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '80%',
  },
  loginButton: {
    backgroundColor: '#1c99af',
    padding: 15,
    width: '80%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signUpContainer: {
    position: 'absolute',
    bottom: 50,

  },
  signUpText: {
    color: '#1c99af',
    textDecorationLine:'underline'
  },
});
