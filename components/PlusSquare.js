// Import necessary React Native components and libraries
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../styles/Plusstyles';

// Functional component for displaying a plus square
export default function PlusSquare({ iconname, name, isList, Search, HandleClick }) {
  // If there is a search query and the item name does not match the search, don't render the component
  if (Search !== '' && !name.toLowerCase().includes(Search.toLowerCase())) {
    return null;
  }

  // Determine the style and font size based on whether it's a list item or a regular square
  const BoxStyle = isList ? styles.listsquare : styles.square;
  const FontSize = isList ? 15 : 10;

  return (
    <TouchableOpacity style={BoxStyle} onPress={() => HandleClick(iconname)}>
      {/* Display FontAwesome5 icon */}
      <FontAwesome5 name={iconname} size={25} />
      {/* Display item name */}
      <Text style={{ fontSize: FontSize }}>{name}</Text>
    </TouchableOpacity>
  );
}
