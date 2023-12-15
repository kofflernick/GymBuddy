import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function TabOneScreen() {
  const handleTap = () => {
    //future implementation
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello Toma,</Text>
      <Text style={styles.message}>Your next scheduled workout is</Text>
      <Text style={styles.message2}>today at 1:00 PM EST</Text>
      <Text style={styles.message3}>@ Dodge (Columbia)</Text>
      <View style={styles.buddyTitleAndStreak}>
        <Text style={styles.buddyTitle}>Your Buddy</Text>
        <Text style={styles.streak}>Streak x10</Text>
      </View>
      <LinearGradient
        colors={["#D0FD3E", "#000000"]}
        style={styles.buddyCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Image
          source={require("../cat/gymGuy1.png")}
          style={styles.buddyImage}
        />
        <Text style={styles.buddyTime}>01:00 - 02:00 PM</Text>
      </LinearGradient>
      <View style={styles.buddyTitleAndSkip}>
        <Text style={styles.buddyTitle}>Colman Leung</Text>
        <Text style={styles.streak}>Skip?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#1C1C1E",
    justifyContent: "space-between",
  },
  greeting: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  message: {
    fontSize: 18,
    color: "#D9D9D9",
    marginTop: 25,
    marginVertical: 5,
    textAlign: "center",
  },
  message2: {
    fontSize: 18,
    color: "#DFF898",
    // marginVertical: 5,
    textAlign: "center",
  },
  message3: {
    fontSize: 18,
    color: "#D0FD3E",
    marginBottom: 5,
    textAlign: "center",
  },
  buddyTitleAndStreak: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buddyTitle: {
    fontSize: 20,
    color: "#D9D9D9",
    fontWeight: "bold",
  },
  streak: {
    fontSize: 12,
    color: "#D0FD3E",
  },
  buddyCard: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
    height: "50%",
  },
  buddyImage: {
    width: "50%",
    height: "60%",
    borderRadius: 60,
    marginBottom: 10,
  },
  buddyTime: {
    fontSize: 18,
    color: "#D0FD3E",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  buddyTitleAndSkip: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
})
