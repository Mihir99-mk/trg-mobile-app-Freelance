import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import * as SecureStore from "expo-secure-store";
import { useRouter } from 'expo-router';

const TabsHeader = ({ title, button }: any) => {
    const router = useRouter();

    const logoutHandler = async () => {
        await SecureStore.deleteItemAsync("userDetails");
        return router.push("/")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {button ? <Button mode='outlined' onPress={async () => await logoutHandler()}>{button}</Button> : ''}
        </View>
    )
}

export default TabsHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10
    }
})