import React from "react"
import { Pressable, GestureResponderEvent } from "react-native"
import { Link } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Colors from "../constants/Colors"
import { useColorScheme } from "react-native"

type InfoIconLinkProps = {
  onPress?: (event: GestureResponderEvent) => void // Define the type for onPress
}

const InfoIconLink: React.FC<InfoIconLinkProps> = ({ onPress }) => {
  const colorScheme = useColorScheme()

  return (
    <Link href="/modal" asChild>
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <FontAwesome
            name="calendar"
            size={25}
            color={Colors[colorScheme ?? "light"].text}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  )
}

export default InfoIconLink
