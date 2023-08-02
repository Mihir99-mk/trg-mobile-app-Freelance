import React from "react";
import { Stack, router } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{ animation: "slide_from_bottom" }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="planning" options={{ headerShown: false }} />
      <Stack.Screen
        name="task"
        options={{ headerShown: false, animationDuration: 2 }}
      />
      <Stack.Screen
        name="machinery"
        options={{
          headerShown: true,
          headerTitle: "Machinery",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={25}
              color="black"
              onPress={() => router.back()}
            />
          ),
          animationDuration: 2,
        }}
      />
      <Stack.Screen
        name="members"
        options={{
          headerShown: true,
          headerTitle: "Team Members",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={25}
              color="black"
              onPress={() => router.back()}
            />
          ),
          headerRight: ()=><MaterialCommunityIcons
          name="dots-vertical"
          size={24}
          color="black"
        />,
          animationDuration: 2,
        }}
      />
    </Stack>
  );
};

export default _layout;
