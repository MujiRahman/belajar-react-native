import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MomentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MomentScreen</Text>
    </View>
  );
};

export default MomentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
