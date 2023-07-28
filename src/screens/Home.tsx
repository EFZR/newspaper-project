import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getNews } from "../api/news";
import styles from '../styles/home';


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
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default News;
