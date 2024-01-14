// Import necessary React Native components and libraries
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
const BoxWidth = Math.floor(((ScreenWidth * 0.95) / 2) - 14);
import Animated from 'react-native-reanimated';
import { FadeInUp } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Functional component for displaying quick links
export default function QuickLinks() {
  // Access navigation functionality using custom hook
  const Nav = useNavigation();

  // Sub-component to represent each quick link box
  const Box = ({ iconname, name, edit }) => {
    // Function to handle click on a quick link box
    const click = () => {
      HandleClick(edit, iconname);
    };

    return (
      <TouchableOpacity style={{ width: BoxWidth, borderRadius: 8, backgroundColor: '#D9D9D9', padding: 25, height: 125, justifyContent: 'center', alignItems: 'center' }} onPress={click}>
        <FontAwesome5 name={iconname} size={20} />
        <Text style={{ textAlign: 'center', fontSize: 20 }}>{name}</Text>
      </TouchableOpacity>
    );
  };

  // Function to handle click on a quick link box and navigate to 'editdetails' screen
  const HandleClick = (Value, Icon) => {
    console.log(Icon);
    Nav.navigate('editdetails', {
      edit: Value,
      icon: Icon,
    });
  };

  return (
    <Animated.View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '95%', gap: 5 }} entering={FadeInUp}>
      {/* Render quick link boxes using the Box component */}
      <Box iconname={'network-wired'} name={'Skill'} edit={'skills'} />
      <Box iconname={'desktop'} name={'Course'} edit={'coursesTaken'} />
      <Box iconname={'running'} name={'Sport'} edit={'sports'} />
      <Box iconname={'people-arrows'} name={'Club'} edit={'clubs'} />
    </Animated.View>
  );
}
