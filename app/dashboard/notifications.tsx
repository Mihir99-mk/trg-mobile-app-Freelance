import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import TabsHeader from '../components/customs/TabsHeader';
import { useState } from 'react';

type Props = {
  name:string, time:string, message:string, subtitle:string
}

const notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar />
        <View style={styles.header}>
          <Text style={styles.title}>Notifications</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} textColor='#5E5E5E'>Mark as Unread</Button>
          <Button style={styles.button } textColor='#5E5E5E'>Mark All as Read</Button>
        </View>
        <View style={styles.cardNotHover}>
      <View style={styles.cardContent}>
        <View style={styles.avatarNameContainer}>
          <Avatar.Image size={40} style={styles.cardAvatar} source={require('../../assets/images/profile.jpg')} />
          <View style={styles.nameDateTimeContainer}>
            <Text style={styles.cardTitle}>Raju Commented in Printing Task 1</Text>
            <Text style={styles.cardTime}>July 27, 2023</Text>
          </View>
        </View>
        <Text style={styles.cardSubtitle}>Raju</Text>

        <Text style={styles.cardText}>@karan.s this task was given to you 4 days ago and there is no update till now this is your last warning next time a strict action will be taken.</Text>
      </View>
    </View>
        <NotificationCard
          name="Raju"
          time="July 27, 2023"
          message="@karan.s this task was given to you 4 days ago and there is no update till now this is your last warning next time a strict action will be taken." subtitle={"Raju"}        />
          <NotificationCard
          name="Raju"
          time="July 27, 2023"
          message="@karan.s this task was given to you 4 days ago and there is no update till now this is your last warning next time a strict action will be taken." subtitle={"Raju"}      />
          <NotificationCard
          name="Raju"
          time="July 27, 2023"
          message="@karan.s this task was given to you 4 days ago and there is no update till now this is your last warning next time a strict action will be taken." subtitle={"Raju"}        />
          <NotificationCard
          name="Raju"
          time="July 27, 2023"
          message="@karan.s this task was given to you 4 days ago and there is no update till now this is your last warning next time a strict action will be taken." subtitle={"Raju"}        />
          <NotificationCard
          name="Raju"
          time="July 27, 2023"
          message="@karan.s this task was given to you 4 days ago and there is no update till now this is your last warning next time a strict action will be taken." subtitle={"Raju"}        />
      </ScrollView>
    </SafeAreaView>
  );
};

const NotificationCard = ({ name, time, message, subtitle }:Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.avatarNameContainer}>
          <Avatar.Image size={40} style={styles.cardAvatar} source={require('../../assets/images/profile.jpg')} />
          <View style={styles.nameDateTimeContainer}>
            <Text style={styles.cardTitle}>{name} Commented in Printing Task 1</Text>
            <Text style={styles.cardTime}>{time}</Text>
          </View>
        </View>
        {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}

        {message && <Text style={styles.cardText}>{message}</Text>}
      </View>
    </View>
  );
};

export default notifications;

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    borderRadius: 5,
    padding: 4,
    width: screenWidth / 2 - 22,
    borderColor: '#8E8A8A',
    borderWidth: 1,
    color: '#5E5E5E',
    
  },
  card: {
    elevation: 2,
    backgroundColor: '#E4E4E4',
    padding: 2,
    borderBottomColor: "gray",
    borderWidth: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  cardNotHover: {
    elevation: 2,
    backgroundColor: '#F6F6F6',
    padding: 2,
    borderBottomColor: "gray",
    borderWidth: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  cardContent: {
    padding: 8,
    color: "#706C6C"
  },
  avatarNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameDateTimeContainer: {
    marginLeft: 8,
    color : "#515151"
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#949494',
  },
  cardTime: {
    color: 'gray',
  },
  cardAvatar: {
    alignSelf: 'center',
  },
  cardText: {
    fontSize: 16,
    color: "#3D3D3D"
  },
});