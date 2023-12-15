import React, { useState } from "react"
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native"

const { height } = Dimensions.get("window")

type LoginScreenProps = {
  onLogin: () => void
}

function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require("./figma_statics/LoginBackGround.png")}
      style={styles.imageBackground}
    >
      {/* <Text style={styles.signupText}>Sign up</Text> */}

      {/* Assuming the profile icon is for user profile or settings */}
      <TouchableOpacity style={styles.profileIcon}>
        {/* Profile Icon would go here, use an Image component or an icon library like react-native-vector-icons */}
      </TouchableOpacity>

      {/* Login Form */}
      <View style={styles.loginForm}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#D9D9D9"
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#D9D9D9"
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => {
            /* handle forgot password */
          }}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.slantCut}></View> */}
    </ImageBackground>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // resizeMode: "cover",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageBackground: {
    height: height, // Set the height to half of the screen height
    width: "100%",
    position: "absolute",
  },
  // slantCut: {
  //   width: Dimensions.get("window").width,
  //   height: 150, // Adjust the height of the slant as needed
  //   backgroundColor: "transparent",
  //   borderStyle: "solid",
  //   borderTopWidth: 50, // Adjust the height of the slant as needed
  //   // borderRightWidth: Dimensions.get("window").width, // Full width of the screen
  //   borderTopColor: "#1C1C1E", // The color of your main container background
  //   position: "absolute",
  //   bottom: -9,
  //   transform: [
  //     { translateX: Dimensions.get("window").width / 3000 }, // Center the triangle cut
  //     { rotate: "-15deg" }, // Adjust the slant angle as needed
  //   ],
  // },
  signupText: {
    position: "absolute",
    top: 40, // adjust as needed for your image
    left: 20, // adjust as needed for your image
    color: "yellow", // your color
    fontSize: 24, // your size
    fontWeight: "bold",
  },
  profileIcon: {
    position: "absolute",
    top: 0, // adjust as needed for your image
    right: 0, // adjust as needed for your image
    // Add styles for the profile icon button here
  },
  loginForm: {
    width: "90%",
    position: "absolute",
    top: "60%",
    left: "5%",
    // Add padding, margins, and other styles as needed
  },
  textInput: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    color: "white",
    fontSize: 18,
    marginTop: 20,
    // Add padding, margins, and other styles as needed
  },
  forgotPasswordText: {
    alignSelf: "flex-end",
    color: "#D0FD3E",
    marginTop: 12,
    // Add other styles for forgot password text
  },
  loginButton: {
    backgroundColor: "#D0FD3E", // your color
    borderRadius: 20,
    marginTop: 20,
    padding: 15,
    // Add other styles for login button
  },
  loginButtonText: {
    textAlign: "center",
    color: "#black",
    fontSize: 18,
    fontWeight: "bold",
    // Add other styles for login button text
  },
  // ... add any other styles you need here
})

export default LoginScreen
