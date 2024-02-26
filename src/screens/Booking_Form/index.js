import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalStyles from "../../Global/styles";
const screenWidth = Dimensions.get("screen").width;
import path from "../../assets/path.png";

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#fff",
            paddingTop: 5,
            paddingBottom: 15,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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
                minus.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: screenWidth - 45,
              borderRadius: 10,
              backgroundColor: "#f0f0f0",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: GlobalStyles.bgcolor.backgroundColor,
                width: screenWidth / 3 - 15,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                3 HOUR
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                ₹600
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                width: screenWidth / 3 - 15,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                3 HOUR
              </Text>
              <Text
                style={{
                  color: GlobalStyles.colorTitle.color,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                ₹600
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                width: screenWidth / 3 - 15,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                3 HOUR
              </Text>
              <Text
                style={{
                  color: GlobalStyles.colorTitle.color,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                ₹600
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: screenWidth,
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        >
          <View style={{ width: screenWidth / 2 }}>
            <Text style={{ paddingTop: 15, fontSize: 13 }}>Date</Text>
            <Text
              style={{
                marginTop: 10,
                paddingTop: 8,
                paddingBottom: 4,
                paddingLeft: 15,
                borderRadius: 20,
                borderColor: "#efe9e9",
                borderWidth: 2,
                width: screenWidth / 2 - 40,
                textAlign: "left",
                fontSize: 12,
              }}
            >
              29/08/2022
            </Text>
          </View>
          <View style={{ width: screenWidth / 2 }}>
            <Text style={{ paddingTop: 15, fontSize: 13 }}>Time</Text>
            <Text
              style={{
                marginTop: 10,
                paddingTop: 8,
                paddingBottom: 4,
                paddingLeft: 15,
                borderRadius: 20,
                borderColor: "#efe9e9",
                borderWidth: 2,
                width: screenWidth / 2 - 40,
                textAlign: "left",
                fontSize: 12,
              }}
            >
              05:00 PM
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            width: screenWidth,
            backgroundColor: "#fff",
            paddingBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: screenWidth / 3 }}>
              <Text style={{ paddingTop: 15, fontSize: 13 }}>Rooms </Text>
              <Text
                style={{
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 5,
                  backgroundColor: "#efe9e9",
                  borderColor: "#efe9e9",
                  borderWidth: 2,
                  width: screenWidth / 3 - 40,
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                1
              </Text>
            </View>

            <View style={{ width: screenWidth / 3 }}>
              <Text style={{ paddingTop: 15, fontSize: 13 }}>Adults </Text>
              <Text
                style={{
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 5,
                  borderColor: "#efe9e9",
                  borderWidth: 2,
                  width: screenWidth / 3 - 40,
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                1
              </Text>
            </View>

            <View style={{ width: screenWidth / 3 }}>
              <Text style={{ paddingTop: 15, fontSize: 13 }}>Children </Text>
              <Text
                style={{
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 5,
                  borderColor: "#efe9e9",
                  borderWidth: 2,
                  width: screenWidth / 3 - 40,
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                1
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={GlobalStyles.title}>Coupon Code</Text>

            <View
              style={{
                padding: 2,
                borderRadius: 25,
                borderColor: "#efe9e9",
                borderWidth: 2,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ marginLeft: 15 }}>
                <TextInput placeholder="Enter coupon code " />
              </View>
              <View
                style={{
                  backgroundColor: GlobalStyles.bgcolor.backgroundColor,
                  padding: 5,
                  marginRight: 1,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="left" size={16} color="#fff" />
              </View>
            </View>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <Text style={GlobalStyles.title}>Guest Details </Text>
              <View style={GlobalStyles.inputContainer}>
                <TextInput placeholder="Enter Name " />
              </View>
              <View style={GlobalStyles.inputContainer}>
                <TextInput placeholder="Enter Email " />
              </View>
              <View style={GlobalStyles.inputContainer}>
                <TextInput placeholder="Enter Mobile " />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: screenWidth / 2 - 20,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: "100%",
                  padding: 5,
                  flexDirection: "column",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: GlobalStyles.bgcolor.backgroundColor,
                    padding: 3,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11.5,
                      padding: 3,
                      color: "#FFF",
                      fontWeight: "600",
                    }}
                  >
                    UPTO 10% DISCOUNT{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 3,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderColor: "grey",
                    borderWidth: 0.8,
                    alignItems: "center",
                    borderTopWidth: 0, // Set the bottom border width to 0
                  }}
                >
                  <Text style={{ fontSize: 10, padding: 3 }}>No DISCOUNT</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: "100%",
                  padding: 5,
                  flexDirection: "column",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderColor: GlobalStyles.bgcolor.backgroundColor,
                    padding: 3,
                    borderWidth: 1,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#F2600A",
                      fontWeight: "600",
                      fontSize: 11.5,
                    }}
                  >
                    {" "}
                    ONLINE{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 3,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderColor: "grey",
                    borderWidth: 0.8,
                    alignItems: "center",
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontSize: 10, padding: 3 }}>
                    UPTO 10% DISCOUNT{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: GlobalStyles.bgcolor.backgroundColor,
          padding: 7,
        }}
      >
        <View>
          <Text style={GlobalStyles.footer_title}>670.80 / -</Text>
          <Text style={{ color: "#fff", fontSize: 11 }}>
            Final amount{" "}
            <Text style={{ color: "#fff", fontSize: 9 }}>
              (Iclusive of All Taxes )
            </Text>{" "}
          </Text>
        </View>
        <View>
          <Text style={GlobalStyles.footer_title}>BOOK NOW </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
