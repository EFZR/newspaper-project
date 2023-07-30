import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getNews } from "../api/news";
import New from "../components/New"
import styles from '../styles/home';

interface NewProps {
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
    getNews().then((data) => {
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
        keyExtractor={(item: NewProps) => item.url}
        renderItem={({ item }) => (
          <New item={item} />
        )}
      />
    </View>
  );
};

export default News;
