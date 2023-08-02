import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TabsHeader from '../components/customs/TabsHeader'
import { Avatar, Card, IconButton, SegmentedButtons } from 'react-native-paper'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import UserStore from '../stores/user.store'
import { router } from 'expo-router'

const profile = () => {
  const userDetails = UserStore((state: any) => state.userDetails)
  const [value, setValue] = useState('off-shift');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar />
      <TabsHeader title="Profile" button="Log out" />

      <Card.Title
        title={`${userDetails?.firstName} ${userDetails?.lastName}`}
        subtitle={userDetails?.email}
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <MaterialIcons name='edit' size={20} />}
      />

      <View style={{ marginHorizontal: 50, marginTop: 10 }}>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: 'off-shift',
              label: 'Off Shift',
            },
            { value: 'on-shift', label: 'On Shift' },
          ]}
        />
      </View>

      <View style={{ marginVertical: 20 }}>
        <TouchableOpacity style={styles.menuOptions}>
          <Ionicons name='document' size={20} />
          <Text>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuOptions} onPress={()=>router.push("dashboard/home/members")}>
          <Ionicons name='people' size={20} />
          <Text>Manage Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuOptions}>
          <Ionicons name='trophy' size={20} />
          <Text>Rewards</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView >
  )
}

export default profile

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10
  },
  menuOptions: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 10
  }
})