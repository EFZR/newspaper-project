import { StyleSheet } from 'react-native';
import { colors } from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  flatlist: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  pressable: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: colors.primary,
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
    fontWeight: "bold",
    justifyContent: "center",
  }
});

export default styles;