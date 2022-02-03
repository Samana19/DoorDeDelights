import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import SearchBar from "../components/home/SearchBar";

export default function SearchHistory() {
  const [setCity] = useState("Hollywood");
  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}></View>
      <SearchBar cityHandler={setCity} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Yaha Hardcode GARNE! */}
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
