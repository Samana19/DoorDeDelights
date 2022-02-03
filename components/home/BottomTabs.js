import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function BottomTabs() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <TouchableHighlight
        onPress={() => navigation.navigate("Home")}
        underlayColor="#ffffff"
      >
        <View>
          <Icon icon="home" text="Home" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("SearchHistory")}
        underlayColor="#ffffff"
      >
        <View>
          <Icon icon="search" text="Search" />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate("HomeChef")}
        underlayColor="#ffffff"
      >
        <View>
          <Icon icon="shopping-bag" text="HomeChef" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("OrderHistory")}
        underlayColor="#fffff"
      >
        <View>
          <Icon icon="receipt" text="Orders" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("UserAccount")}
        underlayColor="#ffffff"
      >
        <View>
          <Icon icon="user" text="Account" />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
