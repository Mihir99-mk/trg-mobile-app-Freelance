import { useRouter } from 'expo-router';
import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Avatar, IconButton, Text } from 'react-native-paper';
import { Card } from 'react-native-paper';
import TabsHeader from '../components/customs/TabsHeader';
import { useState } from 'react';

const kpis = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <StatusBar />
      <TabsHeader title="KPI" />

      <View style={styles.subSection}>
          <Card style={styles.cardPerformance}>
            <Card.Content>
              <Text variant="titleLarge">Total Orders Completed <Text>04</Text></Text>
              <Text variant="titleMedium">Total Orders Created <Text>05</Text></Text>
              <Text variant="titleMedium">Total In Progress Orders <Text>01</Text></Text>
            </Card.Content>
          </Card>
        </View>
      <View style={styles.subSection}>
        <Text style={styles.subHeading}>Workers</Text>
        <View style={styles.cardsContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Avatar.Image size={50}  style={styles.cardAvatar} source={require("../../assets/images/profile.jpg")}  />
              <Text style={styles.cardTitle} variant="titleLarge">Raju Srivastav</Text>
              <Text style={styles.cardSubtitle} variant="labelSmall">Printing Worker</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
            <Avatar.Image size={50}  style={styles.cardAvatar} source={require("../../assets/images/profile.jpg")}  />
              <Text style={styles.cardTitle} variant="titleLarge">Katoch Verma</Text>
              <Text style={styles.cardSubtitle} variant="labelSmall">Packaging worker</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
            <Avatar.Image size={50}  style={styles.cardAvatar} source={require("../../assets/images/profile.jpg")}  />
              <Text style={styles.cardTitle} variant="titleLarge">Raju Srivastav</Text>
              <Text style={styles.cardSubtitle} variant="labelSmall">Printing Worker</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
            <Avatar.Image size={50}  style={styles.cardAvatar} source={require("../../assets/images/profile.jpg")}  />
              <Text style={styles.cardTitle} variant="titleLarge">Katoch Verma</Text>
              <Text style={styles.cardSubtitle} variant="labelSmall">Packaging worker</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
            <Avatar.Image size={50}  style={styles.cardAvatar} source={require("../../assets/images/profile.jpg")}  />
              <Text style={styles.cardTitle} variant="titleLarge">Raju Srivastav</Text>
              <Text style={styles.cardSubtitle} variant="labelSmall">Packaging worker</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
            <Avatar.Image size={50}  style={styles.cardAvatar} source={require("../../assets/images/profile.jpg")}  />
              <Text style={styles.cardTitle} variant="titleLarge">Katoch Verma</Text>
              <Text style={styles.cardSubtitle} variant="labelSmall">Printing Worker</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default kpis;

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10
  },
  subSection: {
    marginVertical: 10,
    flexDirection: "column",
    gap: 4
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray"
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 15
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: screenWidth / 2 - 25,
    height: 180,
    marginVertical: 4,
    marginHorizontal: 4
  },
  cardTitle: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 12
  },
  cardSubtitle: {
    textAlign: "center"
  },
  cardAvatar : {
    alignSelf: "center",
  },
  cardPerformance : {
    padding: 12,
    width: screenWidth / 1 - 32,
    marginHorizontal: 4,
    backgroundColor: "#5CA0DF",
    borderRadius: 18

  },
  cardPerformanceText: {
    marginTop: 7.5,
    marginBottom: 7.5,
    
  }
});
