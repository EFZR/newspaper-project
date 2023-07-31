import { colors } from "./colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginVertical: 10,
  },
  text: {
    color: colors.tertiary,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    color: colors.secondary,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    color: colors.tertiary,
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 10,
  },
  link: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    alignItems: "center",
  },
});

export default styles;