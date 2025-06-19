import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bars: {
    backgroundColor: "white",
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: "#6B7280",
    marginBottom: 20,
  },
  uplaodImage: {
    height: 180,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#9BA3AF",
    // padding: 30,
    borderStyle: "dashed",
    borderRadius: 15,
    // marginBottom: 24,
  },
  uploadImageText: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 8,
    color: "#6B7280",
  },
  textInputTitle: {
    fontSize: 14,

    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
    color: "#374151",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  textAndIcon: {
    // marginBottom: 10,
    // paddingHorizontal: 10,
    gap: 10,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "baseline",
  },
  textInputSpacing: {
    // marginBottom: 15,
  },
  salaryContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  salaryInput: {
    flex: 1,
  },
  textAreaInput: {
    height: 120,
    textAlignVertical: "top",
  },
  submitButton: {
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 24,
  },
  reviewText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 20,
  },
});
