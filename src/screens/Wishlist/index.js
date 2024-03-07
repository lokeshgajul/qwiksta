import {
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import BottomTabNavigator from "../../navigation/BottomTab";
import React from "react";
import GlobalStyles from "../../Global/styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import hotel from "../../assets/Hotel1.jpg";
import fullStar from "../../assets/full-star.png";
import path from "../../assets/path.png";
import Star from "../../assets/star.png";
import location from "../../assets/material-location-on.png";

const screenWidth = Dimensions.get("screen").width;
const screenheight = Dimensions.get("screen").height;

const Index = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 5,
        }}
      >
        <Pressable
          style={{
            backgroundColor: GlobalStyles.bgcolor.backgroundColor,
            padding: 8,
            borderRadius: 20,
            alignItems: "center",
            marginTop: 14,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="left" size={20} color="#fff" />
        </Pressable>
        <View style={{ padding: 20, marginTop: 10 }}>
          <Text style={GlobalStyles.title}>My Wishlist </Text>
        </View>
      </View>

      <Pressable style={styles.parentCard}>
        <View style={styles.card}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.childCard}>
              <Image style={styles.img} source={hotel} />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{ margin: 12, flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.hotelName}>Hotel Avenue </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={fullStar}
                style={{ marginRight: 3, marginTop: 2 }}
              />
              <Image
                source={fullStar}
                style={{ marginRight: 3, marginTop: 2 }}
              />
              <Image
                source={fullStar}
                style={{ marginRight: 3, marginTop: 2 }}
              />
              <Image
                source={fullStar}
                style={{ marginRight: 3, marginTop: 2 }}
              />
              <Image source={Star} style={{ marginRight: 3, marginTop: 2 }} />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Image source={location} style={{ marginRight: 3, marginTop: 5 }} />
            <Text>Map </Text>
            <Text>- Sakinaka , Andherir East </Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.parentCard}>
        <View style={styles.card}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.childCard}>
              <Image style={styles.img} source={hotel} />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{ margin: 12, flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.hotelName}>Hotel Avenue </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={fullStar}
                style={{ marginRight: 3, marginTop: 2 }}
              />
              <Image
                source={fullStar}
                style={{ marginRight: 3, marginTop: 2 }}
              />
              <Image
                source={fullStar}
                style={{ marginRight: 3, marginTop: 2 }}
              />
              <Image
                source={fullStar}
                style={{ marginRight: 3, marginTop: 2 }}
              />
              <Image source={Star} style={{ marginRight: 3, marginTop: 2 }} />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Image source={location} style={{ marginRight: 3, marginTop: 5 }} />
            <Text>Map </Text>
            <Text>- Sakinaka , Andherir East </Text>
          </View>
        </View>
      </Pressable>

      <BottomTabNavigator />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 15,
    alignItems: "center",
    marginTop: 50,
  },
  inputParent: {
    width: screenWidth - 65,
    marginLeft: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  input: {
    padding: 5,
    width: "100%",
  },
  parentCard: {
    marginHorizontal: 15,
    backgroundColor: "#fff",
    height: screenheight / 3.7,
    elevation: 2,
    borderRadius: 15,
    padding: 2,
    marginBottom: 15,
    overflow: "hidden",
  },
  card: {
    height: screenheight / 6,
    width: screenWidth,
    borderRadius: 10,
    overflow: "hidden",
  },
  childCard: {
    width: screenWidth - 36,
    marginHorizontal: 2,
    zIndex: 5,
  },
  img: {
    width: "100%",
    resizeMode: "cover",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    fontSize: 10,
    color: "#F2600A",
    fontWeight: "500",
  },
  text1: {
    fontSize: 10,
    color: "#F2600A",
    fontWeight: "500",
  },
  text2: {
    fontSize: 10,
    color: "#F2600A",
    fontWeight: "500",
  },
  price: {
    fontWeight: "800",
    letterSpacing: 0.5,
    color: "#F2600A",
  },
});
