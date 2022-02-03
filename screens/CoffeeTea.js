import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ViewCart from "../components/restaurantDetail/ViewCart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const coffee = [
  {
    title: "Americano",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://www.cleantechloops.com/wp-content/uploads/2021/10/what-is-americano-coffee.jpg",
  },
  {
    title: "Cafe Latte",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://www.roastycoffee.com/wp-content/uploads/mBPxUtTx-480x480.jpeg",
  },
  {
    title: "Cappuccino",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
  },

  {
    title: "Italian Espresso",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://www.italymagazine.com/sites/default/files/story/espresso_0.jpg",
  },

  {
    title: "Cold Brew",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://www.thedinnerbite.com/wp-content/uploads/2021/07/cold-brew-img-4.jpg",
  },
  {
    title: "Frappuccino",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://celebratingsweets.com/wp-content/uploads/2017/06/Espresso-Chip-Frappe-2.jpg",
  },
  {
    title: "Matcha Tea",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://i.dailymail.co.uk/1s/2019/01/16/12/8591676-0-image-a-2_1547643509865.jpg",
  },
  {
    title: "Oolong Tea",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/05/26/Pictures/green-tea-shutterstock_b6993628-41c7-11e7-b7e5-3de2b6485255.jpg",
  },

  {
    title: "Green Tea",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://images-prod.healthline.com/hlcmsresource/images/AN_images/green-tea-and-leaves-1296x728.jpg",
  },
  {
    title: "Bubble Milk Tea",
    description: "chill your mind out",
    price: "$1.70",
    image:
      "https://brewedleaflove.com/wp-content/uploads/2019/07/how-to-make-bubble-tea-682x1024.jpg",
  },
];

const styles = StyleSheet.create({
  TeaItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function CoffeeTea({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {coffee.map((tea, index) => (
        <View key={index}>
          <View style={styles.TeaItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
            />
            <CoffeeTeaInfo tea={tea} />
            <CoffeeTeaImage tea={tea} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
      <ViewCart navigation={navigation} />
    </ScrollView>
  );
}

const CoffeeTeaInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.tea.title}</Text>
    <Text>{props.tea.description}</Text>
    <Text>{props.tea.price}</Text>
  </View>
);
const CoffeeTeaImage = (props) => (
  <View>
    <Image
      source={{ uri: props.tea.image }}
      style={{ width: 90, height: 90, borderRadius: 8, marginLeft: -30 }}
    />
  </View>
);
