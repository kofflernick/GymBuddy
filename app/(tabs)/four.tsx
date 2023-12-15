import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native"

export default function TabFourScreen() {
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const toggleDay = (day: string) => {
    setSelectedDays((prevDays) => {
      if (prevDays.includes(day)) {
        return prevDays.filter((d) => d !== day)
      } else {
        return [...prevDays, day]
      }
    })
  }

  const handleResetSchedule = () => {
    setSelectedDays([])
  }

  return (
    <ScrollView style={styles.container}>
      {/* Name and Age */}
      <Text style={styles.nameText}>Toma, 21</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Tags */}
      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>Endurance</Text>
        <Text style={styles.tag}>Casual Lifter</Text>
        <Text style={styles.tag}>Beginner</Text>
      </View>

      {/* User Schedule */}
      <Text style={styles.userScheduleText}>User Schedule</Text>
      <View style={styles.daysContainer}>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.day,
              selectedDays.includes(day) ? styles.selectedDay : {},
            ]}
            onPress={() => toggleDay(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Change Schedule Button */}
      <TouchableOpacity
        onPress={handleResetSchedule}
        style={styles.changeScheduleButton}
      >
        <Text style={styles.changeScheduleButtonText}>Change Schedule</Text>
      </TouchableOpacity>

      {/* Sign Out Button */}
      <TouchableOpacity onPress={() => {}} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    padding: 15,
  },
  nameText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D9D9D9",
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
    paddingBottom: 4,
  },
  editProfileText: {
    color: "#D9D9D9",
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
    paddingBottom: 4,
  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 16,
  },
  tag: {
    backgroundColor: "#D0FD3E",
    borderRadius: 10,
    padding: 8,
    margin: 4,
    color: "#000",
    fontWeight: "bold",
  },
  userScheduleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D9D9D9",
    marginTop: 16,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 16,
  },
  day: {
    width: "30%",
    backgroundColor: "#333",
    borderRadius: 5,
    padding: 8,
    margin: 4,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  selectedDay: {
    backgroundColor: "#D0FD3E",
  },
  dayText: {
    color: "###",
    fontWeight: "bold",
    fontSize: 10,
  },
  changeScheduleButton: {
    paddingBottom: 20,
  },
  changeScheduleButtonText: {
    fontSize: 20,
    textAlign: "left",
    color: "#D0FD3E",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
  signOutButton: {},
  signOutButtonText: {
    fontSize: 15,
    textAlign: "left",
    color: "#FF2424",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
})
