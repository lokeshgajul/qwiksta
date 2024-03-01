import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Clipboard,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import { Video } from "expo-av";
// import Clipboard from "@react-native-clipboard/clipboard";
import hotel from "../../assets/hotel.jpg";
const screenWidth = Dimensions.get("screen").width;
import Globalstyles from "../../Global/styles";
import axios from "axios";
import BottomTabNavigator from "../../navigation/BottomTab";
const Index = ({ navigation }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [city, setcity] = useState([]);
  const [offers, setOffers] = useState([]);
  const [usps, setUsps] = useState([]);

  const handleTextInputFocus = () => {
    setDropdownOptions([
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 3",
      "Option 3",
      "Option 3",
      "Option 3",
      "Option 3",
      "Option 3",
      "Option 3",
    ]);
    setShowDropdown(true);
  };

  const handleOptionPress = (option) => {
    setSearchText(option);
    setShowDropdown(false);
  };

  const fetchHome = async () => {
    try {
      const response = await axios.get(`https://qwiksta.com/api/get-home`);
      if (response.status) {
        const citiesData = response.data.cities;
        const discountsData = response.data.discounts;
        const uspsData = response.data.usps;
        setcity(citiesData);
        setOffers(discountsData);
        setUsps(uspsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToListing = (cityName) => {
    navigation.navigate("Listing", { cityName });
    console.log(cityName);
  };

  const copyCode = async (code) => {
    try {
      Clipboard.setString(code);
      console.log("Code copied successfully:", code);
      ToastAndroid.show("Text copied to clipboard!", ToastAndroid.SHORT);
    } catch (error) {
      console.error("Error copying code:", error);
      console.log("Fallback for copying code:", code);
    }
  };

  useEffect(() => {
    fetchHome();
  }, []);
  return (
    <View>
      <ScrollView>
        <View
          style={{
            backgroundColor: Globalstyles.bgcolor.backgroundColor,
            height: 220,
          }}
        >
          <View
            style={{
              // backgroundColor: Globalstyles.bgcolor.backgroundColor,
              height: 220,
              justifyContent: "center",
              paddingLeft: 23,
              paddingRight: 23,
              zIndex: 1,
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
                position: "relative",
                width: screenWidth - 40,
                marginBottom: 10,
              }}
              placeholder="Search city..."
              onFocus={handleTextInputFocus}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            {showDropdown && (
              <View style={styles.dropdown}>
                {dropdownOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => handleOptionPress(option)}
                  >
                    <Text>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View
            style={{
              height: 160,
              justifyContent: "center",
              alignItems: "center",
              margin: -60,
              zIndex: 0,
            }}
          >
            {/* <View style={styles.videoContainer}> */}
            <Video
              source={{ uri: "https://qwiksta.com/images/qwiksta-bg-new.mp4" }}
              style={styles.video}
              // controls={true}
              shouldPlay={true}
              isLooping={true}
              resizeMode="cover"
            />
            {/* </View> */}
          </View>
        </View>

        <View style={styles.cities}>
          <Text style={styles.title}>Explore Cities... </Text>
          <ScrollView
            horizontal={true}
            style={styles.parentCard}
            showsHorizontalScrollIndicator={false}
          >
            {city ? (
              city.map((city, index) => {
                return (
                  <TouchableOpacity
                    style={styles.card}
                    key={index}
                    onPress={() => navigateToListing(city.name)}
                  >
                    <Image style={styles.images} source={{ uri: city.image }} />
                    <Text style={Globalstyles.colorTitle}>{city.name} </Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text> Cities Not Available </Text>
            )}
          </ScrollView>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>Search Offers...</Text>
          <ScrollView
            horizontal={true}
            style={{ marginLeft: 7 }}
            showsHorizontalScrollIndicator={false}
          >
            {offers ? (
              offers.map((offer, index) => {
                {
                  return (
                    <TouchableOpacity
                      style={{
                        height: 140,
                        width: screenWidth - 180,
                        marginLeft: 15,
                        marginTop: 12,
                      }}
                      onPress={() => {
                        console.log(`coupon code ${index} : `, offer?.code);
                        copyCode(offer.code);
                      }}
                      key={index}
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 12,
                        }}
                        source={{ uri: offer.image }}
                      />
                    </TouchableOpacity>
                  );
                }
              })
            ) : (
              <Text>No Offers Available </Text>
            )}
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

        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>Why choose Qwiksta... </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ flexDirection: "column" }}>
              {usps.slice(0, 2).map((image, index) => (
                <TouchableOpacity key={index} style={styles.parentCard2}>
                  <Image style={styles.img1} source={{ uri: image }} />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.column}>
              {usps.slice(1, 3).map((image, index) => (
                <TouchableOpacity key={index} style={styles.parentCard1}>
                  <Image style={styles.img} source={{ uri: image }} />
                </TouchableOpacity>
              ))}
            </View>
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
        </View>
      </ScrollView>

      <BottomTabNavigator />
    </View>
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
    marginTop: 0,
  },
  cities: {
    marginTop: 115,
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
    height: 100,
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

  video: {
    width: screenWidth - 45,
    height: "100%",
    borderRadius: 15,
    zIndex: 0,
  },
  dropdown: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    maxHeight: 150,
    overflow: "scroll",
    zIndex: 10,
    marginTop: 100,
    width: screenWidth - 40,
    justifyContent: "center",
  },
  option: {
    overflow: "scroll",
    zIndex: 0,
    margin: 10,
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});

export default Index;
