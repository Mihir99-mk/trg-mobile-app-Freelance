import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Badge, Button, Card, Text } from 'react-native-paper'

const index = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.filterContainer}>
                <Button icon="check" mode="contained" style={{ width: 100 }} onPress={() => console.log('Pressed')}>All</Button>
                <Button icon="filter" mode="contained" style={{ width: 100 }} onPress={() => console.log('Pressed')}>Filters</Button>
                <Button icon="sort" mode="contained" style={{ width: 100 }} onPress={() => console.log('Pressed')}>Sort By</Button>
            </View>

            <View>
                <ScrollView>
                    <Card style={styles.card} onPress={()=>router.push("dashboard/home/planning/editplanning")}>
                        <Card.Content>
                            <Text variant="labelSmall">Planning</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
                                <Text variant='bodyLarge'>Raw material</Text>
                                <Ionicons name='arrow-forward' size={20} />
                            </View>
                            <Text variant="bodySmall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in alias similique.</Text>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: "row", alignContent: "center", justifyContent: "space-between", marginTop: 15 }}>
                            <Text variant='bodySmall' style={{ color: "orange" }}>6th May, 2023</Text>
                            <Badge>In Progress</Badge>
                        </Card.Content>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Text variant="labelSmall">Planning</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
                                <Text variant='bodyLarge'>Raw material</Text>
                                <Ionicons name='arrow-forward' size={20} />
                            </View>
                            <Text variant="bodySmall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in alias similique.</Text>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: "row", alignContent: "center", justifyContent: "space-between", marginTop: 15 }}>
                            <Text variant='bodySmall' style={{ color: "orange" }}>6th May, 2023</Text>
                            <Badge>In Progress</Badge>
                        </Card.Content>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Text variant="labelSmall">Planning</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
                                <Text variant='bodyLarge'>Raw material</Text>
                                <Ionicons name='arrow-forward' size={20} />
                            </View>
                            <Text variant="bodySmall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in alias similique.</Text>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: "row", alignContent: "center", justifyContent: "space-between", marginTop: 15 }}>
                            <Text variant='bodySmall' style={{ color: "orange" }}>6th May, 2023</Text>
                            <Badge>In Progress</Badge>
                        </Card.Content>
                    </Card>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10
    },
    filterContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        paddingVertical: 10
    },
    card: {
        marginVertical: 5
    }
})