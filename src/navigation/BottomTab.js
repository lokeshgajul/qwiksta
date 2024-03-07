import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

const screenWidth = Dimensions.get("screen").width;

const BottomTabNavigator = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [active, setActive] = useState("Home");

  useEffect(() => {
    // Check the initial route and set the active tab accordingly
    if (route.name) {
      setActive(route.name);
    }
  }, [route.name]);

  useFocusEffect(
    React.useCallback(() => {
      // Update active tab based on the current route name
      setActive(route.name);
      console.log("tab changed:", route.name);
    }, [route.name])
  );

  const handleTabPress = (tabName) => {
    setActive(tabName);
    navigation.navigate(tabName);
    console.log("Tab ", tabName);
  };

  const tabBarStyle = (tabName) => {
    return active === tabName ? "#f55a00" : "#000";
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: screenWidth,
        justifyContent: "center",
        height: 65,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#fff",
        elevation: 15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => handleTabPress("Home")}
        >
          <MaterialCommunityIcons
            name="home"
            size={20}
            color={tabBarStyle("Home")}
          />
          <Text
            style={{
              fontSize: 10.5,
              paddingTop: 5,
              letterSpacing: 0.4,
              color: tabBarStyle("Home"),
            }}
          >
            HOME
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => handleTabPress("Wishlist")}
        >
          <AntDesign name="hearto" size={20} color={tabBarStyle("Wishlist")} />
          <Text
            style={{
              fontSize: 10.5,
              paddingTop: 5,
              letterSpacing: 0.4,
              color: tabBarStyle("Wishlist"),
            }}
          >
            WISHLIST
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => handleTabPress("ShowBookings")}
        >
          <AntDesign
            name="book"
            size={20}
            color={tabBarStyle("ShowBookings")}
          />
          <Text
            style={{
              fontSize: 10.5,
              paddingTop: 5,
              letterSpacing: 0.4,
              color: tabBarStyle("ShowBookings"),
            }}
          >
            BOOKINGS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => handleTabPress("Profile")}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color={tabBarStyle("Profile")}
          />
          <Text
            style={{
              fontSize: 10.5,
              paddingTop: 5,
              letterSpacing: 0.4,
              color: tabBarStyle("Profile"),
            }}
          >
            PROFILE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomTabNavigator;
