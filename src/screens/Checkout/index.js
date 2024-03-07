import React from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import hotel from "../../assets/hotel.jpg";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const screenWidth = Dimensions.get("screen").width;
import GlobalStyles from "../../Global/styles";
const Index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        <View style={{ backgroundColor: "#ff7000" }}>
          <View style={styles.top_section}>
            <View style={{ width: "50%" }}>
              <Text style={styles.title}>BOOKING CONFIRMATION </Text>
              <Text style={{ fontSize: 12, paddingTop: 10 }}>BOOKING ID</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  marginTop: 4,
                  color: "#f55a00",
                }}
              >
                #QWK001241
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Image
                source={hotel}
                style={{ width: "100%", resizeMode: "cover", height: 100 }}
              />
            </View>
          </View>

          <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
            <View
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                width: screenWidth,
                marginTop: 15,
              }}
            >
              <View
                style={{
                  borderRadius: 10,
                }}
              >
                <Image
                  source={hotel}
                  style={{
                    resizeMode: "cover",
                    height: 80,
                    width: 100,
                    height: 80,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ paddingLeft: 15, paddingRight: 90 }}>
                <Text style={styles.title}>Hotel Avenue </Text>
                <Text style={GlobalStyles.info}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  reiciendis beatae corrupti sit vel aliquam. Voluptatem ut
                  perspiciatis adipisci necessitatibus eligendi excepturi
                  eveniet
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: screenWidth,
                marginTop: 10,
              }}
            >
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Get Directions</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonContainer, { marginLeft: 8 }]}
              >
                <Text style={styles.buttonText}>Download Voucher</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
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
                <Text style={styles.Text}>Check in</Text>
                <Text style={styles.Text}>Check Out </Text>
                <Text style={styles.Text}>Period </Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.Text}>07/09/2022 - 05:00 PM </Text>
                <Text style={styles.Text}>07/09/2022 - 08:00 PM </Text>
                <Text style={styles.Text}>3Hrs </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            padding: 20,
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        >
          <View>
            <Text
              style={[styles.title, { letterSpacing: 0.2, fontWeight: "400" }]}
            >
              Hotel Contact Details{" "}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Feather name="phone-call" size={20} color="#F2600A" />
            <Text
              style={{ marginLeft: 10, color: "#fa5100", fontWeight: "600" }}
            >
              +91 9321535543
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "600" }}>Grand Total </Text>
            <Text
              style={{
                fontSize: 10,
                alignItems: "center",
                marginTop: 2,
              }}
            >
              {" "}
              (Icnl. of GST )
            </Text>
          </View>
          <Text style={{ fontWeight: "600", letterSpacing: 0.3 }}> ₹600 </Text>
        </View>

        <View style={{ backgroundColor: "#fff", padding: 20, marginTop: 10 }}>
          <Text style={styles.header}>Cancellation Policy</Text>
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
          style={GlobalStyles.footer}
          onPress={() => navigation.navigate("ShowBookings")}
        >
          <Text style={GlobalStyles.footer_title}>GO TO BOOKINGS </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_section: {
    flexDirection: "row",
    width: screenWidth,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  buttonContainer: {
    backgroundColor: "#fa5100",
    paddingVertical: 5,
    borderRadius: 10,
    width: screenWidth / 2 - 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 11,
    textAlign: "center",
  },
  Text: {
    padding: 3,
    fontSize: 12,
    fontWeight: "400",
  },
  header: {
    fontSize: 15,
    fontWeight: "400",
  },
  policy_title: {
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 20,
    marginTop: 5,
  },
});
