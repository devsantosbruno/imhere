import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },

  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 36,
    marginBottom: 42,

    input: {
      flex: 1,
      padding: 15,
      borderRadius: 5,
      fontSize: 16,
      backgroundColor: "#1f1e25",
      color: "#FFF",
      marginRight: 12,
    },
  },
  button: {
    width: 50,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",

    buttonText: {
      color: "#FFF",
      fontSize: 24,
    },
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 15,
  },
});
