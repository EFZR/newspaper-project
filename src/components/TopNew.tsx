import { Text, Image, Pressable } from "react-native";

type TopNewProps = {
  item: {
    title: string;
    urlToImage: string;
    description: string;
  };
};

const TopNew = (item: TopNewProps) => {
  return (
    <Pressable>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: item.item.urlToImage }}
      />
      <Text style={{ fontWeight: "bold" }}>{item.item.title}</Text>
      <Text>{item.item.description}</Text>
    </Pressable>
  );
};

export default TopNew;
