import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from '../styles/configs';


const Configs = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Configs;