import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React,{useRef, useState} from 'react'
import Navigation from './src/navigation/Navigation'

const App = () => {
  return (
  <SafeAreaView style={{flex:1}}>
   <Navigation />
  </SafeAreaView>
  )
}

export default App