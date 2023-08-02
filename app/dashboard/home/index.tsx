import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Avatar, FAB, IconButton, Searchbar, Text } from 'react-native-paper'
import { Card } from 'react-native-paper'
import {useRouter} from "expo-router"
import TabsHeader from '../../components/customs/TabsHeader'

const home = () => {
    const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('');

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
          <Card style={styles.card} onPress={() => router.push("/dashboard/home/planning")}>
            <Card.Content>
              <Text variant="titleLarge">Planning</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card} onPress={() => router.push("/dashboard/home/viewTask")}>
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

      <View style={styles.subSection}>
        <Text style={styles.subHeading}>Machinery</Text>
        <Card.Title
          style={{ borderLeftColor: "green", borderLeftWidth: 4 }}
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
        />
      </View>

      
      <FAB
        style={styles.fab}
        icon="plus"
        label='New Task'
        
        onPress={() => {
          router.push("/dashboard/home/task")
        }}
      />
    </SafeAreaView>
  )
}

export default home

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
    gap: 4,
    marginVertical: 10
  },
  card: {
    backgroundColor: "#5CA0DF",
    width: screenWidth / 2 - 15,
    height: 112
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#5495DB',
  },
})