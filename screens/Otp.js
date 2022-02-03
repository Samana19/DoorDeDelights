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

export default function Otp() {
  const [otp, setOtp] = useState("");
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center",marginTop:500}}>
          <Image
            source={item.image1}
            style={{ width: 200, height: 200, resizeMode:'stretch' }}
          ></Image>
          <Text
          style={styles.otpText}>Please Enter the code that we have sent in your inbox
          </Text>
          
        </View>
          
      ))}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <View style={{ marginRight: '80%', alignItems:'center',justifyContent:'center',marginTop:10 }}>
          <Ionicons name="key-sharp" size={24} />
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your OTP"
          placeholderTextColor="#003f5c"
          onChangeText={(otp) => setOtp(otp)}
        />
      </View>

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const items = [
  {
    image1: require('../images/door1.png'),
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
  otpText:{
    flex: 1,
    backgroundColor: "#990F02",
    justifyContent: "center",
    marginBottom: -20,
    fontSize:18,
    alignItems:"center",
    color: "white"
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
    marginBottom:-220,
    alignItems: 'center',
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
    marginBottom:80
  },
});
