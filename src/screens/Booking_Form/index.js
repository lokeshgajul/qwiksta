import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalStyles from "../../Global/styles";
const screenWidth = Dimensions.get("screen").width;
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Index = () => {
  const [increment, setIncrement] = useState(1);
  const [childrenIncrement, setChildrenIncrement] = useState(0);
  const [roomIncrement, setRoomIncrement] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [CheckoutoutDateVisibility, setCheckoutoutDateVisibility] =
    useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [minDate, setminDate] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [selectedBookingTime, setSelectedBookingTime] = useState(null);

  const bookingTimes = [
    {
      id: 1,
      time: "3 HOUR",
      price: "300",
    },
    {
      id: 2,
      time: "6 HOUR",
      price: "600",
    },
    {
      id: 3,
      time: "FULL DAY",
      price: "1000",
    },
  ];

  const handleSelectBookingTime = (bookingTime) => {
    setSelectedBookingTime(bookingTime);
  };
  const handleActive = (index) => {
    setActiveIndex(index);
    console.log("booking index", index);
  };

  const showCheckOUtDatePicker = () => {
    setCheckoutoutDateVisibility(true);
  };

  const hideCheckOUtDatePicker = () => {
    setCheckoutoutDateVisibility(false);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleCheckoutConfirm = (date) => {
    setCheckOut(date);
    hideCheckOUtDatePicker();
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleIncrement = () => {
    setIncrement(increment + 1);
    setChildrenIncrement(childrenIncrement + 1);
  };
  const handleDecrement = () => {
    setIncrement(increment - 1);
    setChildrenIncrement(childrenIncrement - 1);
  };

  const handleChildrenIncrement = () => {
    setChildrenIncrement(childrenIncrement + 1);
  };
  const handleChildrenDecrement = () => {
    setChildrenIncrement(childrenIncrement - 1);
  };

  useEffect(() => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setCheckOut(newDate);
    setminDate(newDate);
  }, [selectedDate]);

  useEffect(() => {
    setRoomIncrement((increment % 2) + Math.floor(increment / 2));
  }, [increment]);

  const maxCount = 10;
  const minCount = 1;
  const minchildCount = 0;
  const maxChildCount = 20;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#fff",
            paddingTop: 5,
            paddingBottom: 15,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#f55a00",
                padding: 8,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 14,
              }}
            >
              <AntDesign name="left" size={20} color="#fff" />
            </View>
            <View style={{ padding: 20, marginTop: 20 }}>
              <Text style={GlobalStyles.title}>Hotel Avenue</Text>
              <Text style={GlobalStyles.info}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, quos tempora non sit accusamus corrupti earum vero
                minus.
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: screenWidth - 45,
              borderRadius: 10,
              backgroundColor: "#f0f0f0",
            }}
          >
            {bookingTimes.map((timings, index) => (
              <TouchableOpacity
                key={timings.id}
                style={{
                  padding: 5,
                  backgroundColor:
                    activeIndex === index
                      ? GlobalStyles.bgcolor.backgroundColor
                      : "#f3f3f3",
                  width: screenWidth / 3 - 15,
                  borderRadius: 10,
                }}
                onPress={() => {
                  handleActive(index);
                  handleSelectBookingTime(timings);
                }}
              >
                <Text
                  style={{
                    color: activeIndex === index ? "#fff" : "#000",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {timings.time}
                </Text>
                <Text
                  style={{
                    color:
                      activeIndex === index
                        ? "#fff"
                        : GlobalStyles.colorTitle.color,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {timings.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: screenWidth,
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        >
          <View style={{ width: screenWidth / 2 }}>
            <Text style={{ paddingTop: 15, fontSize: 13 }}>Date</Text>
            <TouchableOpacity
              onPress={showDatePicker}
              style={{
                marginTop: 10,
                paddingVertical: 5,
                paddingLeft: 15,
                borderRadius: 20,
                borderColor: "#efe9e9",
                borderWidth: 2,
                width: screenWidth / 2 - 40,
                textAlign: "left",
                fontSize: 12,
              }}
            >
              <Text>{new Date(selectedDate).toLocaleDateString()}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          {selectedBookingTime && selectedBookingTime.id === 3 ? (
            <View style={{ width: screenWidth / 2 }}>
              <Text style={{ paddingTop: 15, fontSize: 13 }}>
                Checkout Date
              </Text>
              <TouchableOpacity
                onPress={showCheckOUtDatePicker}
                style={{
                  marginTop: 10,
                  paddingVertical: 5,
                  paddingLeft: 15,
                  borderRadius: 20,
                  borderColor: "#efe9e9",
                  borderWidth: 2,
                  width: screenWidth / 2 - 40,
                  textAlign: "left",
                  fontSize: 12,
                }}
              >
                <Text>{new Date(checkOut).toLocaleDateString()}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={CheckoutoutDateVisibility}
                mode="date"
                onConfirm={handleCheckoutConfirm}
                onCancel={hideCheckOUtDatePicker}
                minimumDate={minDate}
              />
            </View>
          ) : (
            <View style={{ width: screenWidth / 2 }}>
              <Text style={{ paddingTop: 15, fontSize: 13 }}>Time</Text>
              <Text
                style={{
                  marginTop: 10,
                  paddingTop: 8,
                  paddingBottom: 4,
                  paddingLeft: 15,
                  borderRadius: 20,
                  borderColor: "#efe9e9",
                  borderWidth: 2,
                  width: screenWidth / 2 - 40,
                  textAlign: "left",
                  fontSize: 12,
                }}
              >
                05:00 PM
              </Text>
            </View>
          )}
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            width: screenWidth,
            backgroundColor: "#fff",
            paddingBottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // width: screenWidth / 2,
            }}
          >
            <View style={{ width: screenWidth / 3 }}>
              <Text style={{ paddingTop: 15, fontSize: 13 }}>Rooms </Text>
              <Text
                style={{
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 5,
                  backgroundColor: "#efe9e9",
                  borderColor: "#efe9e9",
                  borderWidth: 2,
                  width: screenWidth / 3 - 25,
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                {roomIncrement}
              </Text>
            </View>

            <View style={{ width: screenWidth / 3 }}>
              <Text style={{ paddingTop: 15, fontSize: 13 }}>Adults </Text>
              <View
                style={{
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 5,
                  borderColor: "#efe9e9",
                  borderWidth: 2,
                  width: screenWidth / 3 - 30,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity
                  onPress={handleDecrement}
                  disabled={increment === minCount}
                >
                  <AntDesign name="minuscircle" size={16} color="#000" />
                </TouchableOpacity>
                <Text style={{ fontSize: 12 }}> {increment}</Text>
                <TouchableOpacity
                  onPress={handleIncrement}
                  disabled={increment === maxCount}
                >
                  <Ionicons name="add-circle-sharp" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ width: screenWidth }}>
              <Text style={{ paddingTop: 15, fontSize: 13 }}>Children </Text>
              <View
                style={{
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 5,
                  borderColor: "#efe9e9",
                  borderWidth: 2,
                  width: screenWidth / 3 - 30,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity
                  onPress={handleChildrenDecrement}
                  disabled={childrenIncrement === minchildCount}
                >
                  <AntDesign name="minuscircle" size={16} color="#000" />
                </TouchableOpacity>
                <Text style={{ fontSize: 12 }}> {childrenIncrement}</Text>
                <TouchableOpacity
                  onPress={handleChildrenIncrement}
                  disabled={childrenIncrement === maxChildCount}
                >
                  <Ionicons name="add-circle-sharp" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={GlobalStyles.title}>Coupon Code</Text>

            <View
              style={{
                padding: 2,
                borderRadius: 25,
                borderColor: "#efe9e9",
                borderWidth: 2,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ marginLeft: 15 }}>
                <TextInput placeholder="Enter coupon code " />
              </View>
              <View
                style={{
                  backgroundColor: GlobalStyles.bgcolor.backgroundColor,
                  padding: 5,
                  marginRight: 1,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="left" size={16} color="#fff" />
              </View>
            </View>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <Text style={GlobalStyles.title}>Guest Details </Text>
              <View style={GlobalStyles.inputContainer}>
                <TextInput placeholder="Enter Name " />
              </View>
              <View style={GlobalStyles.inputContainer}>
                <TextInput placeholder="Enter Email " />
              </View>
              <View style={GlobalStyles.inputContainer}>
                <TextInput placeholder="Enter Mobile " />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: screenWidth / 2 - 20,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: "100%",
                  padding: 5,
                  flexDirection: "column",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: GlobalStyles.bgcolor.backgroundColor,
                    padding: 3,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11.5,
                      padding: 3,
                      color: "#FFF",
                      fontWeight: "600",
                    }}
                  >
                    UPTO 10% DISCOUNT{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 3,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderColor: "grey",
                    borderWidth: 0.8,
                    alignItems: "center",
                    borderTopWidth: 0, // Set the bottom border width to 0
                  }}
                >
                  <Text style={{ fontSize: 10, padding: 3 }}>No DISCOUNT</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: "100%",
                  padding: 5,
                  flexDirection: "column",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderColor: GlobalStyles.bgcolor.backgroundColor,
                    padding: 3,
                    borderWidth: 1,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#F2600A",
                      fontWeight: "600",
                      fontSize: 11.5,
                    }}
                  >
                    {" "}
                    ONLINE{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 3,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderColor: "grey",
                    borderWidth: 0.8,
                    alignItems: "center",
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontSize: 10, padding: 3 }}>
                    UPTO 10% DISCOUNT{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: GlobalStyles.bgcolor.backgroundColor,
          padding: 7,
        }}
      >
        <View>
          <Text style={GlobalStyles.footer_title}>670.80 / -</Text>
          <Text style={{ color: "#fff", fontSize: 11 }}>
            Final amount{" "}
            <Text style={{ color: "#fff", fontSize: 9 }}>
              (Iclusive of All Taxes )
            </Text>{" "}
          </Text>
        </View>
        <View>
          <Text style={GlobalStyles.footer_title}>BOOK NOW </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
