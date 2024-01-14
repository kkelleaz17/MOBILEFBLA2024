// Import necessary React Native components and libraries
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import { useUser } from '../hooks/useUser';

// Functional component for managing small items (goals, tasks, etc.)
const SmallComponent = ({ type, prop }) => {
  // Access user information using custom hook
  const { user, setUser } = useUser();
  const userItems = user[type];
  const [newItem, setItem] = useState('');

  // Sub-component to display an individual goal/task
  const Goal = ({ goal, index }) => (
    <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
      <View>
        <Text style={{ fontSize: 18 }}>{goal}</Text>
        <Text style={{ fontSize: 12 }}>{prop}</Text>
      </View>
      <FontAwesome5 name={'trash'} size={20} onPress={() => RemoveItem(index)} />
    </View>
  );

  // Function to add a new item to the user's list
  const AddItem = () => {
    if (newItem.trim().length !== 0) {
      setUser((prev) => ({ ...prev, [type]: [...prev[type], { [prop]: newItem, id: uuid.v4() }] }));
      setItem('');
    }
  };

  // Function to remove an item from the user's list
  const RemoveItem = (index) => {
    setUser((prev) => {
      const newItems = { ...prev };
      newItems[type].splice(index, 1);
      return newItems;
    });
  };

  return (
    <>
      <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', display: 'flex', flexDirection: 'row', gap: 5 }}>
        {/* Input for new item */}
        <TextInput
          value={newItem}
          onChangeText={(e) => setItem(e)}
          maxLength={22}
          style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '85%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16 }}
          placeholder={`Type a ${prop.charAt(0).toUpperCase() + prop.slice(1)}!`}
        />
        {/* Button to add the new item */}
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '15%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16, justifyContent: 'center', alignItems: 'center' }}
          onPress={AddItem}
        >
          <FontAwesome5 name={'check'} />
        </TouchableOpacity>
      </View>
      {/* Display existing user items using the Goal component */}
      {userItems.map((e, i) => <Goal goal={e[prop]} key={e.id} index={i} />)}
    </>
  );
};

// Export the component
export default SmallComponent;
