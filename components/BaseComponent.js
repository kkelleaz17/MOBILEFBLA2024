import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import { useUser } from '../hooks/useUser';

// BaseComponent definition
const BaseComponent = ({ type, prop }) => {
  const { user, setUser } = useUser();
  const userGoals = user[type];
  const [newGoal, setGoal] = useState('');

  // Goal component definition
  const Goal = ({ goal, index }) => (
    <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
      <Text style={{ fontSize: 18 }}>{goal}</Text>
      <FontAwesome5 name={'check'} size={20} onPress={() => RemoveGoal(index)} />
    </View>
  );

  // Function to add a new goal
  const AddGoal = () => {
    if (newGoal.trim().length !== 0) {
      setUser((prev) => ({ ...prev, [type]: [...prev[type], { [prop]: newGoal, id: uuid.v4() }] }));
      setGoal('');
    }
  };

  // Function to remove a goal
  const RemoveGoal = (index) => {
    setUser((prev) => {
      const newGoals = { ...prev };
      newGoals[type].splice(index, 1);
      return newGoals;
    });
  };

  return (
    <>
      <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', display: 'flex', flexDirection: 'row', gap: 5 }}>
        {/* TextInput for entering a new goal */}
        <TextInput
          value={newGoal}
          onChangeText={(e) => setGoal(e)}
          maxLength={22}
          style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '85%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16 }}
          placeholder={`Type a ${prop.charAt(0).toUpperCase() + prop.slice(1)}!`}
        />
        {/* Button to add a new goal */}
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '15%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16, justifyContent: 'center', alignItems: 'center' }}
          onPress={AddGoal}
        >
          <FontAwesome5 name={'check'} />
        </TouchableOpacity>
      </View>
      {/* Displaying existing goals */}
      {userGoals.map((e, i) => <Goal goal={e[prop]} key={e.id} index={i} />)}
    </>
  );
};

export default BaseComponent;
