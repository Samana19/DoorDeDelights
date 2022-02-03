import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Bhojan Griha",
    image_url: "http://ecs.com.np/fckimage/article/images/2017/2/bhojan2.jpg",
    categories: ["Nepali", "Local"],
    price: "$$",
    reviews: 259,
    rating: 4.8,
  },
  {
    name: "Dream Nepal Restaurant",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-s/03/d7/42/19/getlstd-property-photo.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 16,
    rating: 4.5,
  },
  {
    name: "The Vesper Cafe & Restaurant",
    image_url:
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t1.6435-9/67614117_2677918642221421_3239181342990139392_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=cBwaFYWfBroAX9NEveg&_nc_ht=scontent.fktm7-1.fna&oh=00_AT-P2RHuVI8SAIdHy1gXyKSxYTz9WWcinO2u-pRIeR71Zg&oe=620457FB",
    categories: ["Italian", "Bar"],
    price: "$$",
    reviews: 1200,
    rating: 4.9,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
