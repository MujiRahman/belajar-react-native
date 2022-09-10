import React from 'react';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
//const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator options={{headerShown: false}}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;
