import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  title2: {
    fontSize: 13,
    marginBottom: 10,
  },
  inputHeading: {
    paddingBottom: 5,
    color: "#F2600A",
    fontWeight: "800",
    letterSpacing: 0.3,
    fontSize: 14,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1.5,
    borderRadius: 8,
    width: "100%",
    padding: 8,
    paddingLeft: 15,
  },
  otpButton: {
    marginTop: 10,
  },
  otpText: {
    backgroundColor: "#F2600A",
    padding: 8,
    textAlign: "center",
    borderRadius: 8,
    fontSize: 11,
    color: "white",
    fontWeight: "500",
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
  buttonText: {
    backgroundColor: "#F2600A",
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
    color: "white",
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  text: {
    color: "grey",
    textAlign: "center",
    margin: 8,
  },
});

export default styles;
