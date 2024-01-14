import { View, Text } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { FadeInUp } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';
import { useUser } from '../hooks/useUser';
import { useNavigation } from '@react-navigation/native';

// Goals component definition
export default function Goals() {
  // Access user data using the useUser hook
  const { user } = useUser();
  // Retrieve goals from user data
  const Goals = user.goals;
  // Access navigation object
  const Navigate = useNavigation();

  return (
    <Animated.View style={{ width: '100%', padding: 10, display: 'flex', justifyContent: 'center', gap: 10 }} entering={FadeInUp} onPress={() => { Navigate.navigate('news') }}>
      <Text style={{ fontSize: 25 }}>Goals <FontAwesome5 name={'star'} size={25} /></Text>
      {/* Map through each goal and render the Goal component */}
      {Goals.map((e, i) => {
        return <Goal Goal={e.goal} key={'HOME' + e.id} Index={i} />;
      })}
      {/* Display message if there are no goals */}
      {Goals.length === 0 && <Text>No goals yet!</Text>}
    </Animated.View>
  );
}

// Goal component definition
const Goal = (props) => {
  return (
    <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
      {/* Display the goal text */}
      <Text>{props.Goal}</Text>
      <Text></Text>
    </View>
  );
}
