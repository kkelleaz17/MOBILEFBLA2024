import React from 'react';
import MessageBox from './MessageBox';
import { Text } from 'react-native-elements';
import { Button, TouchableOpacity } from 'react-native';

// ErrorBox component definition
export default function ErrorBox({ error, Close }) {
  // If there is no error, return null to render nothing
  if (!error) {
    return null;
  }

  return (
    // Render MessageBox with the provided error as Header and an empty Message
    <MessageBox Header={error} Message={''}>
      {/* TouchableOpacity with a button to close the error */}
      <TouchableOpacity style={{ width: '100%', backgroundColor: '#0798AF', padding: 20, borderRadius: 5, alignItems: 'center' }} onPress={() => { Close() }}>
        {/* Text inside the button */}
        <Text style={{ color: 'white', fontSize: 15 }}>Okay</Text>
      </TouchableOpacity>
    </MessageBox>
  );
}
