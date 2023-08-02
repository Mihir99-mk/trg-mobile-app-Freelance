import React, { useState } from "react";
import { Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { View } from "react-native";
import {
  Avatar,
  Button,
  FAB,
  IconButton,
  Searchbar,
  Text,
} from "react-native-paper";
import { Card } from "react-native-paper";
import { useRouter } from "expo-router";
import TabsHeader from "../../components/customs/TabsHeader";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const home = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TabsHeader title="Dashboard" />

      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <View style={styles.subSection}>
        <Text style={styles.subHeading}>Processes</Text>
        <View style={styles.cardsContainer}>
          <Card
            style={styles.card}
            onPress={() => router.push("/dashboard/home/planning")}
          >
            <Card.Content>
              <Text variant="titleLarge">Planning</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
          </Card>
          <Card
            style={styles.card}
            onPress={() => router.push("/dashboard/home/viewTask")}
          >
            <Card.Content>
              <Text variant="titleLarge">Task</Text>
              <Text variant="bodyMedium">View Tasks</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
          </Card>
        </View>
      </View>

      {/* <View style={styles.subSection}>
        <Text style={styles.subHeading}>Machinery</Text>
        <Card.Title
          style={{ borderLeftColor: "green", borderLeftWidth: 4 }}
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => (
            <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          )}
        />
      </View> */}
      <TouchableOpacity onPress={()=> router.push("dashboard/home/machinery")}>
      <View style={styles.machineCard}>
        <View style={styles.machineCardTitle}>
          <View style={styles.machineSubHeading}>
            <Text style={styles.machineHeading}>Machinery</Text>
            <Feather name="settings" size={24} color="black" />
          </View>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
        <Text style={styles.machineStatus}>Status</Text>
        <Text style={styles.machineWorking}>Working 16</Text>
        <View style={styles.machineCardBottom}>
          <Text style={styles.machineNotWorking}>Not working 01!</Text>
          <Button style={styles.machineButton}>View All</Button>
        </View>
      </View>
      </TouchableOpacity>
      <FAB
        style={styles.fab}
        icon="plus"
        label="New Task"
        onPress={() => {
          router.push("/dashboard/home/task");
        }}
      />
    </SafeAreaView>
  );
};

export default home;

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    flex: 1,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subSection: {
    marginVertical: 10,
    flexDirection: "column",
    gap: 4,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#5CA0DF",
    width: screenWidth / 2 - 15,
    height: 112,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#5495DB",
  },
  machineCard: {
    borderRadius: 15,
    color: "#FFF",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 6,
    marginHorizontal: 16,
    
  },
 
  machineSubHeading: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  machineCardBottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  machineCardTitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  machineHeading: {
    color: "#434141",
    fontSize: 22,
    fontWeight: "400",
  },
  machineStatus: {
    color: "#282828",
    fontSize: 16,
    fontWeight: "500",
  },
  machineWorking: {
    color: "#424141",
    fontSize: 14,
    fontWeight: "400",
  },
  machineNotWorking: {
    color: "#424141",
    fontSize: 14,
    fontWeight: "400",
  },
  machineButton: {
    backgroundColor: "#5495DB",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    gap: 10,
    borderRadius: 8,
    color: "#F6F6F6",
    fontSize: 13,
    fontWeight: "500",
  },
});
