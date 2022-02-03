import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Forgetpassword() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginTop: -50 }}>
          <Image
            source={item.image1}
            style={{ width: 200, height: 200, resizeMode: "stretch" }}
          ></Image>
        </View>
      ))}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "80%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Ionicons name="key-sharp" size={24} />
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="New Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "80%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Ionicons name="key-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmpassword) =>
            setConfirmPassword(confirmpassword)
          }
        />
      </View>

      <TouchableOpacity style={styles.finishBtn}>
        <Text style={styles.finishText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const items = [
  {
    image1: require("../images/door1.png"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#990F02",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    width: "70%",
    height: 45,
    marginBottom: 15,
    bottom: -40,
    alignItems: "center",
  },

  TextInput: {
    height: 40,
    width: "80%",
    borderRadius: 25,
    flex: 1,
    padding: 15,
    marginLeft: 20,
    marginBottom: -220,
    alignItems: "center",
    bottom: 130,
  },
  finishBtn: {
    width: "40%",
    borderRadius: 25,

    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: -80,
    backgroundColor: "#ffffff",
    marginBottom: 70,
  },
});
