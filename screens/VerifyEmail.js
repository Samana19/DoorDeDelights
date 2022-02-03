import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function VerifyEmail() {
  const navigation = useNavigation();
  const [email, setEmail] = useState(email);

  const forgotPassword = () => {
    console.log("reset email sent to " + email);
    auth
    .sendPasswordResetEmail(email)
      .then(() => {
        alert("reset email sent to " + email);
      })

      .catch((error) => alert(error.message));

    // setShowLoading(true);
    // try {
    //   await auth().sendPasswordResetEmail(email);
    //   setShowLoading(false);

    // } catch (error) {
    //   setShowLoading(false);
    //   Alert.alert(error.message);
    // }
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginTop: 500 }}>
          <Image
            source={item.image1}
            style={{ width: 200, height: 200, resizeMode: "stretch" }}
          ></Image>
          <Text style={styles.otpText}> Please Enter Your Email</Text>
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
          placeholder="Enter Your Email"
          placeholderTextColor="#003f5c"
          onChangeText={email=>setEmail(email)}
        />
      </View>
      {/* <TouchableOpacity
      onPress={()=>navigation.navigate('Login')}>
        <Text style={{ color: "#ffffff", fontSize: 14 ,marginLeft:"35%"}}>Back to Login</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => forgotPassword()}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const items = [
  {
    image1: require("../images/door1.png"),
  },
];
// const otpText=[{
//   flex: 1,
//   backgroundColor: "#990F02",
//   justifyContent: "center",
//   marginTop:500,
//   fontSize:18,
//   alignItems:"center",
//   color: "white"

// }];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#990F02",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
  },
  otpText: {
    flex: 1,
    backgroundColor: "#990F02",
    justifyContent: "center",
    marginBottom: -20,
    fontSize: 18,
    alignItems: "center",
    color: "white",
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 25,

    width: "70%",
    height: 45,
    marginBottom: 550,
    alignItems: "center",
  },

  TextInput: {
    height: 45,
    width: "80%",
    borderRadius: 25,

    flex: 1,
    padding: 15,
    marginLeft: 20,
    marginBottom: -220,
    alignItems: "center",
    bottom: 130,
  },
  submitBtn: {
    width: "40%",
    borderRadius: 25,

    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 500,
    backgroundColor: "#ffffff",
    marginBottom: 80,
  },
  back_button: {
    height: 30,
    position: "absolute",

    bottom: 130,
  },
});
