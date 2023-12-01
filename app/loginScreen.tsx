import React from "react"
import { Image, Pressable, StyleSheet } from "react-native"
import { View } from "../components/Themed"

type LoginScreenProps = {
  onLogin: () => void
}

function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onLogin} style={styles.pressable}>
        <Image
          source={require("./figma_statics/Login.jpg")}
          style={styles.image}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
})

export default LoginScreen
