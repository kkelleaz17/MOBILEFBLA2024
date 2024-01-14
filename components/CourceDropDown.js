import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

// CourceDropDown component definition
export default function CourceDropDown({ setListValue, ListValue }) {

  // Sample data for the dropdown
  const data = [
    { label: 'Math', value: 'math' },
    { label: 'Elective', value: 'elective' },
    { label: 'Performing Arts', value: 'performing_arts' },
    { label: 'CTE', value: 'cte' },
    { label: 'English', value: 'english' },
    { label: 'Science', value: 'science' },
    { label: 'Social Studies', value: 'social_studies' },
    { label: 'Physical Education', value: 'physical_education' },
    { label: 'Other', value: 'other' },
  ];

  // Render each item in the dropdown
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    // Dropdown component with specified styles and properties
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      placeholder={'Other'}
      labelField="label"
      valueField="value"
      value={ListValue}
      onChange={item => {
        // Callback to set the selected value in the parent component's state
        setListValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
}

// Styles for the component
const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#D9D9D9'
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
