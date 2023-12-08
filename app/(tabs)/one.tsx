import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

export default function TabOneScreen() {
  const handleTap = () => {
    //future implementation
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello Toma,</Text>
      <Text style={styles.message}>
        Your next scheduled workout is today at 1:00 PM EST @ Dodge (Columbia)
      </Text>
      <View style={styles.buddySection}>
        <Text style={styles.buddyTitle}>Your Buddy</Text>
        <Image
          source={require("../cat/HomeYourBuddy.jpg")}
          style={styles.buddyImage}
        />
        <Text style={styles.time}>01:00 - 02:00 PM</Text>
        <Text style={styles.streak}>Streak x10</Text>
      </View>
      <TouchableOpacity style={styles.nearbySection} onPress={handleTap}>
        <Text style={styles.nearbyTitle}>Buddies Nearby</Text>
        <Image
          source={require("../cat/HomeBuddiesNearby.jpg")}
          style={styles.nearbyImage}
        />
        <Text style={styles.tapAction}>Tap To See Buddies Near You</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1C1C1E",
  },
  greeting: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  message: {
    fontSize: 18,
    color: "#D9D9D9",
    marginVertical: 10,
  },
  buddySection: {
    alignItems: "center",
    backgroundColor: "#4e9525",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buddyTitle: {
    fontSize: 24,
    color: "#D9D9D9",
    marginBottom: 10,
  },
  buddyImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    color: "#D9D9D9",
  },
  streak: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffd700",
  },
  nearbySection: {
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  nearbyTitle: {
    fontSize: 24,
    color: "#D9D9D9",
    marginBottom: 10,
  },
  nearbyImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  tapAction: {
    fontSize: 18,
    color: "#D9D9D9",
    textDecorationLine: "underline",
  },
})
