import React from 'react'
import { Stack } from "expo-router";

const _layout = () => {
    return (
        <Stack initialRouteName='signup'>
            <Stack.Screen name="signup" options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="signin" options={{ headerShown: false, animation: 'slide_from_left' }} />
        </Stack>
    )
}

export default _layout