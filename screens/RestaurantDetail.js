import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel ",
    price: "$21.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Sphagetti with Meatballs",
    description:
      "Drizzling Italian dish with spaghetti, tomato sauce and meatballs.",
    price: "$13.50",
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg",
  },
  {
    title: "Pizza",
    description:
      "Tasty Italian round bread dough topped with olive oil, tomatoes, cheeses, and other topings.🍕",
    price: "$19.20",
    image:
      "https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg",
  },
  {
    title: "Momos",
    description:
      "Delicious Nepali/Tibetan dumblings with fillings on the inside.",
    price: "$11.20",
    image:
      "https://imgk.timesnownews.com/story/iStock-1252605699.jpg?tr=w-400,h-300,fo-auto",
  },
  {
    title: "Vegetable Risotto",
    description:
      "Italian all vegetable Risotto with creamy consistency.",
    price: "$13.50",
    image:
      "https://food-images.files.bbci.co.uk/food/recipes/vegetable_risotto_18315_16x9.jpg",
  },
  {
    title: "Carbonara",
    description:
      "A dish of hot pasta with other ingredients.",
    price: "$12.30",
    image:
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&resize=440,400"  ,
  },
  {
    title: "Chicken Biryani",
    description:
      "Savory chicken and rice dish steamed with aromatics.",
    price: "$8.60",
    image:
      "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
  },
  {
    title: "Hamburger",
    description:
      "Juicy sandwich with a Patty in a Bun.",
    price: "$9.20",
    image:
      "https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg",
  },
  {
    title: "Fries",
    description:
      "Crispy strip potato deep fried in beef fat.",
    price: "$7.80",
    image:
      "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800",
  },
  {
    title: "Sandwich",
    description:
      "Veggies and meat placed between slices of bread.",
    price: "$15.80",
    image:
      "https://static.fanpage.it/wp-content/uploads/sites/22/2021/05/Clubhouse-Sandwich-1200x900.jpg",
  },
  {
    title: "Naan Roti",
    description:
      "Soft and pillowy bread with Butter or Garlic flavoring.",
    price: "$6.50",
    image:
      "https://static.toiimg.com/thumb/53338316.cms?imgsize=223266&width=800&height=800",
  },
  {
    title: "Khana Set",
    description:
      "Traditional Nepali Cuisine including Rice, green vegetables, meat, and other spices.",
    price: "$12.20",
    image:
      "https://www.eeatit.com/wp-content/uploads/2020/10/81ep2qo2au101-e1603615183388.jpg",
  },
  {
    title: "Veg Khana Set",
    description:
      "Nepali Veg Cuisine with Rice, Vegetables and Spices.",
    price: "$10.50",
    image:
      "https://foodganj.s3.ap-south-1.amazonaws.com/dish/418731615018776.jpg",
  },
  {
    title: "Korean Fried Chicken",
    description:
      "Thin and crackly fried chicken with almost transparent crust.",
    price: "$9.20",
    image:
      "https://static.toiimg.com/thumb/83169529.cms?width=1200&height=900",    
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />

        <MenuItems restaurantName={route.params.name} foods={foods} />

        
      </ScrollView>
      <ViewCart navigation={navigation} />
    </SafeAreaView>
  );
}