import { Text, Image, Pressable } from "react-native";

type NewProps = {
  item: {
    title: string;
    urlToImage: string;
  }
}

const New = (item: NewProps ) => {
  return (
    <Pressable>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: item.item.urlToImage }}
      />
      <Text>
        {item.item.title}
      </Text>
    </Pressable> 
  )
}

export default New;