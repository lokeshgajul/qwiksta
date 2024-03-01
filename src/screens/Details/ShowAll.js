import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";

const ShowAll = ({ details }) => {
  const [showItems, setshowItems] = useState(false);

  const data = [
    {
      id: 1,
      title: "Traveller List",
      des: <MaterialIcons name="tv" style={styles.icons} />,
    },
    {
      id: 2,
      title: "Car Parking",
      des: <AntDesign name="car" style={styles.icons} />,
    },
    {
      id: 3,
      title: "Television",
      des: <MaterialIcons name="tv" style={styles.icons} />,
    },
    {
      id: 4,
      title: "Room Available",
      des: <Fontisto name="room" style={styles.icons} />,
    },
    {
      id: 5,
      title: "Air Conditioner",
      des: <MaterialIcons name="tv" style={styles.icons} />,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
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
            {details.title}
          </Text>
        </View>
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setshowItems(!showItems)}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#ff4500",
            }}
          >
            {showItems ? "Show less" : "Show All"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View>
        <Text style={styles.header}>Amenities & Facilities</Text>
      </View>
      <FlatList
        data={showItems ? details : details}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderFooter}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 15, fontWeight: "400" },
  button: {
    marginVertical: 10,
    height: 30,
    alignItems: "center",
    marginHorizontal: 100,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 50,
    borderColor: "#ff4500",
    borderWidth: 1.2,
  },
  icons: {
    fontSize: 15,
    alignItems: "center",
  },
});
export default ShowAll;
