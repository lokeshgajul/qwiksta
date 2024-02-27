import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import bgimg from "../../assets/loginbg.png";
const screenWidth = Dimensions.get("screen").width;
const screenheight = Dimensions.get("screen").height;
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState();
  const [message, setMessage] = useState();
  const [emailMsg, setEmailMsg] = useState();
  const [error, setError] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  // const navigateToSplash = () => {
  //   navigation.navigate("Home");
  //   console.log("data", email, otp);
  // };

  const getOtp = async () => {
    if (!email) {
      return setEmailMsg("please Enter Email first... ");
    }
    if (email.length <= 6) {
      setEmailMsg("email must be 6 characters long");
    }
    try {
      const response = await axios.post(`https://qwiksta.com/api/login-otp`, {
        payload: { email: email },
      });
      if (response.data.status) {
        console.log("OTP Response : ", response.data.status);
        console.log("OTP Response : ", response.data.message);
      } else {
        console.log("OTP Response : ", response.status);
        console.log("OTP Response : ", response.data.message);
        setEmailMsg(response.data.message);
        console.log(email);
        // Clear the emailMsg after 3 seconds
        // setTimeout(() => {
        setEmailMsg("");
        // }, 3000);
      }
    } catch (error) {
      console.log(error);
      console.log(email);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post(
        `https://qwiksta.com/api/login-verify`,
        {
          payload: { email: email, token_2fa: otp },
        }
      );
      if (response.data.status === true) {
        console.log(response.data.message);
        setLoggedIn(true);
        setMessage(response.data.message);
        setTimeout(() => {
          setMessage("");
          navigation.replace("Home");
        }, 1700);
        setEmail("");
        setEmailMsg("");
        setOtp("");
      } else {
        console.log(response.data.message, "login failed.... ");
        setError(response.data.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Default status bar */}

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
        {!email && (
          <Text
            style={{
              marginTop: 5,
              color: "red",
              fontWeight: "500",
              fontSize: 12,
              letterSpacing: 0.5,
              paddingLeft: 5,
            }}
          >
            {emailMsg}
          </Text>
        )}
        {email && email.length < 6 && (
          <Text
            style={{
              marginTop: 5,
              color: "red",
              fontWeight: "500",
              fontSize: 12,
              letterSpacing: 0.5,
              paddingLeft: 5,
            }}
          >
            Email must be at least 6 characters long.
          </Text>
        )}

        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.otpButton} onPress={() => getOtp()}>
            <Text style={styles.otpText}>Request OTP </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inputHeading}> OTP </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP "
          onChangeText={(text) => setOtp(text)}
          value={otp}
          keyboardType="number-pad"
        />

        <TouchableOpacity style={styles.button} onPress={() => verifyOTP()}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        {loggedIn ? (
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              color: "green",
              fontWeight: "500",
              fontSize: 12,
              letterSpacing: 0.5,
              paddingLeft: 5,
            }}
          >
            {message}
          </Text>
        ) : (
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              color: "red",
              fontWeight: "500",
              fontSize: 12,
              letterSpacing: 0.5,
              paddingLeft: 5,
            }}
          >
            {error}
          </Text>
        )}
        <Text style={styles.text}> Terms & Conditions | Privacy Policy </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
