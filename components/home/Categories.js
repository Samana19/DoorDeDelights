import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const items = [
  {
    image1: require("../../assets/images/shopping-bag.png"),
    text1: "Pick-up",
  },
  {
    image2: require("../../assets/images/soft-drink.png"),
    text2: "Soft Drinks",
  },
  {
    image3: require("../../assets/images/bread.png"),
    text3: "Bakery Items",
  },
  {
    image4: require("../../assets/images/fast-food.png"),
    text4: "Fast Foods",
  },
  {
    image5: require("../../assets/images/deals.png"),
    text5: "Deals",
  },
  {
    image6: require("../../assets/images/coffee.png"),
    text6: "Coffee & Tea",
  },
  {
    image7: require("../../assets/images/desserts.png"),
    text7: "Desserts",
  },
];

export default function Categories() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Pickup */}
        <TouchableOpacity onPress={() => navigation.navigate("Pickup")}>
          <View style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={require("../../assets/images/shopping-bag.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>Pickup</Text>
          </View>
        </TouchableOpacity>
        {/* Softdrinks */}
        <TouchableOpacity onPress={() => navigation.navigate("Softdrinks")}>
          <View style={{ alignItems: "center", marginRight: -55 }}>
            <Image
              source={require("../../assets/images/soft-drink.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 100,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900", marginLeft: -85 }}>
              Softdrinks
            </Text>
          </View>
        </TouchableOpacity>

        {/* Bakery */}
        <TouchableOpacity onPress={() => navigation.navigate("Bakery")}>
          <View style={{ alignItems: "center", marginRight: -55 }}>
            <Image
              source={require("../../assets/images/bread.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 100,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900", marginLeft: -85 }}>
              Bakery{" "}
            </Text>
          </View>
        </TouchableOpacity>

        {/* FastFoods */}
        <TouchableOpacity onPress={() => navigation.navigate("Fastfood")}>
          <View style={{ alignItems: "center", marginRight: -55 }}>
            <Image
              source={require("../../assets/images/fast-food.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 100,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900", marginLeft: -85 }}>
              Fastfood{" "}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Deals */}
        <TouchableOpacity onPress={() => navigation.navigate("Deals")}>
          <View style={{ alignItems: "center", marginRight: -55 }}>
            <Image
              source={require("../../assets/images/deals.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 100,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900", marginLeft: -85 }}>
              Deals{" "}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Tea and coffee */}
        <TouchableOpacity onPress={() => navigation.navigate("CoffeeTea")}>
          <View style={{ alignItems: "center", marginRight: -55 }}>
            <Image
              source={require("../../assets/images/coffee.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 100,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900", marginLeft: -85 }}>
              {" "}
              Coffee&Tea{" "}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Desserts */}
        <TouchableOpacity onPress={() => navigation.navigate("Desserts")}>
          <View style={{ alignItems: "center", marginRight: -55 }}>
            <Image
              source={require("../../assets/images/desserts.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 100,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900", marginLeft: -85 }}>
              Desserts{" "}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
