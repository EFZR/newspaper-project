import React from "react";
import { Text, Image, View } from "react-native";
interface NewProps {
  item: {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
    url: string;
    content: string;
    publishedAt: Date;
  };
}
const DetailedNews: React.FC<NewProps> = ({ item }) => {
  return (
    <View>
      <Image source={{ uri: item.urlToImage }} />
      <Text>{item.title}</Text>
    </View>
  );
};

export default DetailedNews;
