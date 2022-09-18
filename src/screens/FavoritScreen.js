import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FavoritScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FavoritScreen</Text>
    </View>
  );
};

export default FavoritScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
