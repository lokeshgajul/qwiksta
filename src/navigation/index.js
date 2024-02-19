import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../Splash";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";

const Index = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
