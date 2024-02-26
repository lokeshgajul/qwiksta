import React, { useState } from "react";
import {
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalStyles from "../../Global/styles";
const screenWidth = Dimensions.get("screen").width;

const Index = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            paddingVertical: 5,
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
              Laudantium, quos tempora non sit accusamus corrupti earum vero
              minus.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            marginTop: 10,
            paddingVertical: 5,
          }}
        >
          <Text style={styles.bookingTitle}>check-in Details</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "space-evenly",
              }}
            >
              <Text style={styles.Text}>Check in</Text>
              <Text style={styles.Text}>Check Out </Text>
              <Text style={styles.Text}>Period </Text>
              <Text style={styles.Text}>Number Of Adult </Text>
              <Text style={styles.Text}>Rooms </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.Text}>07/09/2022 - 05:00 PM </Text>
              <Text style={styles.Text}>07/09/2022 - 08:00 PM </Text>
              <Text style={styles.Text}>3Hrs </Text>
              <Text style={styles.Text}>2</Text>
              <Text style={styles.Text}>1</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            marginTop: 10,
            paddingVertical: 5,
          }}
        >
          <Text style={styles.bookingTitle}>Customer Details </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "space-evenly",
              }}
            >
              <Text style={styles.Text}>Name </Text>
              <Text style={styles.Text}>Email </Text>
              <Text style={styles.Text}>Mobile </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.Text}>Dummy User </Text>
              <Text style={styles.Text}>Email@Domain.com </Text>
              <Text style={styles.Text}>1234567890 </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            marginTop: 10,
            paddingVertical: 5,
            height: 200,
          }}
        >
          <Text style={styles.bookingTitle}>Pricing Details </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "space-evenly",
              }}
            >
              <Text style={styles.Text}>Base Rate </Text>
              <View style={{ padding: 3 }}>
                <Text style={{ fontSize: 12 }}>Tax (12%) </Text>
                <Text
                  style={{ fontSize: 9, color: "#f55a00", fontWeight: "500" }}
                >
                  Coupon Code{" "}
                </Text>
              </View>
              <Text style={styles.Text}>Coupon Code </Text>
              <Text style={styles.Text}>Grand Total </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.Text}>₹599 </Text>
              <View style={{ paddingVertical: 10, paddingRight: 3 }}>
                <Text style={{ fontSize: 12 }}>₹72 </Text>
                {/* <Text style={{ fontSize: 9 }}>Coupon Code </Text> */}
              </View>
              <Text style={styles.Text}>-₹71 </Text>
              <Text style={styles.Text}>₹600</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={{ justifyContent: "flex-end" }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f15a00",
            justifyContent: "space-around",
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <View>
            <Text style={styles.footerText}>670.88</Text>
            <Text style={{ fontSize: 10, color: "#fff" }}>
              Final Amount (inclusive of All Taxes ){" "}
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.footerText}>BOOK NOW </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  bookingTitle: {
    padding: 5,
    borderColor: "#f55a00",
    borderWidth: 1,
    width: 130,
    marginTop: 15,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 13,
  },
  Text: {
    padding: 3,
    fontSize: 12,
    fontWeight: "400",
  },
  footerText: {
    color: "#fff",
    fontWeight: "600",
  },
});
