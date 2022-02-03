import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";

const items = [
  {
    image: require("../chefs/Samana.jpg"),
    text: "Chef Samana",
  },
  {
    image: require("../chefs/pika.jpg"),
    text: "Chef Pika",
  },
  {
    image: require("../chefs/Bipina.jpg"),
    text: "Chef Bips",
  },
  {
    image: require("../chefs/Crystal.jpg"),
    text: "Chef Kisstal",
  },
];

export default function HomeChef() {
  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}></View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 370,
                height: 400,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
