import { useNavigation } from "@react-navigation/native";
import navigation from "../navigation";
import React, { useState } from "react";
import { auth } from "../firebase";
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
import { KeyboardAvoidingView } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  })

  const handleLogin = () => {
    auth

      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("Home");
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  }

  // const handlePasswordChange = (val) => {
  //   setData({
  //     ...data,
  //     password: val,
  //   });
  // }
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <View style={styles.container}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginTop: -100 }}>
            <Image
              source={item.image1}
              style={{ width: 200, height: 200, resizeMode: "stretch" }}
            ></Image>
          </View>
        ))}

        <View style={styles.inputView}>
          <View
            style={{
              marginRight: "90%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 35,
            }}
          >
            
          </View>
          <Ionicons name="mail-sharp" size={24} style={{marginRight:250,bottom:25}} />

          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <View
            style={{
              marginRight: "90%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
          
          </View>

          <TouchableOpacity onPress={updateSecureTextEntry}>
          <Icon name="check" color="black" size={24} style={{marginLeft:240,bottom:-2}} />
          </TouchableOpacity>
            <Ionicons name="key-sharp" size={24} style={{marginRight:250, bottom:23}} />
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={data.secureTextEntry ? true : false}
            // onChangeText={(val) => handlePasswordChange(val)}
            onChangeText={(password)=>setPassword(password)}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("VerifyEmail")}>
          <Text style={{ color: "#ffffff", fontSize: 14, marginLeft: "35%" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>                Login                </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={styles.signupText}>               SignUp               </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const items = [
  {
    image1: require("../images/door1.png"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#990F02",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    width: "80%",
    height: 45,
    marginBottom: 15,
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
    bottom: 140,
  },

  forgot_button: {
    height: 30,
    position: "absolute",

    bottom: 130,
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    bottom: -30,
    backgroundColor: "#ffffff",
  },
  signupBtn: {
    width: "40%",
    borderRadius: 50,

    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: -50,
    backgroundColor: "#ffffff",
  },
});
