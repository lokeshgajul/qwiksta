import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const screenWidth = Dimensions.get("screen").width;
import GlobalStyles from "../Global/styles";
import axios from "axios";
const CityModal = () => {
  const [showCityModal, setShowCityModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [allCities, setAllCities] = useState([]);

  const fetchAllCities = async () => {
    try {
      const response = await axios.get(`https://qwiksta.com/api/cities`);
      if (response.status) {
        const AllCitiesData = response.data.cities;
        setAllCities(AllCitiesData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCityModal = (cityName) => {
    setSearchText(cityName);
    setShowCityModal(!showCityModal);
  };

  useEffect(() => {
    fetchAllCities();
  }, []);
  return (
    <View>
      <TextInput
        style={{
          padding: 4,
          paddingLeft: 10,
          backgroundColor: "#fff",
          borderRadius: 6,
          marginTop: 10,
          position: "relative",
          width: screenWidth - 40,
          marginBottom: 10,
        }}
        placeholder="Search city..."
        onPressIn={() => setShowCityModal(true)}
        value={searchText}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={showCityModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowCityModal(!showCityModal);
        }}
      >
        <View style={GlobalStyles.cityCenterView}>
          <View style={GlobalStyles.CityModalView}>
            <Pressable
              style={[GlobalStyles.button, GlobalStyles.buttonClose]}
              onPress={() => setShowCityModal(!showCityModal)}
            >
              <AntDesign name="close" color="#fff" />
            </Pressable>
            <ScrollView contentContainerStyle={GlobalStyles.cityModalContent}>
              {allCities ? (
                allCities.map((cityName, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => handleCityModal(cityName)}
                    >
                      <Text style={GlobalStyles.cityModalText}>{cityName}</Text>
                    </Pressable>
                  );
                })
              ) : (
                <Text>No Cities Available...</Text>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CityModal;
