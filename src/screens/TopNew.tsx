import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getNews, getTopNews } from "../api/news";
import New from "../components/New";
import styles from "../styles/home";

interface TopNewProps {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
  url: string;
  content: string;
}

const News = () => {
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
          setScroll(false);
        }}
        onScrollBeginDrag={() => {
          setScroll(true);
        }}
        style={styles.flatlist}
        data={news}
        keyExtractor={(item: TopNewProps) => item.url}
        renderItem={({ item }) => <New item={item} scroll={scroll} />}
      />
    </View>
  );
};

export default News;
