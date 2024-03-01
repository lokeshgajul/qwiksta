import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BottomTabNavigator from "../../navigation/BottomTab";
import { TouchableOpacity } from "react-native-gesture-handler";
const screenWidth = Dimensions.get("screen").width;
const Index = ({ navigation }) => {
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    const response = await axios.get(
      `https://qwiksta.com/api/get-my-profile/1`
    );
    setProfileData(response.data);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const profileItems = [
    { id: 1, title: "Personal Info" },
    { id: 2, title: "cancellation-policy" },
    { id: 3, title: "Faqs" },
    { id: 4, title: "Blogs" },
    { id: 5, title: "about-us" },
    { id: 6, title: "Help & Support" },
    { id: 7, title: "privacy-policy " },
    { id: 8, title: "terms-and-conditions" },
    { id: 9, title: "Settings" },
  ];

  const ProfileDetails = (title) => {
    navigation.navigate("ProfileDetails", { title });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f55a00",
          paddingHorizontal: 30,
          height: 170,
          marginBottom: 20,
        }}
      >
        <AntDesign name="left" size={20} color="#fff" />
        <Text style={{ color: "#fff", marginStart: 15, fontSize: 16 }}>
          My Profile
        </Text>
      </View>

      {profileData && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              elevation: 4,
              paddingVertical: 25,
              paddingHorizontal: 20,
              marginTop: -70,
              borderRadius: 10,
              width: "90%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#ffdfcb",
                  padding: 15,
                  borderRadius: 40,
                }}
              >
                <FontAwesome name="user-o" size={20} color="gray" />
              </View>

              <View style={{ marginStart: 25 }}>
                <Text style={{ fontWeight: "700", fontSize: 15 }}>
                  {profileData.first_name}
                </Text>
                <Text style={{ fontSize: 13 }}>+91 9833483321 </Text>
                <Text style={{ fontSize: 13 }}>
                  {profileData.first_name} {profileData.last_name}
                </Text>
              </View>
            </View>

            <Text
              style={{
                color: "grey",
                textAlign: "center",
                marginTop: 8,
                fontSize: 13,
                marginStart: 10,
              }}
            >
              Member Since 28/12/2023
            </Text>
          </View>
        </View>
      )}

      <View style={{ flexDirection: "column", marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          {profileItems.slice(0, 3).map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  // flex: 1,
                  alignItems: "center",
                  backgroundColor: "#fff",
                  margin: 5,
                  justifyContent: "center",
                  height: 100,
                  borderRadius: 5,
                  elevation: 4,
                  width: screenWidth / 3 - 20,
                }}
                onPress={() => ProfileDetails(item.title)}
              >
                <FontAwesome name="user-o" size={20} color="gray" />
                <Text style={styles.text}>{item.title} </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          {profileItems.slice(3, 6).map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  // flex: 1,
                  alignItems: "center",
                  backgroundColor: "#fff",
                  margin: 5,
                  justifyContent: "center",
                  height: 100,
                  borderRadius: 5,
                  elevation: 4,
                  width: screenWidth / 3 - 20,
                }}
                onPress={() => ProfileDetails(item.title)}
              >
                <FontAwesome name="user-o" size={20} color="gray" />
                <Text style={styles.text}>{item.title} </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          {profileItems.slice(6, 9).map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  // flex: 1,
                  alignItems: "center",
                  backgroundColor: "#fff",
                  margin: 5,
                  justifyContent: "center",
                  height: 100,
                  borderRadius: 5,
                  elevation: 4,
                  width: screenWidth / 3 - 20,
                }}
                onPress={() => ProfileDetails(item.title)}
              >
                <FontAwesome name="user-o" size={20} color="gray" />
                <Text style={styles.text}>{item.title} </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <BottomTabNavigator />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    marginHorizontal: 10,
    textAlign: "center",
    marginTop: 8,
  },
});
