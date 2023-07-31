import React from "react";
import styles from "../styles/detail";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { formatDate } from "../utils/helpers";

interface Props {
  route: {
    params: {
      title: string;
      image: string;
      description: string;
      publishedAt: string;
      content: string;
      url: string;
    }
  }
}

const Detail: React.FC<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: route.params.image }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{route.params.title}</Text>
        <Text style={styles.date}>{formatDate(route.params.publishedAt)}</Text>
        <Text style={styles.description}>{route.params.description}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(route.params.url)}>
          <Text style={styles.link}>Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Detail;