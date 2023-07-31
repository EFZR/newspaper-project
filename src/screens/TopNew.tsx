import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getTopNews } from "../api/news";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import New from "../components/New";
import styles from "../styles/home";

interface TopNewProps {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
  url: string;
  content: string;
  publishedAt: string;
}

interface Props {
  navigation: StackNavigationProp<any>;
}

const News: React.FC<Props> = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    getTopNews().then((data) => {
      if (data.status === "ok") {
        setNews(data.articles);
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        onScrollEndDrag={() => {
          setScroll(false)
        }}
        onScrollBeginDrag={() => {
          setScroll(true)
        }}
        style={styles.flatlist}
        data={news}
        keyExtractor={(item: TopNewProps) => item.url}
        renderItem={({ item }) => <New item={item} scroll={scroll} navigation={navigation} />}
      />
    </View>
  );
};

export default News;
