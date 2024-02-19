import React from "react";
import { Image, View } from "react-native";
import logo from "./assets/qwiksta-logo.jpg";

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Login");
  }, 2000);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={logo} />
    </View>
  );
};

export default Splash;
