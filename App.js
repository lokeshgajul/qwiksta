import React, { useRef } from "react";
import { Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from "./src/navigation";
import BottomTabNavigator from "./src/navigation/BottomTab";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const currentNav = useRef();
  const fromNav = useRef();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#f15a00" barStyle="dark-content" />
      <NavigationContainer
        ref={currentNav}
        onReady={() =>
          (fromNav.current = currentNav.current.getCurrentRoute().name)
        }
        onStateChange={async () => console.log(fromNav.current)}
      >
        <Navigation />
        {/* <BottomTabNavigator /> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
