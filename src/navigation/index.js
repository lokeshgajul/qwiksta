import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../Splash";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Listing from "../screens/Listing";
import BookingDetails from "../screens/Booking-Details";
import Checkout from "../screens/Checkout";
import BookingForm from "../screens/Booking_Form";
import ShowBookings from "../screens/Show-Bookings";
import Wishlist from "../screens/Wishlist";
import ProfileDetails from "../screens/Profile/ProfileDetails";
import Details from "../screens/Details";
import CityModal from "../Modal/CityModal";

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
      <Stack.Screen name="BookingForm" component={BookingForm} />
      <Stack.Screen name="ShowBookings" component={ShowBookings} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      <Stack.Screen name="CityModal" component={CityModal} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Index;
