import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native-web";
import BottomTabs from "../components/home/BottomTabs";
import { auth } from "../firebase";

export default function UserAccount() {
  const [setText] = React.useState("");
  const navigation = useNavigation();
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: "#990F02",
            height: 220,
          }}
        >
          {items.map((item, index) => (
            <View key={index} style={{ alignItems: "center", bottom: -120 }}>
              <Image
                source={item.img}
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: "contain",
                }}
              />
            </View>
          ))}
          
        </View>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#000" ,bottom:-135,marginLeft:62}}>
        🍕 We bring joy to your door🍕
          </Text>

        {/* Yaha Hardcode GARNE! */}
        <TouchableOpacity style={styles.logoutBtn} onPress={()=>navigation.navigate('Aboutus')}>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#000",
            width: "60%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 35,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 190,
            marginBottom: 60,
            backgroundColor: "#990F02",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            About Us
          </Text>
        </View>
        </TouchableOpacity>
        {/* </View> */}

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#000",
              width: "60%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 35,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: -25,
              marginBottom: 80,
              backgroundColor: "#990F02",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
const items = [
  {
    flex: 2,
    img: require("../chefs/USER.png"),
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

});
