import React from "react";
import { useState } from "react";
import { Text, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import styles from "../styles/home";

interface Props {
  item: {
    title: string;
    urlToImage: string;
    description: string;
    publishedAt: string;
    author: string;
    content: string;
    url: string;
  }
  scroll: Boolean;
  navigation: StackNavigationProp<any>;
}

const New: React.FC<Props> = ({ item, scroll, navigation }) => {
  const [active, setActive] = useState(false);

  const onTouchStart = () => {
    if (!scroll) {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 100);
    }
  }

  const onTouchEnd = () => {
    if (!scroll) {
      navigation.navigate("Details", {
        title: item.title,
        image: item.urlToImage,
        description: item.description,
        publishedAt: item.publishedAt,
        content: item.content,
        url: item.url,
      });
    }
  }

  return (
    <Pressable style={[styles.pressable, active && styles.active_pressable]}
      onTouchStart={onTouchStart}
      onTouchEnd={() => onTouchEnd()}
    >
      <Image
        style={styles.image}
        source={{ uri: item.urlToImage }}
      />
      <View style={styles.text_container}>
        <Text style={styles.text}>
          {item.title}
        </Text>
      </View>
    </Pressable>
  )
}

export default New;