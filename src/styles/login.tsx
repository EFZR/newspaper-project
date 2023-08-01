import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  header: {
    color: colors.secondary,
    fontSize: 60,
    fontWeight: "bold",
    marginVertical: 10,
  },
  input: {
    width: "80%",
    height: 40,
    marginVertical: 7,
    padding: 10,
  },
  input_active: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
  },
  button_end: {
    marginVertical: 10,
    marginRight: 50,
    alignSelf: "flex-end",
  },
  text_end: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "bold",
  },
  button_principal: {
    width: "80%",
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text_principal: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  button_center: {
    marginVertical: 10,
  },
  text_center: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "bold",
  },
  error: {
    padding: 10,
    marginVertical: 10,
    color: colors.primary,
    backgroundColor: colors.error,
    width: "80%",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 5,
  }
});


export default styles;