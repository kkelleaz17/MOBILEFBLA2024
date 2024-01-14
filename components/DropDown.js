import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

// Sample data for the dropdown
const data = [
  { label: 'Grid', value: '1' },
  { label: 'List', value: '2' },
];

// DropDown component definition
const DropDown = ({ setListStyle, ListStyle }) => {

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
      placeholder={'List'}
      labelField="label"
      valueField="value"
      value={ListStyle}
      onChange={item => {
        // Callback to set the selected value in the parent component's state
        setListStyle(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropDown;

// Styles for the component
const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '25%',
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
    fontSize: 10,
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
