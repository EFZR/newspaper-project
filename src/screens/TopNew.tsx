import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getNews, getTopNews } from "../api/news";
import TopNew from "../components/TopNew";
import styles from "../styles/home";

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
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <TopNew item={item} />}
      />
    </View>
  );
};

export default News;
