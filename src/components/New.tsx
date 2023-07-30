import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import { useState } from "react";
import styles from "../styles/home";

interface Props {
  item: {
    title: string;
    urlToImage: string;
  }
  scroll: Boolean;
}

const New: React.FC<Props> = ({item, scroll}) => {
  const [active, setActive] = useState(false);

  const onTouchStart = () => {
    if (!scroll) {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 100);
    }
  }

  const onTouchEnd = (name: String) => {
    if (!scroll) {
      alert(name);
    }
  }

  return (
    <Pressable style={[styles.pressable, active && styles.active_pressable]}
      onTouchStart={onTouchStart}
      onTouchEnd={() => onTouchEnd(item.title)}
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