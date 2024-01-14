import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

// Input component definition
export default function Input({ value, label, onchange, error,type }) {
  return (
    <View style={styles.inputContainer}>
      {/* Label for the input */}
      <Text style={styles.inputLabel}>{label}</Text>
      {/* TextInput for user input */}
      <TextInput style={styles.inputField} value={value} onChangeText={onchange}  secureTextEntry={type}/>
      {/* Display error message if there is an error */}
      {error && value.length !== 0 && <Text style={styles.errortext}>*{error}</Text>}
    </View>
  );
}

// Styles for the Input component
const styles = StyleSheet.create({
  inputLabel: {
    width: '100%',
  },
  inputField: {
    backgroundColor: '#a6a6a6',
    width: '100%',
    height: 65,
    padding: 15,
    borderRadius: 5,
  },
  inputContainer: {
    width: '80%',
    display: 'flex',
    gap: 5,
  },
  errortext: {
    color: 'red',
  },
});
