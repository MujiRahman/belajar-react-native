import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/Dimensions';

const ListItem = ({photo, title, subTitle, isFree, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={photo} />
        <View style={{width: windowWidth - 220}}>
          <Text style={styles.judul}>{subTitle}</Text>
          <Text numberOfLines={1} style={styles.semiJudul}>
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.bottom}>
        <Text style={styles.bottomText}>
          {isFree === 'No' ? price : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 8,
  },
  judul: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  semiJudul: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  bottom: {
    backgroundColor: '#0aada8',
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  bottomText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
});
