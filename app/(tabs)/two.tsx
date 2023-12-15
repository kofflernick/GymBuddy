import React from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native"

type ChatItem = {
  id: string
  name: string
  message: string
  image: any
}

//data for the chats
const chats: ChatItem[] = [
  {
    id: "1",
    name: "Lisa",
    message: "Are you free this friday?",
    image: require("../cat/gymGuy2.png"),
  },
  {
    id: "2",
    name: "Colman",
    message: "I dont like Equinox",
    image: require("../cat/gymGuy1.png"),
  },
  {
    id: "3",
    name: "Zack",
    message: "How does 3 sound?",
    image: require("../cat/gymGuy3.png"),
  },
  {
    id: "4",
    name: "Marry",
    message: "Sounds good!",
    image: require("../cat/gymGuy4.png"),
  },
]

export default function TabTwoScreen() {
  const renderItem = ({ item }: ListRenderItemInfo<ChatItem>) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={item.image} style={styles.chatImage} />
      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      {/* Replace with the correct "chevron" */}
      {/* <Image
        source={require("../cat/HomeBuddiesNearby.jpg")}
        style={styles.chevron}
      /> */}
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  header: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "bold",
    padding: 10,
  },
  chatItem: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#2C2C2E",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: "center",
  },
  chatImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  chatContent: {
    marginLeft: 10,
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  chatMessage: {
    fontSize: 16,
    color: "#D0FD3E",
  },
  chevron: {
    width: 10,
    height: 10,
    tintColor: "#fff",
  },
})
