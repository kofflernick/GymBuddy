import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet, Image } from "react-native"
import React from "react"
import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./figma_statics/Appointment.jpg")}
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: "100%",
    height: "100%",
    //resizeMode: "contain",
  },
})
