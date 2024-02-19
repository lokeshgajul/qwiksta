import React from "react";
import { Text, View, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Index = () => {
  return (
    <View>
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
                Guest User{" "}
              </Text>
              <Text style={{ fontSize: 13 }}>+91 9833483321 </Text>
              <Text style={{ fontSize: 13 }}>Lokesh Gajul</Text>
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

      <View style={{ flexDirection: "column", marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              margin: 5,
              justifyContent: "center",
              height: 100,
              borderRadius: 5,
              elevation: 4,
            }}
          >
            <FontAwesome name="user-o" size={20} color="gray" />
            <Text>Hello</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
