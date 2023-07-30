import React from "react";
import styles from "../styles/carouselStyle";
import { TouchableOpacity, Image } from "react-native";

interface Props {
  item: {
    title: string;
    urlToImage: string;
  }
}

const CarouselNew: React.FC<Props> = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.imageContainer}
    >
        <Image
          style={styles.image}
          source={{ uri: item.urlToImage }}
        />
    </TouchableOpacity>
  )
}

export default CarouselNew;