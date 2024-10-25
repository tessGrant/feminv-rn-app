import { StyleSheet } from "react-native";
import { text } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  pendingOrErrorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: text.secondary,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  loadingIndicator: {
    marginBottom: 16,
  },
  errorText: {
    marginBottom: 32,
  },
  errorIcon: {
    marginBottom: 8,
  },
});