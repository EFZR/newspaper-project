import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getNews } from "../api/news";
import CarouselNew from "../components/CarouselNew";
import carouselStyles from "../styles/carouselStyle";
import New from "../components/New";
import styles from "../styles/home";

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
  const [scroll, setScroll] = useState(false);

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
        onScrollEndDrag={() => {
          setScroll(false);
        }}
        onScrollBeginDrag={() => {
          setScroll(true);
        }}
        data={news}
        style={styles.flatlist}
        keyExtractor={(item: NewProps) => item.url}
        renderItem={({ item }) => <New item={item} scroll={scroll} />}
        ListHeaderComponent={() => {
          return (
            <FlatList
              data={news}
              renderItem={({ item }) => <CarouselNew item={item} />}
              keyExtractor={(item: NewProps) => item.url}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment="start"
              decelerationRate="fast"
              style={carouselStyles.carousel}
              pagingEnabled
            />
          );
        }}
      />
    </View>
  );
};

export default News;
