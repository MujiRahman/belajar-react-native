import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const BannerSlider = ({data}) => {
  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image} />
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
  },
  image: {
    height: 150,
    width: 300,
    borderRadius: 10,
  },
});
