import {
  AntDesign,
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";

const editplanning = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.mainHeading}>
          <Text style={styles.title}>Raw material requirement for P1</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.SubView1}>
            <View style={styles.subPra1}>
              <Entypo name="notification" size={17} color="black" />
              <Text>Status</Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#FEFEFE",
                  backgroundColor: "#5BB66F",
                  paddingHorizontal: 6,
                  paddingVertical: 1,
                  borderRadius: 4,
                }}
              >
                In progress
              </Text>
            </View>
          </View>
          <View style={styles.SubView1}>
            <View style={styles.subPra1}>
              <AntDesign name="profile" size={17} color="black" />
              <Text>Asignees</Text>
            </View>
            <View>
              <Text>Pratham Yadav</Text>
            </View>
          </View>
          <View style={styles.SubView1}>
            <View style={styles.subPra1}>
              <Fontisto name="date" size={17} color="black" />
              <Text>Due date</Text>
            </View>
            <View>
              <Text>July 16,2023</Text>
            </View>
          </View>
          <View style={styles.SubView1}>
            <View style={styles.subPra1}>
              <MaterialIcons name="keyboard-arrow-up" size={17} color="black" />
              <Text>Priority</Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#FEFEFE",
                  backgroundColor: "#DE1D1D",
                  paddingHorizontal: 6,
                  paddingVertical: 1,
                  borderRadius: 4,
                }}
              >
                High
              </Text>
            </View>
          </View>
          <View style={styles.attachement}>
            <View style={styles.subPra1}>
              <Ionicons name="time-sharp" size={17} color="#BBB9B9" />
              <Text>Attachment</Text>
            </View>
            <View style={styles.pdf}>
              <MaterialIcons name="picture-as-pdf" size={17} color="red" />
              <Text style={styles.pdfText}>JSS TRG.pdf</Text>
            </View>
            <View style={styles.pdf}>
              <Ionicons name="add-circle-outline" size={17} color="black" />
              <Text style={styles.pdfText}>Attach</Text>
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionHeading}>Description</Text>
          <Text style={styles.descriptionText}>
            We have to complete this task AS SOON AS POSSIBLE! and be careful
            with all the machines. Admin can tag an employee like{" "}
            <Link href={"#"} style={styles.link}>
              @pratham
            </Link>
          </Text>
        </View>
        <View style={styles.taskContanier}>
          <Text style={styles.taskHeading}>Subtask/Check List</Text>
          <View style={styles.taskCard}>
            <Text style={styles.taskSubHeading}>Check list</Text>
            <View style={styles.taskCardSection}>
              <Text style={styles.taskCardText}>
                Choose the appropriate lamination material (thermal, adhesive,
                etc.) for the order.
              </Text>
              <View style={styles.iconBtn}>
                <Entypo name="cross" size={24} color="#EA3838" />
                <Ionicons name="checkbox-outline" size={24} color="#61D34E" />
              </View>
            </View>
            <View style={styles.taskCardSection}>
              <Text style={styles.taskCardText}>
                Prepare the lamination machine for the specific order.
              </Text>
              <View style={styles.iconBtn}>
                <Entypo name="cross" size={24} color="#EA3838" />
                <Ionicons name="checkbox-outline" size={24} color="#61D34E" />
              </View>
            </View>
            <View style={styles.taskBtn}>
            <View style={styles.taskDetail}>
              <Text style={styles.tastText}>Printing list 01</Text>
              <AntDesign name="right" size={17} color="black" />
              </View>  
            </View>
          </View>
          <View style={styles.taskCard}>
            <Text style={styles.taskSubHeading}>Check list</Text>
            <View style={styles.taskCardSection}>
              <Text style={styles.taskCardText}>
                Choose the appropriate lamination material (thermal, adhesive,
                etc.) for the order.
              </Text>
              <View style={styles.iconBtn}>
                <Entypo name="cross" size={24} color="#EA3838" />
                <Ionicons name="checkbox-outline" size={24} color="#61D34E" />
              </View>
            </View>
            <View style={styles.taskCardSection}>
              <Text style={styles.taskCardText}>
                Prepare the lamination machine for the specific order.
              </Text>
              <View style={styles.iconBtn}>
                <Entypo name="cross" size={24} color="#EA3838" />
                <Ionicons name="checkbox-outline" size={24} color="#61D34E" />
              </View>
            </View>
            <View style={styles.taskBtn}>
            <View style={styles.taskDetail}>
              <Text style={styles.tastText}>Printing list 01</Text>
              <AntDesign name="right" size={17} color="black" />
              </View>  
            </View>
          </View>
        </View>
        <View style={styles.attachementContainer}>
                  <Text style={styles.attachementText}>Attachment</Text>
                  <View style={styles.attachementPdf}>
                  <FontAwesome name="file-pdf-o" size={29} color="red" />
                  <Text style={styles.attachementText}>JSS TRG.pdf</Text>
                  </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default editplanning;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  mainHeading: {
    paddingHorizontal: 0,
    paddingVertical: 24,
    alignItems: "center",
    gap: 16,
    flexShrink: 0,
  },
  title: {
    // width: 370,
    // height: 60,
    color: "#444343",
    fontWeight: "400",
    fontSize: 24,
    // lineHeight: 30,
  },
  subContainer: {
    flexDirection: "column",
    paddingHorizontal: 22,
    paddingVertical: 16,
    alignItems: "flex-start",
    gap: 20,
    fontSize: 13,
  },
  SubView1: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 46,
  },
  subPra1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  pdf: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderWidth: 0.8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderColor: "#F2F2F2",
    fontSize: 13,
  },
  pdfText: {
    marginLeft: 8,
    fontSize: 13,
  },
  attachement: {
    // width:340,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 15,
    fontSize: 13,
  },
  description: {
    paddingTop: 9,
    paddingRight: 22,
    paddingBottom: 17,
    paddingLeft: 22,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 9,
  },
  descriptionHeading: {
    color: "#565454",
    fontSize: 16,
    fontWeight: "500",
  },
  descriptionText: {
    color: "#676767",
    fontSize: 15,
    fontWeight: "400",
  },
  link: {
    textDecorationLine: "underline",
    color: "#4486EB",
  },
  taskContanier: {
    paddingTop: 12,
    paddingRight: 21,
    paddingBottom: 3,
    paddingLeft: 22,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 19,
  },
  taskHeading: {
    color: "#565454",
    fontSize: 16,
    fontWeight: "500",
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  taskCard: {
    width: 368,
    borderRadius: 12,
    backgroundColor: "#FFF",
    flexShrink: 0,
  },
  taskSubHeading: {
    color: "#514F4F",
    fontSize: 14,
    fontWeight: "500",
    
  },
  taskCardSection: {
    flexDirection: "row",
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 8,
    borderBottomWidth: 0.5,
    backgroundColor: "#FFF",
    alignItems: "center",
    gap: 24,
    alignSelf: "stretch",
  },
  taskCardText: {
    width: 264,
    color: "#514F4F",
    fontSize: 13,
    fontWeight: "400",
  },
  iconBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
  },
  taskBtn:{
    paddingTop: 13,
    paddingRight: 16,
    paddingBottom: 19,
    paddingLeft: 11
  },
  taskDetail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 206
  },
  tastText:{
    color: "#393838",
    fontSize: 16,
    fontWeight: "400"
  }, 
  attachementContainer:{
    paddingTop: 12,
    paddingRight: 22,
    paddingBottom: 29.135,
    paddingLeft: 22,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 25.865
  },
  attachementText: {
    color: "#565454",
    fontSize: 16,
    fontWeight: "500"
  },
  attachementPdf: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F1EBEB",
    color: "#383838"
  }
});
