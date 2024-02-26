import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import map from "../../assets/Hotel2.jpg";
import img1 from "../../assets/Hotel1.jpg";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import ShowAll from "./ShowAll";

const screenWidth = Dimensions.get("screen").width;
const imageHeight = Dimensions.get("screen").height;

const Details = () => {
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
          <View
            style={{
              position: "absolute",
              top: 50,
              left: 15,
              zIndex: 1,
              backgroundColor: "#f55a00",
              padding: 6,
              borderRadius: 20,
            }}
          >
            <AntDesign name="left" size={20} color="#fff" />
          </View>
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
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.imgView}>
              <Image source={img1} style={styles.img}></Image>
            </View>

            <View style={styles.imgView}>
              <Image source={img1} style={styles.img}></Image>
            </View>
            <View style={[styles.imgView]}>
              <Image source={img1} style={styles.img}></Image>
            </View>
            <View style={styles.imgView}>
              <Image source={img1} style={styles.img}></Image>
            </View>
            <View style={styles.imgView}>
              <Image source={img1} style={styles.img}></Image>
            </View>
          </View>
        </ScrollView>

        <View style={{ backgroundColor: "#fff", height: 160 }}>
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
            <Text style={styles.hotel}>Hotel Avenue</Text>
            <Text style={styles.text}>
              1, Kailash Puram Rd, Pereira Wadi, Sakinaka Andheri East
              Mumbai,Maharashtra 400072
            </Text>
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
          <ShowAll />
        </View>

        <View style={{ backgroundColor: "#fff", padding: 20, marginTop: 10 }}>
          <Text style={styles.hearder}> Location</Text>
          <Image
            source={map}
            style={{
              width: 320,
              height: imageHeight / 4,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </View>

        <View style={{ backgroundColor: "#fff", padding: 20, marginTop: 10 }}>
          <Text style={styles.hearder}>Hotel Policies</Text>
          <Text style={styles.policy_title}>
            6kms away from the International Airport,1Km Away from Asalpha Metro
            station,6 km Away From Andheri Station ,8kms away from Bombay
            Exhibition Center '(NESCO)' and ^kms away from Powai lake
          </Text>
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
        <TouchableOpacity style={styles.footer}>
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
});

export default Details;
