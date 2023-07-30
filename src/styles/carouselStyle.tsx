import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  carousel: {
    maxHeight: 250,
    marginBottom: 10,
  },
  imageContainer: {
    width,
    aspectRatio: 16 / 9,
  },
  image: {
    width: "95%",
    height: "95%",
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default styles;