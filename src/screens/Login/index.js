import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import bgimg from "../../assets/loginbg.png";
const screenWidth = Dimensions.get("screen").width;
const screenheight = Dimensions.get("screen").height;
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const navigateToSplash = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={bgimg}
        style={{
          height: 330,
          resizeMode: "contain",
          width: screenWidth + 7,
          marginLeft: -6,
          marginTop: -3,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.title2}>
          Sign in using your email or mobile no.{" "}
        </Text>
        <Text style={styles.inputHeading}>Email / Mobile </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your details "
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.otpButton}>
            <Text style={styles.otpText}>Request OTP </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inputHeading}> OTP </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP "
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToSplash()}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>

        <Text style={styles.text}> Terms & Conditions | Privacy Policy </Text>
      </View>
    </View>
  );
};

export default Login;
