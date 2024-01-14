// Import necessary React Native components and libraries
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { FadeInUp } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';
import { useUser } from '../hooks/useUser';

// Functional component for displaying tasks
export default function TodoHome() {
  // Access user information using custom hook
  const { user } = useUser();
  const Tasks = user.tasks;

  return (
    <Animated.View style={{ width: '100%', padding: 10, display: 'flex', justifyContent: 'center', gap: 10 }} entering={FadeInUp}>
      <Text style={{ fontSize: 25 }}>Tasks <FontAwesome5 name="paper-plane" size={25} /></Text>

      {/* Map through tasks and display each task using the Task component */}
      {Tasks.map((e, i) => {
        return <Task Tasks={e.task} key={'HOME' + e.id} Index={i} />;
      })}
      
      {/* Display a message if there are no tasks */}
      {Tasks.length === 0 && <Text>No tasks yet!</Text>}
    </Animated.View>
  );
}

// Sub-component to display an individual task
const Task = ({ Tasks, Index }) => {
  // Access setUser and save functions from custom hook
  const { setUser, save } = useUser();

  return (
    <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
      <Text style={{ fontSize: 18 }}>{Tasks}</Text>
      <FontAwesome5 name={'check'} size={20} />
    </View>
  );
};
