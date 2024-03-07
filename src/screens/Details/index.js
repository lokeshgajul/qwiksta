import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import axios from "axios";

const screenWidth = Dimensions.get("screen").width;
const imageHeight = Dimensions.get("screen").height;

const Details = ({ navigation, route }) => {
  const itemID = route.params;

  const [details, setDetails] = useState(null);
  const [showItems, setshowItems] = useState(false);

  const toggleShowAll = () => {
    setshowItems(!showItems);
  };

  const getDetailsOfHotel = async () => {
    try {
      const itemIdValue = itemID.itemId;
      console.log(itemIdValue);
      const response = await axios.get(
        `https://qwiksta.com/api/single?id=${itemIdValue}`
      );
      const data = response.data;
      if (data && data.post) {
        setDetails(data.post);
      } else {
        console.log("No post data found in the response.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailsOfHotel();
  }, []);

  if (!details) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            zIndex: 1,
            justifyContent: "space-between",
            position: "absolute",
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 50,
              left: 15,
              zIndex: 1,
              backgroundColor: "#f55a00",
              padding: 6,
              borderRadius: 20,
            }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="left" size={20} color="#fff" />
          </TouchableOpacity>

          <View
            style={{
              position: "absolute",
              top: 50,
              left: 260,
              zIndex: 1,
              backgroundColor: "#f55a00",
              padding: 6,
              borderRadius: 20,
            }}
          >
            <MaterialIcons name="favorite-border" color="#fff" size={20} />
          </View>
          <View
            style={{
              position: "absolute",
              top: 50,
              left: 310,
              zIndex: 1,
              backgroundColor: "#f55a00",
              padding: 6,
              borderRadius: 20,
            }}
          >
            <Feather name="share-2" color="#fff" size={20} />
          </View>
        </View>
        <FlatList
          data={details.gallery}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imgView}>
              <Image source={{ uri: item }} style={styles.img} />
            </View>
          )}
        />

        <View style={{ backgroundColor: "#fff", paddingBottom: 20 }}>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.button1}>
              <Text style={{ fontSize: 10, fontWeight: "900", color: "#ffff" }}>
                LUXE
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "900",
                color: "#000",
              }}
            >
              <Entypo name="star" size={17} color="#FFD700" /> 4.6
            </Text>
          </View>

          {/* Hotel Avenue */}

          <View>
            <Text style={styles.hotel}>{details.post_title}</Text>
            <Text style={styles.text}>{details.location_address}</Text>
          </View>

          {/* </View> */}
          <View style={styles.icon_container}>
            <View>
              <Text style={styles.icone}>
                {" "}
                <Feather name="check-circle" /> Local ID Accepted{" "}
              </Text>
            </View>
            <View>
              <Text style={styles.icone}>
                {" "}
                <Feather name="check-circle" /> Couple Friendly{" "}
              </Text>
            </View>
            <View>
              <Text style={styles.icone}>
                {" "}
                <Feather name="check-circle" /> Pay @Hotel
              </Text>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: "#fff", padding: 20, marginTop: 10 }}>
          {/* <ShowAll details={details} /> */}
          <View>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Amenities & Facilities
            </Text>
          </View>
          {details ? (
            details.space_amenity.map((item, id) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                  key={id}
                >
                  <Text>{item.des}</Text>
                  <Text
                    style={{
                      lineHeight: 25,
                      fontSize: 12,
                      fontWeight: "400",
                      marginLeft: 10,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })
          ) : (
            <Text>No Amenities available </Text>
          )}
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <Text style={styles.hearder}> Location</Text>
        </View>

        <View style={{ backgroundColor: "#fff", padding: 20, marginTop: 10 }}>
          <Text style={styles.hearder}>Hotel Policies</Text>
          <Text style={styles.policy_title}>{details.hotel_policy}</Text>
        </View>

        <View style={{ backgroundColor: "#fff", padding: 20, marginTop: 10 }}>
          <Text style={styles.hearder}>Cancellation Policy</Text>
          <Text style={styles.policy_title}>
            6kms away from the International Airport,1Km Away from Asalpha Metro
            station,6 km Away From Andheri Station ,8kms away from Bombay
            Exhibition Center '(NESCO)' and ^kms away from Powai lake 6kms away
            from the International Airport,1Km Away from Asalpha Metro station,6
            km Away From Andheri Station ,8kms away from Bombay Exhibition
            Center '(NESCO)' and ^kms away from Powai lake
          </Text>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.navigate("BookingForm")}
        >
          <Text style={styles.title}>CHECK AVAILABILITY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgView: {
    width: screenWidth,
    overflow: "hidden",
    height: imageHeight / 3,
    opacity: 0.7,
    marginRight: 5,
  },
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button_container: {
    marginHorizontal: 17,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  button1: {
    backgroundColor: "#0D98BA",
    width: 80,
    alignItems: "center",
    padding: 4,
    borderRadius: 2,
  },

  hotel: {
    fontWeight: "500",
    fontSize: 18,
    marginHorizontal: 17,
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    marginHorizontal: 17,
    marginTop: 10,
  },
  icon_container: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  icone: {
    fontSize: 10.5,
    color: "#ff4500",
    marginLeft: 5,
  },
  hearder: {
    fontSize: 15,
    fontWeight: "400",
  },
  policy_title: {
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 20,
    marginTop: 5,
  },

  footer: {
    backgroundColor: "#ff4500",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  title: {
    fontSize: 13,
    color: "white",
    fontWeight: "500",
  },
  map: {
    width: "99%",
    height: 200,
    marginTop: 10,
    borderRadius: 10, // Add borderRadius here
  },
});

export default Details;
