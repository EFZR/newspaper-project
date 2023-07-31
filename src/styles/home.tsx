import { StyleSheet } from 'react-native';
import { colors } from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 10,
  },
  flatlist: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  pressable: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: colors.primary,
  },
  active_pressable: {
    backgroundColor: "#F1F1F1",
  },
  image: {
    width: 125,
    height: 75,
    borderRadius: 5,
  },
  text_container: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    color: colors.tertiary,
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "center",
  }
});

export default styles;