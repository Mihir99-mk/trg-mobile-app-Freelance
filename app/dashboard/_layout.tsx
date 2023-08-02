import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"

export default () => {
    return (
        <Tabs
            initialRouteName='home'
            screenOptions={{
                headerShown: true, // hide labels
                // tabBarActiveTintColor: theme['button-color'], // active icon color: ;
                tabBarInactiveTintColor: "gray", // inactive icon color: ;
                tabBarShowLabel: true,
                tabBarStyle: {
                    minHeight: 50,
                    // backgroundColor: theme['tabs-color'], // TabBar background
                    borderTopWidth: 0
                    // backgroundColor: "#f8fbf7"
                },
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    tabBarLabel: 'Dashboard',
                    headerTitle: "Dashboard",
                    headerShown: false,
                    headerStyle: {
                        flexDirection: "row",
                        justifyContent: "center"
                        // backgroundColor: theme['tabs-color']
                    },
                    headerLeft: () => <Ionicons name='arrow-back' size={20} style={{marginLeft: 20}} />,
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" size={20} color={color} />
                }}
            />
            <Tabs.Screen
                name='kpis'
                options={{
                    tabBarLabel: 'KPIs',
                    headerShown: false,
                    // headerTitle: 'Home screen',
                    tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name='notifications'
                options={{
                    tabBarLabel: 'Notifications',
                    headerShown: false,
                    // headerTitle: 'Home screen',
                    tabBarIcon: ({ color, size }) => <Ionicons name="notifications" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    // headerTitle: 'Home screen',
                    tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />
                }}
            />
        </Tabs>
    )
}
