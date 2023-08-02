import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, View, StyleSheet, FlatList } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native-paper";

const data = [
  { id: "1", label: "Option 1" },
  { id: "2", label: "Option 2" },
  { id: "3", label: "Option 3" },
  { id: "4", label: "Option 4" },
];

const editchecklist = () => {
  const [selectedValue, setSelectedValue] = useState<{
    id: string;
    label: string;
  }>();

  const handleSelect = (item: any) => {
    setSelectedValue(item);
  };

  const handleSave = () => {
    if (selectedValue) {
      console.log("Saved item:", selectedValue);
    } else {
      console.log("No item selected to save.");
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View
        style={
          item.id === selectedValue?.id
            ? styles.selectedItem
            : styles.itemContainer
        }
      >
        <Text style={styles.itemText}>{item.label}</Text>
        <View style={styles.Icons}>
          <TouchableOpacity onPress={() => handleSelect(item)}>
            <MaterialIcons name="delete" size={28} color="#EA3838" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelect(item)}>
            <MaterialIcons name="check-box" size={28} color="#61D34E" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>Printing list 01</Text>
      </View>
      <View style={styles.Task}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View />}
        />
        <View style={styles.card}>
          <TouchableOpacity style={styles.taskContainer}>
            <MaterialIcons name="add-circle" size={28} color="black" />
            <Text style={styles.taskText}>Add a new task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    padding: 6,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 12,
  },
  sectionHeaderContainer: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionHeaderText: {
    fontSize: 15,
    fontWeight: "700",
  },
  itemContainer: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
  },
  itemText: {
    fontSize: 15,
    color: "#514F4F",
    fontWeight: "700",
    marginBottom: 8,
  },
  selectIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  Icons: {
    flexDirection: "row",
    gap: 20,
  },
  Task: {
    height: "auto",
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  taskText: {
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "700",
    color: "#6A6A6A"
  },
});

export default editchecklist;
