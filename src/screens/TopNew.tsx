import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getNews, getTopNews } from "../api/news";
import TopNew from "../components/TopNew";
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
        style={styles.flatlist}
        data={news}
        keyExtractor={(item: TopNewProps) => item.url}
        renderItem={({ item }) => <TopNew item={item} />}
      />
    </View>
  );
};

export default News;
