import FontAwesome from "@expo/vector-icons/FontAwesome"
import React, { useState } from "react"
import { Link, Tabs } from "expo-router"
import { Pressable, useColorScheme } from "react-native"
import InfoIconLink from "../InfoIconLink"
import Colors from "../../constants/Colors"
import { Button } from "react-native"
import { View } from "../../components/Themed"
import LoginScreen from "../loginScreen"

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comment" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Reviews",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="arrow-right" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  )
}
