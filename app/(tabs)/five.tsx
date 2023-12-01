import React from "react"
import { Image, StyleSheet } from "react-native"
import { View } from "../../components/Themed"

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../figma_statics/Edit_Card.jpg")}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
})
