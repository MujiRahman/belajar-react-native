import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContex} from '../utils/Contex';
import {ActivityIndicator, View} from 'react-native';

const AppNav = () => {
  const {isLoading, token} = useContext(AuthContex);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
