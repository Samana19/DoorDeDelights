import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import navigation from "../navigation";
import { auth } from "../firebase";
import firebase from "firebase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
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
import { add } from "react-native-reanimated";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
//New line
  const [data, setData] = React.useState({
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  })


//yeta samma
  const navigation = useNavigation();

  const handleSignup = () => {
    auth

      .createUserWithEmailAndPassword(email, password)

      .then((userCredentials) => {
        const user = userCredentials.user;

        console.log(user.email);
        alert("User Created Successfully")
        // console.log(user.password);
        // console.log(user.cpassword);
      })

      .catch((error) => alert(error.message)); 
  }
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  }

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginTop: -100 }}>
          <Image
            source={item.image}
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
          <Ionicons name="person-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Full Name."
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "80%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            
          }}
        > 
        </View>
        
          <Ionicons name="key-sharp" size={24} style={{marginRight:240, bottom:30}} /> 
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          value={password}
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          <Icon name="check" color="black" size={24} style={{marginLeft:240,bottom:8}} />
          </TouchableOpacity>
      </View>

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
          <Ionicons name="home-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Address."
          // onChange={(event) => {
          //   setCpassword(event.target.value);
          // }}
          value={address}
          placeholderTextColor="#003f5c"
          onChangeText={(address) => setAddress(address)}
        />
      </View>

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
          <Ionicons name="mail-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          // onChange={(event) => {
          //   setEmail(event.target.value);
          // }}
          value={email}
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

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
          <Ionicons name="calculator-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number."
          // onChange={(event) => {
          //   setPhonenumber(event.target.value);
          // }}
          value={phonenumber}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPhonenumber(text)}
        />
      </View>

      <TouchableOpacity onPress={handleSignup} style={styles.signupBtn}>
        <Text style={styles.signupText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const items = [
  {
    image: require("../images/door1.png"),
    position: "top",
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

  signupBtn: {
    width: "40%",
    borderRadius: 25,

    height: 45,
    alignItems: "center",
    justifyContent: "center",
    bottom: -40,
    backgroundColor: "#ffffff",
  },
});
