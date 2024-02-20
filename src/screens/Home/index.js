import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import backpack from "../../assets/backpacking.jpg";
import offer from "../../assets/special-offer.jpg";
import mumbai from "../../assets/mumbai.jpg";
import hotel from "../../assets/hotel.jpg";
const screenWidth = Dimensions.get("screen").width;

const Index = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const navigateToSplash = () => {
    navigation.navigate("Profile");
  };
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#f55a00",
          height: 220,
          justifyContent: "center",
          paddingLeft: 23,
          paddingRight: 23,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 19,
            fontWeight: "700",
            marginTop: -20,
          }}
        >
          Hello Guest...
        </Text>
        <Text style={{ color: "#fff" }}>
          Looking for short stays? Think Qwiksta!{" "}
        </Text>

        <TextInput
          style={{
            padding: 4,
            backgroundColor: "#fff",
            borderRadius: 6,
            marginTop: 10,
          }}
          placeholder="Search city..."
        />
      </View>

      <View
        style={{
          height: 130,
          justifyContent: "center",
          alignItems: "center",
          margin: -60,
        }}
      >
        <Image
          style={{
            height: "100%",
            width: screenWidth - 45,
            borderRadius: 20,
            resizeMode: "cover",
          }}
          source={backpack}
        />
      </View>

      <View style={styles.cities}>
        <Text style={styles.title}>Explore Cities... </Text>
        <ScrollView horizontal={true} style={styles.parentCard}>
          <TouchableOpacity style={styles.card}>
            <Image style={styles.images} source={mumbai} />
            <Text style={styles.cityTitle}>Mumbai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image style={styles.images} source={mumbai} />
            <Text style={styles.cityTitle}>Delhi </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image style={styles.images} source={mumbai} />
            <Text style={styles.cityTitle}>Mumbai </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image style={styles.images} source={mumbai} />
            <Text style={styles.cityTitle}>Delhi </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Search Offers...</Text>
        <ScrollView horizontal={true} style={{ marginLeft: 7 }}>
          <View
            style={{
              height: 140,
              width: screenWidth - 180,
              marginLeft: 15,
              marginTop: 12,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
              source={offer}
            />
          </View>
          <View
            style={{
              height: 140,
              width: screenWidth - 180,
              marginLeft: 15,
              marginTop: 12,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
              source={offer}
            />
          </View>
          <View
            style={{
              height: 140,
              width: screenWidth - 180,
              marginLeft: 15,
              marginTop: 12,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
              source={offer}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.hotels}>
        <Text style={styles.title}>Recommended hotels... </Text>
        <ScrollView horizontal={true} style={styles.parentCard}>
          <TouchableOpacity style={styles.hotelCard}>
            <Image style={styles.images} source={hotel} />
            <Text style={styles.hotelTitle}>Hotel Oriental </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hotelCard}>
            <Image style={styles.hotelImages} source={hotel} />
            <Text style={styles.hotelTitle}>Hotel Red Palms </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hotelCard}>
            <Image style={styles.hotelImages} source={hotel} />
            <Text style={styles.hotelTitle}>Hotel Regent Grand </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hotelCard}>
            <Image style={styles.hotelImages} source={hotel} />
            <Text style={styles.hotelTitle}>hotel Aster </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Text style={styles.title}>Why choose Qwiksta... </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={styles.parentCard2}>
            <Image style={styles.img1} source={hotel} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.parentCard1}>
            <Image style={styles.img} source={hotel} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={styles.parentCard1}>
            <Image style={styles.img} source={hotel} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.parentCard2}>
            <Image style={styles.img1} source={hotel} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            color: "#f55a00",
            fontSize: 28,
            letterSpacing: 2,
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Book Hourly{" "}
        </Text>
        <Text
          style={{
            color: "#f55a00",
            fontSize: 28,
            letterSpacing: 2,
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Rooms Online{" "}
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          Across all major cities in india
        </Text>
        <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
          <Text
            style={{
              backgroundColor: "#f55a00",
              padding: 10,
              width: 200,
              color: "white",
              marginBottom: 15,
              borderRadius: 15,
              textAlign: "center",
            }}
            onPress={() => navigation.navigate("Profile")}
          >
            Navigate To Profile
          </Text>
          <Text
            style={{
              backgroundColor: "#f55a00",
              padding: 10,
              width: 200,
              color: "white",
              marginBottom: 15,
              borderRadius: 15,
              textAlign: "center",
            }}
            onPress={() => navigation.navigate("Listing")}
          >
            Navigate To Listing
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentCard1: {
    width: 150,
    height: 160,
    backgroundColor: "lightblue",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  parentCard2: {
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  parentCard3: {
    width: 150,
    height: 150,
    backgroundColor: "lightyellow",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  // parentCard4: {
  //   width: 150,
  //   height: 150,
  //   backgroundColor: "lightpink",
  //   margin: 10,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  img1: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    marginLeft: 23,
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0.3,
    marginTop: 4,
  },
  cities: {
    marginTop: 80,
  },
  hotels: {
    marginTop: 20,
  },
  hotelCard: {
    width: 130,
    height: 90,
    alignItems: "center",
    margin: 7,
  },
  hotelImages: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    opacity: 0.8,
  },
  hotelTitle: {
    marginTop: 10,
    fontSize: 13,
  },
  parentCard: {
    height: 130,
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 7,
  },
  card: {
    width: 100,
    height: 90,
    alignItems: "center",
    margin: 7,
  },
  images: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    opacity: 0.8,
  },
  cityTitle: {
    marginTop: 10,
    color: "#f55a00",
    fontWeight: "600",
    letterSpacing: 0.2,
    fontSize: 13,
  },
});

export default Index;
