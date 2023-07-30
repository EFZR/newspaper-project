import { Text, Image, Pressable, View } from "react-native";
import styles from "../styles/home";
type TopNewProps = {
  item: {
    title: string;
    urlToImage: string;
  };
};

const TopNew = (item: TopNewProps) => {
  return (
    <Pressable style={styles.pressable}>
      <Image style={styles.image} source={{ uri: item.item.urlToImage }} />
      <View style={styles.text_container}>
        <Text style={styles.text}>{item.item.title}</Text>
      </View>
    </Pressable>
  );
};

export default TopNew;
