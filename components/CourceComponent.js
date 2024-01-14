import CourceDropDown from "./CourceDropDown";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useUser } from "../hooks/useUser";
import uuid from 'react-native-uuid';

// CourceCompoenent component definition
const CourceCompoenent = ({ type, prop }) => {
  const { user, setUser } = useUser();
  const userItems = user[type];
  const [newItem, setItem] = useState('');
  const [ListValue, setListValue] = useState('Other');

  // Goal component definition
  const Goal = ({ goal, index }) => {
    return (
      <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        <View>
          <Text style={{ fontSize: 18 }}>{goal.Cource}</Text>
          <Text style={{ fontSize: 12 }}>{goal.CourceType}</Text>
        </View>
        <FontAwesome5 name={'trash'} size={20} onPress={() => RemoveItem(index)} />
      </View>
    );
  };

  // Function to add a new item
  const AddItem = () => {
    if (newItem.trim().length !== 0) {
      setUser((prev) => ({ ...prev, [type]: [...prev[type], { [prop]: newItem, id: uuid.v4(), CourceType: ListValue }] }));
      setItem('');
    }
  };

  // Function to remove an item
  const RemoveItem = (index) => {
    setUser((prev) => {
      const newGoals = { ...prev };
      newGoals[type].splice(index, 1);
      return newGoals;
    });
  };

  return (
    <>
      <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <View style={{ width: '100%', flexDirection: 'row', gap: 5 }}>
          {/* TextInput for entering a new item */}
          <TextInput
            value={newItem}
            onChangeText={(e) => setItem(e)}
            maxLength={22}
            style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '85%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16 }}
            placeholder={`Type a ${prop.charAt(0).toUpperCase() + prop.slice(1)}!`}
          />
          {/* Button to add a new item */}
          <TouchableOpacity
            style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '15%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16, justifyContent: 'center', alignItems: 'center' }}
            onPress={AddItem}
          >
            <FontAwesome5 name={'check'} />
          </TouchableOpacity>
        </View>
        {/* Dropdown for selecting a course type */}
        <View>
          <CourceDropDown ListValue={ListValue} setListValue={setListValue} />
        </View>
      </View>
      {/* Displaying existing goals */}
      {userItems.map((e, i) => <Goal goal={e} key={e.id} index={i} />)}
    </>
  );
}

export default CourceCompoenent;
