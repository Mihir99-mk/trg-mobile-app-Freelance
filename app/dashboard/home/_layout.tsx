import React from 'react'
import { Stack } from "expo-router";

const _layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ animation: 'slide_from_bottom' }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="planning" options={{ headerShown: false }} />
            <Stack.Screen name="task" options={{ headerShown: false, animationDuration: 2 }} />
        </Stack>
    )
}

export default _layout