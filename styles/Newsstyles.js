// NewsStyles.js

import { StyleSheet } from 'react-native';

export const newsStyles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    height: '100%',
  },
  messageText: {
    fontSize: 25,
  },
  scrollViewContainer: {
    alignItems: 'center',
    marginTop: 50,
    padding: 10,
    width: '100%',
    gap: 30,
    paddingBottom: 350,
  },
  recentNewsText: {
    width: '95%',
    fontWeight: 'bold',
    fontSize: 28,
  },
  newsBlockContainer: {
    width: '95%',
  },
  newsBlockTouchable: {
    backgroundColor: '#D9D9D9',
    padding: 0,
    borderRadius: 8,
    gap: 10,
    flexDirection: 'column',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  newsBlockImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  newsBlockCaption: {
    fontSize: 16,
    padding: 25,
  },
  newsBlockDate: {
    fontSize: 12,
    padding: 25,
  },
});

// Export the styles for use in the News component
export default newsStyles;
