import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Category from './App/Componets/Category';
import React from 'react';
import Home from './App/Screens/Home'
import TopHeadLine from './App/Componets/TopHeadLine';
export default function App() {
  return (
   <View>
    <Category/>
  
      <TopHeadLine/>
   </View>
      
      
    
  );
}



