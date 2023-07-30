import styles from "../styles/home";
import { Text, Image, View, Pressable } from "react-native";

type NewProps = {
  item: {
    title: string;
    urlToImage: string;
  }
}

const New = (item: NewProps) => {
  return (
    <Pressable style={styles.pressable}>
      <Image
        style={styles.image}
        source={{ uri: item.item.urlToImage }}
      />
      <View style={styles.text_container}>
        <Text style={styles.text}>
          {item.item.title}
        </Text>
      </View>
    </Pressable>
  )
}

export default New;