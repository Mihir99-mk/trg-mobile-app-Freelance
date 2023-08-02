import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
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

type Task = {
  priority: string
  description: string
  title: string
  date : string
}

const index = () => {
  const priorityRef = useRef("High");
  const descriptionRef = useRef<string | null>(null);
  const titleRef = useRef<string | null>(null);
  const dateRef = useRef<string | null>(null);
  const [workList, setWorkList] = useState<Task>();




  const saveWork = async () => {
    try {
      const title = titleRef.current;
      const description = descriptionRef.current;
      const priority = priorityRef.current
      const date = dateRef.current

      const extractedDate = date ? new Date(date).toISOString().split("T")[0] : null;


      if (!title || !description || !priority || !extractedDate) {
        console.log("failed")
        return;
      }

      const payload = {
        title,
        description,
        priority,
        date: extractedDate
      }


      const taskData = await SecureStore.setItemAsync("taskData", JSON.stringify(workList))
      const getTask = await SecureStore.getItemAsync("taskData");

      console.log(getTask)

      
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
              <TextInput placeholder={"Title*"} 
                onChangeText={(text:any)=>titleRef.current = text} style={styles.inputStyle} />
              <TextInput
                placeholder={"Description"}
                style={styles.inputStyle}
                onChangeText={(text:any)=>descriptionRef.current =text}
                
              />
              <View style={styles.priorityContainer}>
                <Text style={styles.priorityLabel}>Priority</Text>
                <Picker
                  style={styles.priorityPicker}
                  selectedValue={priorityRef.current}
                  onValueChange={(itemValue) => priorityRef.current = itemValue}
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
                    <DatePicker defaultDate={new Date(Date.now())} onDateChange={(value: any)=> dateRef.current = value} />
                     
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
