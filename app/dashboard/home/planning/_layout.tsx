import React from 'react'
import { Stack, useRouter } from "expo-router";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { StyleSheet, View } from 'react-native';

const _layout = () => {
    const router = useRouter()
    return (
        <Stack initialRouteName='index'>
            <Stack.Screen name="index" 
                options={{ 
                    headerShown: true, 
                    headerTitle: "Planning", 
                    headerLeft: () => <Ionicons name='arrow-back' size={25} color="black" onPress={() => router.back()} /> 
                }} 
            />
            <Stack.Screen name="editplanning" 
                options={{ 
                    headerShown: true, 
                    headerTitle: "",
                    headerLeft: () => <Ionicons name='arrow-back' size={25} color="black" onPress={() => router.back()} />,
                    headerRight: ()=> <View style={styles.navbar}>
                        <MaterialIcons name="check-circle-outline" size={26} color="black" />
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </View> 
                }} 
            />
        </Stack>
    )
}

export default _layout

const styles = StyleSheet.create({
    navbar:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        gap: 12
    }
})