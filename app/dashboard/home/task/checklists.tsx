import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native-paper";

const data = [
  { id: "1", label: "Option 1" },
  { id: "2", label: "Option 2" },
  { id: "3", label: "Option 3" },
  { id: "4", label: "Option 4" },
];

const checklist = () => {
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
          <MaterialIcons name="delete" size={30} color="#EA3838" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelect(item)}>
          <MaterialIcons name="check-box" size={30} color="#61D34E" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeaderText}>Printing</Text>
          <View style={styles.iconButtonContainer}>
            <TouchableOpacity
              onPress={() => router.push("/dashboard/home/task/categorys")}
              style={styles.iconButton}
            >
              <MaterialIcons name="add-circle" size={42} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>Check List</Text>
            <View style={styles.iconButtonContainer}>
              <TouchableOpacity
                onPress={() => router.push("/dashboard/home/task/editchecklist")}
                style={styles.iconButton}
              >
                <Feather name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
        <View style={styles.IconCard}>
          <Text style={styles.IconText}>Lamination</Text>
          <TouchableOpacity>
            <View style={styles.IconCardButton}>
              <View style={styles.IconButton}>
                <MaterialIcons
                  name="add-circle-outline"
                  size={30}
                  color="#949494"
                />
                <Text style={styles.Text}>Create a new check list</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.IconCard}>
          <Text style={styles.IconText}>Packaging</Text>
          <TouchableOpacity>
            <View style={styles.IconCardButton}>
              <View style={styles.IconButton}>
                <MaterialIcons
                  name="add-circle-outline"
                  size={30}
                  color="#949494"
                />
                <Text style={styles.Text}>Create a new check list</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    padding: 8,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 12,
  },
  sectionHeaderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: "700",
  },
  iconButtonContainer: {
    flexDirection: "row",
  },
  iconButton: {
    borderRadius: 40,
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    fontSize: 16,
    color: "#514F4F",
    fontWeight: "700",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
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
  IconCard: {
    flexDirection: "column",
    marginHorizontal: 28,
    marginVertical: 24,
  },
  IconText: {
    fontSize: 20,
    paddingBottom: 20,
  },
  IconCardButton: {
    width: "100%",
    borderRadius: 28,
    borderWidth: 3,
    borderColor: "#949494",
    alignSelf: "center",
    borderStyle: "dashed",
  },
  IconButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 35,
  },
  Text: {
    color: "#6A6A6A",
    fontWeight: "700",
    paddingTop: 8,
  },
});

export default checklist;
