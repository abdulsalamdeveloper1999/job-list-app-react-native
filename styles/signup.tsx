import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,

    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF9F8",
  },
  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#FFF3F0",
  },

  button: {
    shadowColor: "#F5511D",

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5511D",
    height: 55,
    width: "100%",
    color: "white",
    borderRadius: 12,
    textAlign: "center",
    // ✅ Shadow for iOS

    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // ✅ Elevation for Android
    elevation: 6,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    marginBottom: 100,
    color: "#F5511D",
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 50,
    fontSize: 18,
    // color: "#F5511D",
    fontWeight: "bold",
    textAlign: "center",
  },

  socialIcons: {
    gap: 20,
    flexDirection: "row",
  },
  icons: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#E8E7E7",
  },
  socialContinue: {
    marginTop: "20%",
    fontWeight: "bold",
    color: "#F5511D",
  },
});
