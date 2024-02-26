import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../Splash";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Listing from "../screens/Listing";
import Booking from "../screens/Booking";
import Checkout from "../screens/Checkout";
import BookingForm from "../screens/Booking_Form";
import Details from "../screens/Details";

const Index = () => {
  const Stack = createStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="BookingForm" component={BookingForm} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Index;
