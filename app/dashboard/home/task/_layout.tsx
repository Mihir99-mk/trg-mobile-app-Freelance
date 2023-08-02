import React from 'react'
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
import { Button } from 'react-native-paper';

const _layout = () => {
    const router = useRouter()
    return (
        <Stack initialRouteName='home'>
            <Stack.Screen name="index" 
                options={{ 
                    headerShown: true, 
                    headerTitle: "Add work Order", 
                    headerLeft: () => <Ionicons name='arrow-back' size={25} color="black" onPress={() => router.back()} /> 
                }} 
            />
            <Stack.Screen name="checklists" 
                options={{ 
                    headerShown: true, 
                    headerTitle: "Check List", 
                    headerLeft: () => <Ionicons name='arrow-back' size={25} color="black" onPress={() => router.back()} />,
                    headerRight: ()=> <Button onPress={()=>router.back()}>Save</Button>
                }} 
            />
            <Stack.Screen name="editchecklist" 
                options={{ 
                    headerShown: true, 
                    headerTitle: "Check List", 
                    headerLeft: () => <Ionicons name='arrow-back' size={25} color="black" onPress={() => router.back()} />,
                    headerRight: ()=> <Button onPress={()=>router.back()}>Save</Button>
                }} 
            />
            <Stack.Screen name="categorys" 
                options={{ 
                    headerShown: true, 
                    headerTitle: "Categories", 
                    headerLeft: () => <Ionicons name='arrow-back' size={25} color="black" onPress={() => router.back()} />, 
                    headerRight: ()=> <Button onPress={()=>router.back()}>Save</Button>
                }} 
            />
        </Stack>
        
    )
}

export default _layout