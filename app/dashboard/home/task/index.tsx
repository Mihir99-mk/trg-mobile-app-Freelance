import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import DatePicker from "../../../components/customs/DatePicker";

const index = () => {
  const [priority, setPriority] = useState("High");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const saveWork = async () => {
    try {
      await SecureStore.setItemAsync('title', title);
      await SecureStore.setItemAsync('description', description);
      await SecureStore.setItemAsync('priority', priority);
      console.log('Work details saved successfully!');
    } catch (error) {
      console.error('Error saving work details:', error);
    }
  };
 
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainView}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Details</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <TextInput placeholder={"Title*"} value={title}
                onChangeText={(text:string)=>setTitle(text)} style={styles.inputStyle} />
              <TextInput
                placeholder={"Description"}
                style={styles.inputStyle}
                value={description}
                onChangeText={(text:string)=>setDescription(text)}
                
              />
              <View style={styles.priorityContainer}>
                <Text style={styles.priorityLabel}>Priority</Text>
                <Picker
                  selectedValue={priority}
                  style={styles.priorityPicker}
                  onValueChange={(itemValue) => setPriority(itemValue)}
                >
                  <Picker.Item label="High" value="High" />
                  <Picker.Item label="Medium" value="Medium" />
                  <Picker.Item label="Low" value="Low" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>Due Date</Text>
                <View style={styles.iconButtonContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      router.push("/dashboard/home/task/categorys")
                    }
                    style={styles.iconButton}
                  >
                    <DatePicker defaultDate={new Date(Date.now())} onDateChange={(value: any)=>console.log(value)} />
                      {/* <MaterialIcons
                        name="add-circle"
                        size={42}
                        color="black"
                        onPress={()=>console.log("date")}
                      /> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>Category</Text>
                <View style={styles.iconButtonContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      router.push("/dashboard/home/task/categorys")
                    }
                    style={styles.iconButton}
                  >
                    <MaterialIcons name="add-circle" size={42} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Task/Check List</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>Checklist</Text>
                <View style={styles.iconButtonContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      router.push("/dashboard/home/task/checklists")
                    }
                    style={styles.iconButton}
                  >
                    <MaterialIcons name="add-circle" size={42} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.cardContent}>
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>Task</Text>
                <View style={styles.iconButtonContainer}>
                  <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={styles.iconButton}
                  >
                    <MaterialIcons name="add-circle" size={42} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>Workers</Text>
                <View style={styles.iconButtonContainer}>
                  <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={styles.iconButton}
                  >
                    <MaterialIcons name="add-circle" size={42} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Attachments</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>Upload</Text>
                <View style={styles.iconButtonContainer}>
                  <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={styles.iconButton}
                  >
                    <IconButton
                      icon="plus"
                      iconColor="white"
                      style={styles.iconButtonIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.Button}>
          <Button style={styles.btn} onPress={()=>saveWork()}>Save Work</Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainView:{
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 31
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    padding: 8,
    marginVertical: 6,
  },
  cardContent: {},
  inputStyle: {
    backgroundColor: "#FFF",
  },
  priorityContainer: {
    flexDirection: "row",
    paddingHorizontal: 14,
    justifyContent: "space-between",
    alignItems: "center",
  },
  priorityLabel: {
    fontSize: 16,
    fontWeight: "700",
  },
  priorityPicker: {
    width: 120,
    height: 40,
  },
  section: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  sectionHeader: {
    color: "#FB3535",
    fontSize: 16,
    fontWeight: "400"
  },
  sectionHeaderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
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
  iconButtonIcon: {
    borderRadius: 40,
    backgroundColor: "black",
  },
  Button: {
    marginHorizontal:5,
    marginVertical: 15
  },
  btn: {
    width: 376,
    borderRadius: 6,
    alignSelf: "center",
    backgroundColor: "#5495DB",
    fontSize: 18,
    fontWeight: "400",
    color: "#FFF"
  }
  
});
