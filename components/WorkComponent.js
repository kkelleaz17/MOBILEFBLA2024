// Import necessary React Native components and libraries
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import { useUser } from '../hooks/useUser';

// Functional component for managing work-related experiences
const WorkComponent = ({ type, prop }) => {
  // State variables for new experience, dates, and accessing user information
  const [NewExperience, setExperience] = useState('');
  const [Date1, setDate1] = useState('');
  const [Date2, setDate2] = useState('');
  const { user, setUser } = useUser();
  const userExperience = user[type];

  // Sub-component to display individual work experience
  const Experience = ({ Experience, index }) => {
    console.log(Experience);
    return (
      <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', display: 'flex', flexDirection: 'column' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Experience.name}</Text>
        <Text style={{ fontSize: 10 }}>{prop.charAt(0).toUpperCase() + prop.slice(1)}</Text>
        <Text style={{ fontSize: 16 }}>{Experience.date1 + '-' + Experience.date2}</Text>
        <TouchableOpacity onPress={() => DeleteExperience(index)} style={{ width: 145, marginTop: 10 }}>
          <Text style={{ color: 'white', backgroundColor: '#242E64', padding: 10, borderRadius: 8 }}>Delete Experience</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Function to create a new experience
  const CreateExperience = () => {
    const isValid = NewExperience.trim().length !== 0 || Date1.trim().length !== 0 || Date2.trim().length !== 0;
    if (isValid) {
      setUser((prev) => ({ ...prev, [type]: [...prev[type], { name: NewExperience, date1: Date1, date2: Date2, id: uuid.v4() }] }));
      setDate1('');
      setDate2('');
      setExperience('');
    }
  };

  // Function to delete an experience
  const DeleteExperience = (index) => {
    setUser((prev) => {
      const newGoals = { ...prev };
      newGoals[type].splice(index, 1);
      return newGoals;
    });
  };

  return (
    <>
      <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, width: '95%', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          {/* Input for new experience */}
          <TextInput
            value={NewExperience}
            onChangeText={(e) => setExperience(e)}
            maxLength={22}
            style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '85%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16 }}
            placeholder={`Type a ${prop.charAt(0).toUpperCase() + prop.slice(1)}!`}
          />
          {/* Button to add the new experience */}
          <TouchableOpacity
            style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '15%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16, justifyContent: 'center', alignItems: 'center' }}
            onPress={CreateExperience}
          >
            <FontAwesome5 name={'check'} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', gap: 5 }}>
          {/* Input for start date */}
          <TextInput
            value={Date1}
            onChangeText={(e) => setDate1(e)}
            maxLength={22}
            style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '50%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16 }}
            placeholder={`Start`}
          />
          {/* Input for end date */}
          <TextInput
            value={Date2}
            onChangeText={(e) => setDate2(e)}
            maxLength={22}
            style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '50%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16 }}
            placeholder={`End`}
          />
        </View>
      </View>
      {/* Display existing user experiences */}
      {userExperience.map((e, i) => <Experience Experience={e} key={e.id} index={i} />)}
    </>
  );
};

// Export the component
export default WorkComponent;
