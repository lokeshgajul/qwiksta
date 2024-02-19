import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Splash from "./src/Splash";
import Login from "./src/screens/Login";
import Navigation from "./src/navigation";
const screenWidth = Dimensions.get("screen").width;

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}
