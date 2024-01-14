import { StyleSheet } from 'react-native';

const styles = {
    profilePictureContainer: {
      top: -50,
      left: 20,
      position: 'absolute',
    },
    profilePicture: {
      backgroundColor: '#D9D9D9',
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'black',
    },
    editIconContainer: {
      position: 'absolute',
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D9D9D9',
      borderRadius: 50,
      opacity: .5,
    },
    editIconContainerback:{
      position: 'absolute',
      width: '100%',
      height: 225,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D9D9D9',
      opacity: .5,
    },
    profileBackground: {
      backgroundColor: '#D9D9D9',
      width: '100%',
      height: 225,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'black',
    },
    topAreaContainer: {
      width: '95%',
      gap: 10,
      flexDirection: 'column',
    },
    profileDetailsContainer: {
      backgroundColor: '#D9D9D9',
      position: 'relative',
      minHeight: 100,
      padding: 20,
      paddingVertical: 50,
      borderRadius: 8,
      gap: 5,
    },
    nameText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    otherDetailsText: {
      fontSize: 15,
    },
    scrollViewContainer: {
      alignItems: 'center',
      marginTop: 50,
      padding: 10,
      width: '100%',
      gap: 10,
      paddingBottom: 350,
    },
    saveButtonContainer: {
      width: '95%',
    },
  };
  export default styles