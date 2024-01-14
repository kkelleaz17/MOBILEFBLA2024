import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import Todo from '../components/Todo';
import Goals from '../components/Goals';
import QuickLinks from '../components/QuickLinks';
import EmailWithat from '../util/EmailWithat';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../styles/HomeStyles';
export default function Home() {
  // Fetching user data using custom hook
  const { user } = useUser();

  // Requesting media library permissions on component mount
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access media library denied');
      }
    })();
  }, []);

  return (
    // Main content Which includes a Welcome Message + Todo & Goals for the user viewing reasons!
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/fbla20only.png')} style={styles.image} />
      <Text style={styles.welcome}>Hello {user.name === '' ? EmailWithat(user.email) : user.name}</Text>
      <QuickLinks />
      <Todo />
      <Goals />
    </ScrollView>
  );
}
