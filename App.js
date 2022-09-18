import React from 'react';
import {AuthProvider} from './src/utils/Contex';
import AppNav from './src/navigation/AppNav';

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
