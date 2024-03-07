import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, View, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import hotel from "../../assets/hotel.jpg";
import feather from "../../assets/feather-check-circle.png";
import location from "../../assets/material-location-on.png";
import fullStar from "../../assets/full-star.png";
import path from "../../assets/path.png";
import Star from "../../assets/star.png";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";

const screenWidth = Dimensions.get("screen").width;
const screenheight = Dimensions.get("screen").height;
const Index = ({ navigation, route }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("select Date ");
  const [selectedTime, setSelectedTime] = useState("select Time ");
  const [selectedHour, setSelectedHour] = useState("00");
  const [Hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const cityName = route.params.cityName;
  console.log("City :", cityName);

  const fetchCityHotels = async () => {
    try {
      const respose = await axios.get(
        `https://qwiksta.com/api/search?address=${cityName}&page=1`
      );
      const data = respose.data.location;
      setHotels(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const formattedDate = new Date(date).toLocaleDateString();
    console.warn("Formatted Date: ", formattedDate);
    setSelectedDate(formattedDate);
    hideDatePicker();
  };
  const handleTimeConfirm = (time) => {
    const selected = new Date(time);
    const hour = selected.getHours();
    setSelectedHour(hour);
    hideTimePicker();
  };

  const navigateToDetails = (itemId) => {
    navigation.navigate("Details", itemId);
    console.log(itemId);
  };

  const initialDate = new Date();
  initialDate.setMinutes(0);

  useEffect(() => {
    fetchCityHotels();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.parentCard}
        onPress={() => navigateToDetails({ itemId: item.id })}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 20,
            zIndex: 5,
            right: 10,
            padding: 8,
            backgroundColor: "#f15a00",
            borderRadius: 20,
          }}
        >
          <AntDesign name="hearto" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.card}>
          <ScrollView horizontal={true}>
            {item.thumbnail && (
              <TouchableOpacity style={styles.childCard}>
                <Image style={styles.img} source={{ uri: item.thumbnail }} />
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
        <View style={{ margin: 12, flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.hotelName}>{item.title} </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={feather}
                style={{ marginRight: 3, marginTop: 2, marginRight: 5 }}
              />
              <Text style={styles.text}>Local ID Accepted</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={feather}
                style={{ marginTop: 2, marginRight: 2 }}
              />
              <Text style={styles.text1}>Couple Friendly</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={feather}
                style={{ marginTop: 2, marginRight: 2 }}
              />
              <Text style={styles.text2}>Pay @ Hotel</Text>
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
            <Text>- {item.address}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Image source={fullStar} style={{ marginRight: 3, marginTop: 2 }} />
            <Image source={fullStar} style={{ marginRight: 3, marginTop: 2 }} />
            <Image source={fullStar} style={{ marginRight: 3, marginTop: 2 }} />
            <Image source={fullStar} style={{ marginRight: 3, marginTop: 2 }} />
            <Image source={Star} style={{ marginRight: 3, marginTop: 2 }} />

            <Text style={{ marginLeft: 7 }}>{item.rating} </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                borderColor: "#f15a00",
                borderWidth: 1,
                borderRadius: 8,
                width: 90,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text> 3 HOUR </Text>
              <Text style={styles.price}> {item.price} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                borderColor: "#f15a00",
                borderWidth: 1,
                borderRadius: 8,
                width: 90,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text> 6 HOUR</Text>
              <Text style={styles.price}> {item.six_hours} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                borderColor: "#f15a00",
                borderWidth: 1,
                borderRadius: 8,
                width: 90,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text> FULL DAY </Text>
              <Text style={styles.price}> {item.daily} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 160,
          backgroundColor: "#f15a00",
          marginBottom: 20,
        }}
      >
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
            <AntDesign name="left" size={20} color="#fff" />
          </TouchableWithoutFeedback>
          <View style={styles.inputParent}>
            <TextInput style={styles.input} placeholder="Search city..." />
            <View
              style={{
                marginLeft: -40,
                justifyContent: "center",
                borderLeftColor: "grey",
                borderLeftWidth: 0.5,
                paddingLeft: 10,
              }}
            >
              <Image
                source={path}
                style={{
                  marginTop: 2,
                  tintColor: "#f15a00",
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              backgroundColor: "#fff",
              padding: 5,
              width: "50%",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: 50,
              flexDirection: "row",
            }}
          >
            <FontAwesome5 name="calendar-alt" size={20} color="#000" />
            <Text>{selectedDate}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={showTimePicker}
            style={{
              backgroundColor: "#fff",
              padding: 5,
              width: "50%",
              marginLeft: 3,
              justifyContent: "space-evenly",
              alignItems: "center",
              height: 50,
              flexDirection: "row",
            }}
          >
            <AntDesign name="clockcircle" size={20} color="#000" />
            <Text>{selectedHour} : 00 </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            date={initialDate}
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
        </View>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#f15a00"
          justifyContent="center"
          style={{ marginTop: 20 }}
        />
      ) : (
        <FlatList
          data={Hotels}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          maxToRenderPerBatch={10}
        />
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          zIndex: 1,
          padding: 15,
          backgroundColor: "#f15a00",
          borderRadius: 30,
          bottom: 50,
          right: 20,
        }}
      >
        <FontAwesome5 name="sun" size={25} color="#fff" />
      </TouchableOpacity>
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
    height: screenheight / 2.4,
    elevation: 2,
    borderRadius: 15,
    padding: 2,
    marginBottom: 10,
    overflow: "hidden",
  },
  card: {
    height: screenheight / 6,
    width: screenWidth,
    borderRadius: 10,
    overflow: "hidden",
  },
  childCard: {
    width: screenWidth / 2,
    marginTop: 3,
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
