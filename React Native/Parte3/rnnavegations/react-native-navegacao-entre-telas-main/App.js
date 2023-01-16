import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import AppRoutes from './src/Routes/AppRoutes';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRoutes />
    </SafeAreaView>
  );
}
