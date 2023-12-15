import React from "react"
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native"
import Swiper from "react-native-deck-swiper"

const profiles = [
  {
    id: "1",
    name: "Micha Smith, 31",
    image: require("../cat/gymGuy5.png"),
    interests: ["Strength", "Cardio"],
    availability: ["Monday"],
  },
  {
    id: "2",
    name: "Isa Johnson, 21",
    image: require("../cat/gymGuy6.png"),
    interests: ["Cardio Bunny", "Yoga"],
    availability: ["Monday", "Wednesday", "Friday"],
  },
  {
    id: "3",
    name: "Tyler Williams, 28",
    image: require("../cat/gymGuy7.png"),
    interests: ["Strength", "Arms"],
    availability: ["Tuesday"],
  },
  {
    id: "4",
    name: "Daniel Brown, 21",
    image: require("../cat/gymGuy8.png"),
    interests: ["Distane Running", "Meditation"],
    availability: ["Tuesday", "Sunday"],
  },
  {
    id: "5",
    name: "Angela Martinez, 21",
    image: require("../cat/gymGuy9.png"),
    interests: ["Sprints", "Legs"],
    availability: ["Monday", "Saturday"],
  },
  {
    id: "6",
    name: "Roger Smith, 21",
    image: require("../cat/gymGuy10.png"),
    interests: ["Swimming", "Endurance"],
    availability: ["Wednesday", "Friday", "Sunday"],
  },
  {
    id: "7",
    name: "1, 21",
    image: require("../cat/gymGuy11.png"),
    interests: ["Mountain Biking", "Hiking"],
    availability: ["Monday", "Tuesday", "Sunday"],
  },
]

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Swiper
        cards={profiles}
        renderCard={(card) => (
          <ImageBackground source={card.image} style={styles.card}>
            <Text style={styles.cardName}>{card.name}</Text>
            <View style={styles.interestsContainer}>
              {card.interests.map((interest, index) => (
                <Text key={index} style={styles.interestText}>
                  {interest}
                </Text>
              ))}
            </View>
            <View style={styles.availabilityContainer}>
              {card.availability.map((day, index) => (
                <Text key={index} style={styles.availabilityText}>
                  {day}
                </Text>
              ))}
            </View>
          </ImageBackground>
        )}
        onSwipedLeft={() => console.log("Card swiped left")}
        onSwipedRight={() => console.log("Card swiped right")}
        backgroundColor={"#1C1C1E"}
        cardIndex={0}
        stackSize={3}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 0.85,
    borderRadius: 20,
    overflow: "hidden",
  },
  cardName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    top: 16,
    left: 16,
  },
  interestsContainer: {
    position: "absolute",
    top: 60,
    left: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  interestText: {
    backgroundColor: "rgba(208,253,62,0.85)",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    fontWeight: "bold",
    color: "#000",
    fontSize: 16,
  },
  availabilityContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  availabilityText: {
    backgroundColor: "rgba(51,51,51,0.85)",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    color: "#fff",
    fontSize: 16,
  },
})
