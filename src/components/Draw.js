import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'

const Draw = () => {
  return (
    <SafeAreaView style ={{flex:1}}>
    <SketchCanvas 
      style={{flex:1}}
      strokeColor={'red'}
      strokeWidth={6}
    />
    </SafeAreaView>
  )
}

export default Draw