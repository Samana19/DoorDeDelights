import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import LoginScreen from './screens/LoginScreen';
import HomeChef from './screens/HomeChef';
import SignupScreen from './screens/SignupScreen';
import Forgetpassword from './screens/Forgetpassword';
import SearchHistory from "./screens/SearchHistory";
import OrderHistory from "./screens/OrderHistory";
import UserAccount from "./screens/UserAccount";
import Pickup from "./screens/Pickup";
import Softdrinks from "./screens/Softdrinks";
import Bakery from "./screens/Bakery";
import CoffeeTea from "./screens/CoffeeTea";
import Deals from "./screens/Deals";
import Desserts from "./screens/Desserts";
import Fastfood from "./screens/Fastfood";
import VerifyEmail from "./screens/VerifyEmail";
import Aboutus from "./screens/Aboutus";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="ForgetPassword" component={Forgetpassword} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SearchHistory" component={SearchHistory} />
          <Stack.Screen name="HomeChef" component={HomeChef} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
          <Stack.Screen name="UserAccount" component={UserAccount} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          <Stack.Screen name="Pickup" component={Pickup} />
          <Stack.Screen name="Softdrinks" component={Softdrinks} />
          <Stack.Screen name="Bakery" component={Bakery} />
          <Stack.Screen name="CoffeeTea" component={CoffeeTea} />
          <Stack.Screen name="Deals" component={Deals} />
          <Stack.Screen name="Fastfood" component={Fastfood} />
          <Stack.Screen name="Desserts" component={Desserts} />
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
          <Stack.Screen name="Aboutus" component={Aboutus} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
