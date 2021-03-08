import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import ColorMakerScreen from './src/screens/ColorMakerScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ColorMakerScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==="android"? StatusBar.currentHeight:0,
  },
});
