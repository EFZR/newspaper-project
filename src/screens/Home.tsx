import { FC, useEffect, useState, useRef } from "react";
import { View, FlatList, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { getNews, getNewsBySearch } from "../api/news";
import CarouselNew from "../components/CarouselNew";
import carouselStyles from "../styles/carouselStyle";
import New from "../components/New";
import styles from "../styles/home";
import Loader from "../components/loader";

interface NewProps {
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

const News: FC<Props> = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const textInput = useRef<TextInput | null>(null);

  useEffect(() => {
    getNews()
      .then((data) => {
        if (data.status === "ok") {
          setNews(data.articles);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    navigation.addListener("focus", () => {
      getNews()
        .then((data) => {
          if (data.status === "ok") {
            setNews(data.articles);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, [navigation]);

  useEffect(() => {
    navigation.addListener("blur", () => {
      setLoading(true);
    });
  }, [navigation]);

  useEffect(() => {
    console.log("realoading news");
  }, [news]);

  const handleSearch = (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    setLoading(true);
    const text = event.nativeEvent.text;
    getNewsBySearch(text)
      .then((data) => {
        if (data.status === "ok") {
          setNews(data.articles);
        }
      })
      .finally(() => {
        setLoading(false);
        textInput.current?.clear();
      });
  };

  return (
    <View style={styles.container}>
      {loading ?
        <Loader /> :
        (<FlatList
          onScrollEndDrag={() => {
            setScroll(false);
          }}
          onScrollBeginDrag={() => {
            setScroll(true);
          }}
          data={news}
          style={styles.flatlist}
          keyExtractor={(item: NewProps) => item.url}
          renderItem={({ item }) => <New item={item} scroll={scroll} navigation={navigation} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <>
                <TextInput
                  ref={textInput}
                  style={styles.text_input}
                  placeholder="Search..."
                  placeholderTextColor="#B8B8B8"
                  onSubmitEditing={handleSearch}
                />
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
              </>
            );
          }}
        />)
      }
    </View>
  );
};

export default News;
