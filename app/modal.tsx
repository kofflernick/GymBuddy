// ModalScreen.tsx
import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native"
import { selectedDays, setSelectedDays } from "./SelectedDays"

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"

const daysOfWeek: DayOfWeek[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

export default function ModalScreen() {
  const [localSelectedDays, setLocalSelectedDays] =
    useState<string[]>(selectedDays)

  const toggleDay = (day: string) => {
    setLocalSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  const handleSave = () => {
    setSelectedDays(localSelectedDays)
    // navigate back or close modal
  }

  const handleFinishSelecting = () => {
    setSelectedDays(localSelectedDays)
    // Add navigation or modal close logic here if needed
  }

  return (
    <View style={styles.container}>
      {daysOfWeek.map((day) => (
        <TouchableOpacity
          key={day}
          style={[
            styles.dayButton,
            localSelectedDays.includes(day) ? styles.selectedDay : {},
          ]}
          onPress={() => toggleDay(day)}
        >
          <Text style={styles.dayText}>{day}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Finish Selecting" onPress={handleFinishSelecting} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  dayButton: {
    padding: 10,
    margin: 5,
    backgroundColor: "#DDD",
    borderRadius: 20,
  },
  selectedDay: {
    backgroundColor: "#D0FD3E",
  },
  dayText: {
    fontSize: 16,
  },
  // ... add any other styles you need
})
