import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

const ProfileDetails = ({ navigation, route }) => {
  const { title } = route.params;
  console.log(title);

  const [profileData, setProfileData] = useState(null);
  const getProfileDetailsByID = async () => {
    try {
      const response = await axios.get(`https://qwiksta.com/api/page/${title}`);
      setProfileData(response.data.post); // Access response.data.post instead of response.post
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileDetailsByID();
  }, []);

  if (!profileData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        marginTop: 30,
        padding: 20,
      }}
    >
      <ScrollView
        contentContainerStyles={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {profileData.post_title}
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 25,
            letterSpacing: 0.5,
          }}
        >
          {profileData.post_content}
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 25,
            letterSpacing: 0.5,
          }}
        >
          {profileData.seo.meta_description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ProfileDetails;
