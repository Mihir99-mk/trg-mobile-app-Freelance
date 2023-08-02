import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

const data = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
];

const SelectList = () => {
  const [selectedValue, setSelectedValue] = useState<{
    id:string,
    label:string
  }>();

  const handleSelect = (item: any) => {
    setSelectedValue(item);
  };

  const handleSave = () => {
    if (selectedValue) {
      console.log('Saved item:', selectedValue);
    } else {
      console.log('No item selected to save.');
    }
  };

  const renderItem = ({ item }:any) => (
    <TouchableOpacity onPress={() => handleSelect(item)}>
      <View style={item.id === selectedValue?.id ? styles.selectedItem : styles.itemContainer}>
        <Text style={styles.itemText}>{item.label}</Text>
        {item.id === selectedValue?.id && <Text style={styles.selectIcon}>✓</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
    overflow: 'hidden',
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#E8E8E8"
  },
  itemText: {
    fontSize: 16,
    color: "#4D4B4B",
    fontWeight: "600"
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  selectIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default SelectList;
