import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContex = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);

  const Login = () => {
    setIsLoading(true);
    setToken('asgasd');
    AsyncStorage.setItem('userToken', 'asgasd');
    setIsLoading(false);
  };

  const Logut = () => {
    setIsLoading(true);
    setToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log('isi error logged', error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContex.Provider value={{Login, Logut, isLoading, test, token}}>
      {children}
    </AuthContex.Provider>
  );
};
