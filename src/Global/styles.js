import { Dimensions, StyleSheet } from "react-native";
const screenheight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
export default StyleSheet.create({
  bgcolor: {
    backgroundColor: "#F2600A",
  },
  colorTitle: {
    marginTop: 6,
    color: "#F2600A",
    fontWeight: "600",
    letterSpacing: 0.2,
    fontSize: 13,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
  info: {
    color: "#000",
    fontSize: 10.5,
    lineHeight: 15,
  },
  price: {
    fontWeight: "800",
    letterSpacing: 0.5,
    color: "#f15a00",
  },
  inputContainer: {
    padding: 7,
    borderRadius: 25,
    borderColor: "#efe9e9",
    borderWidth: 2,
    marginTop: 10,
    paddingLeft: 20,
  },
  footer: {
    backgroundColor: "#F2600A",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  footer_title: {
    fontSize: 13,
    color: "white",
    fontWeight: "500",
  },

  //******************  Coupon Modal ******************* //
  centeredView: {
    marginTop: 22,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginRight: 10,
    marginTop: 15,
  },
  buttonOpen: {
    backgroundColor: "#F2600A",
  },
  buttonClose: {
    backgroundColor: "#F2600A",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
  },
  modalContent: {
    marginTop: 5,
    padding: 10,
  },

  //******************  Time Modal ******************* //

  TimeModalView: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 400,
    overflow: "scroll",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  timeModalContent: {
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  timeModalText: {
    fontSize: 12,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#f3f3f3",
    letterSpacing: 1,
    lineHeight: 22,
  },

  //******************  City Modal ******************* //
  cityCenterView: {
    alignItems: "center",
    marginTop: 120,
    height: screenheight - 300,
  },
  CityModalView: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "scroll",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cityModalContent: {
    width: screenWidth - 50,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cityModalText: {
    fontSize: 12.5,
    marginBottom: 10,
    padding: 8,
    width: screenWidth / 2,
    borderRadius: 5,
    backgroundColor: "#f3f3f3",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  inputParent: {
    width: screenWidth - 70,
    marginLeft: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  input: {
    padding: 5,
    width: "100%",
  },
});
