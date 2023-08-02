import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Searchbar, Text } from "react-native-paper";

const members = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          marginBottom: 22
        }}
      />
        <View style={styles.subSection}>
          <View style={styles.main}>
            <View style={styles.subDetails}>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={56}
                color="black"
              />
              <View style={styles.details}>
                <Text style={styles.name}>Raju Srivastav</Text>
                <Text style={styles.email}>raju.srivas@gmail.com</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.subSection}>
          <View style={styles.main}>
            <View style={styles.subDetails}>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={56}
                color="black"
              />
              <View style={styles.details}>
                <Text style={styles.name}>Raju Srivastav</Text>
                <Text style={styles.email}>raju.srivas@gmail.com</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.subSection}>
          <View style={styles.main}>
            <View style={styles.subDetails}>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={56}
                color="black"
              />
              <View style={styles.details}>
                <Text style={styles.name}>Raju Srivastav</Text>
                <Text style={styles.email}>raju.srivas@gmail.com</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.subSection}>
          <View style={styles.main}>
            <View style={styles.subDetails}>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={56}
                color="black"
              />
              <View style={styles.details}>
                <Text style={styles.name}>Raju Srivastav</Text>
                <Text style={styles.email}>raju.srivas@gmail.com</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.subSection}>
          <View style={styles.main}>
            <View style={styles.subDetails}>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={56}
                color="black"
              />
              <View style={styles.details}>
                <Text style={styles.name}>Raju Srivastav</Text>
                <Text style={styles.email}>raju.srivas@gmail.com</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.subSection}>
          <View style={styles.main}>
            <View style={styles.subDetails}>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={56}
                color="black"
              />
              <View style={styles.details}>
                <Text style={styles.name}>Raju Srivastav</Text>
                <Text style={styles.email}>raju.srivas@gmail.com</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.subSection}>
          <View style={styles.main}>
            <View style={styles.subDetails}>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={56}
                color="black"
              />
              <View style={styles.details}>
                <Text style={styles.name}>Raju Srivastav</Text>
                <Text style={styles.email}>raju.srivas@gmail.com</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>
        <Button style={styles.button} icon={"plus"} >Add Member</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default members;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    marginTop: 22,
  },
  subSection: {
    // marginVertical: 10,
    flexDirection: "column",
    gap: 4,
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
  },
  main: {
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#E4E4E4",
    borderWidth: 1,
    borderTopWidth: 0, 
    borderRightWidth: 0,
    borderLeftWidth: 0, 
    flexDirection: "row",
    paddingVertical: 18,
  },
  details: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  subDetails: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 11,
  },
  name: {
    color: "#262525",
    fontSize: 16,
    fontWeight: "500",
  },
  email: {
    color: "#8B8787",
    fontSize: 16,
    fontWeight: "400",
  },
  button:{
    width:'100%',
    backgroundColor: "#3085FE",
    paddingHorizontal: 104,
    paddingVertical: 4,
    borderRadius: 8,
    color: "#FEFEFE",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 20
  }
});
