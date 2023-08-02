import { Stack } from 'expo-router'
import React from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        secondary: 'yellow',
    },
};

const Layout = () => {
    return (
        <PaperProvider theme={theme}>
            <Stack initialRouteName='dashboard'>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="auth" options={{ headerShown: false }} />
                <Stack.Screen name="dashboard" options={{ headerShown: false }} />
            </Stack>
        </PaperProvider>
    )
}

export default Layout