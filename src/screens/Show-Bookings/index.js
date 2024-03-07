import React, { useEffect, useState } from "react";
import {
  View,
  Pressable,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalStyles from "../../Global/styles";
import BottomTabNavigator from "../../navigation/BottomTab";
import axios from "axios";
const screenWidth = Dimensions.get("screen").width;
const screenheight = Dimensions.get("screen").height;
const Index = ({ navigation }) => {
  const [pastBooking, setPastBooking] = useState([]);
  const [UpcomingBooking, setUpcomingBooking] = useState([]);
  const [bookingState, setBookingState] = useState("UPCOMING");

  const booking = [
    {
      id: 1,
      state: "UPCOMING",
    },
    {
      id: 1,
      state: "PAST",
    },
  ];
  const fetchPastBookings = async () => {
    try {
      const response = await axios.get(
        `https://qwiksta.com/api/get-past-bookings/2915`
      );
      setPastBooking(response.data);
      console.log("past booking ");
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUpcomingBookings = async () => {
    try {
      const response = await axios.get(
        `https://qwiksta.com/api/get-upcoming-bookings/2915`
      );
      setUpcomingBooking(response.data);
      console.log("up booking ");
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginTop: 5,
          marginHorizontal: 20,
          backgroundColor: "#fff",
          elevation: 5,
          borderRadius: 10,
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <View style={{ padding: 15 }}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600" }}>{item.booking_id}</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 12, letterSpacing: 0.4 }}>
              {item.start_time} To {item.end_time}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: GlobalStyles.colorTitle.color,
                fontWeight: "600",
              }}
            >
              {item.total}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                marginLeft: 10,
                color: GlobalStyles.colorTitle.color,
                fontWeight: "600",
                letterSpacing: 0.4,
                textAlign: "right",
              }}
            >
              Cancel Booking
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const handleBooking = (state) => {
    setBookingState(state);
  };

  useEffect(() => {
    if (bookingState === "UPCOMING") {
      fetchUpcomingBookings();
    } else if (bookingState === "PAST") {
      fetchPastBookings();
    }
  }, [bookingState]);
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
          <Text style={GlobalStyles.title}>My Bookings </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginHorizontal: 20,
        }}
      >
        {booking.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor:
                  bookingState === item.state
                    ? GlobalStyles.bgcolor.backgroundColor
                    : "#fff",
                padding: 8,
                borderRadius: 6,
                elevation: 2,
                margin: 10,
                width: screenWidth / 2 - 20,
              }}
              onPress={() => {
                handleBooking(item.state);
              }}
            >
              <Text
                style={{
                  color: bookingState === item.state ? "#fff" : "#000",
                  fontWeight: "500",
                  letterSpacing: 0.4,
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                {item.state}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* <Text>No Past Bookings....</Text> */}

        {/* <TouchableOpacity
          style={{
            backgroundColor: pastBooking
              ? GlobalStyles.bgcolor.backgroundColor
              : "#fff",
            padding: 8,
            borderRadius: 10,
            width: screenWidth / 2 - 20,
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              letterSpacing: 0.4,
              textAlign: "center",
              fontSize: 12,
            }}
          >
            PAST
          </Text>
        </TouchableOpacity> */}
      </View>

      {/* <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          backgroundColor: "#fff",
          elevation: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ padding: 15 }}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 5,
              alignItems: "center",
            }}
          >
            <View>
              <Text>#QWK005137</Text>
              <Text
                style={{
                  fontSize: 9,
                  marginLeft: 10,
                  color: GlobalStyles.colorTitle.color,
                  fontWeight: "600",
                  letterSpacing: 0.4,
                }}
              >
                cancelled
              </Text>
            </View>
            <View></View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text>25/03/2023 To 25/03/2023</Text>
          </View>
          <View>
            <Text
              style={{
                color: GlobalStyles.colorTitle.color,
                fontWeight: "600",
              }}
            >
              ₹477
            </Text>
          </View>
        </View>
      </View> */}

      <View style={{ marginBottom: 210 }}>
        {bookingState === "UPCOMING" &&
          (UpcomingBooking.length === 0 ? (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Text style={{ color: "#000" }}>
                No upcoming bookings available
              </Text>
            </View>
          ) : (
            <FlatList
              data={UpcomingBooking}
              renderItem={renderItem}
              keyExtractor={(item, index) =>
                item.id ? item.id.toString() : index.toString()
              }
            />
          ))}

        {bookingState === "PAST" &&
          (pastBooking.length === 0 ? (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Text style={{ color: "#000" }}>No Past bookings available</Text>
            </View>
          ) : (
            // <View style={{ marginBottom: 70 }}>
            <FlatList
              data={pastBooking}
              renderItem={renderItem}
              keyExtractor={(item, index) =>
                item.id ? item.id.toString() : index.toString()
              }
            />
            // </View>
          ))}
      </View>

      {/* <View> */}
      <BottomTabNavigator />
      {/* </View> */}
    </View>
  );
};

export default Index;
