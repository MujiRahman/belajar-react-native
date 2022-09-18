import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GameDetailScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Game Detail Screen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  );
};

export default GameDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
